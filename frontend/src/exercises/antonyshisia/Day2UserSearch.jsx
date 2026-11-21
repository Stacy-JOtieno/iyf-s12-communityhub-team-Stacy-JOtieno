import { useEffect, useState } from "react";

function Day2UserSearch() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadUsers() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                    { signal: controller.signal }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                setUsers(await response.json());
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

        loadUsers();
        return () => controller.abort();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 300);
        return () => clearTimeout(timer);
    }, [query]);

    const term = debouncedQuery.trim().toLowerCase();
    const visible = users.filter((user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );

    return (
        <section>
            <h1>Day 2: API Search</h1>
            <label htmlFor="user-search">Search users</label>
            <input
                id="user-search"
                type="search"
                value={query}
                placeholder="Type a name or email"
                onChange={(event) => setQuery(event.target.value)}
            />
            {query !== debouncedQuery && <p role="status">Waiting for you to stop typing...</p>}
            {loading && <p role="status">Loading users...</p>}
            {error && <p role="alert">Error: {error}</p>}
            {!loading && !error && visible.length === 0 && (
                <p>No users match that search.</p>
            )}
            {!loading && !error && visible.length > 0 && (
                <ul>
                    {visible.map((user) => (
                        <li key={user.id}>{user.name} ({user.email})</li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Day2UserSearch;
