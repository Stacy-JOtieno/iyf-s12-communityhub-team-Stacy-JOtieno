// Task 17.2: Data Fetching in React
// frontend/src/exercises/antonyshisia/

import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

function PostCard({ post }) {
    return (
        <article className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
        </article>
    );
}

function FetchedPostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }

                const data = await response.json();
                setPosts(data.slice(0, 10));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) return <div className="loading">Loading posts...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function HookPostList() {
    const { data: posts, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {posts.slice(0, 10).map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function Task17_2() {
    return (
        <div>
            <h1>Task 17.2: Data Fetching</h1>
            <h2>Exercise 1: Fetch posts</h2>
            <FetchedPostList />
            <h2>Exercise 2: useFetch</h2>
            <HookPostList />
        </div>
    );
}

export default Task17_2;
