import { useEffect, useState } from "react";
import { Tabs } from "./Day3Tabs";

function Day5UserProfile() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadProfile() {
            try {
                setLoading(true);
                setError(null);
                const base = "https://jsonplaceholder.typicode.com";
                const [userResponse, postsResponse, todosResponse] = await Promise.all([
                    fetch(`${base}/users/${userId}`, { signal: controller.signal }),
                    fetch(`${base}/posts?userId=${userId}`, { signal: controller.signal }),
                    fetch(`${base}/todos?userId=${userId}`, { signal: controller.signal })
                ]);
                if (!userResponse.ok || !postsResponse.ok || !todosResponse.ok) {
                    throw new Error("Failed to load this profile");
                }
                setUser(await userResponse.json());
                setPosts(await postsResponse.json());
                setTodos(await todosResponse.json());
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadProfile();
        return () => controller.abort();
    }, [userId]);

    const tabs = [
        {
            id: "info",
            label: "Info",
            content: user ? (
                <div>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            ) : null
        },
        {
            id: "posts",
            label: "Posts",
            content: (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )
        },
        {
            id: "todos",
            label: "Todos",
            content: (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.completed ? "Done" : "Open"}: {todo.title}
                        </li>
                    ))}
                </ul>
            )
        }
    ];

    return (
        <section>
            <h1>Day 5: User Profile</h1>
            <label htmlFor="profile-user">User</label>
            <select
                id="profile-user"
                value={userId}
                onChange={(event) => setUserId(Number(event.target.value))}
            >
                {[1, 2, 3, 4, 5].map((id) => (
                    <option key={id} value={id}>User {id}</option>
                ))}
            </select>
            {loading && <p role="status">Loading profile...</p>}
            {error && <p role="alert">Error: {error}</p>}
            {!loading && !error && user && (
                <>
                    <h2>{user.name}</h2>
                    <Tabs key={user.id} tabs={tabs} label={`${user.name} profile`} />
                </>
            )}
        </section>
    );
}

export default Day5UserProfile;
