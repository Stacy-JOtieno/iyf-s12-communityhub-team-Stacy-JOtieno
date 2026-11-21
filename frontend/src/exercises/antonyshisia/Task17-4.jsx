// Task 17.4: Loading and Error States
// frontend/src/exercises/antonyshisia/

import { useEffect, useState } from "react";
import "./Task17-4.css";

function LoadingSpinner({ size = "medium", text = "Loading..." }) {
    return (
        <div className={`loading-spinner ${size}`} role="status">
            <div className="spinner" aria-hidden="true" />
            <p>{text}</p>
        </div>
    );
}

function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error-message" role="alert">
            <span className="error-icon" aria-hidden="true">!</span>
            <p>{message}</p>
            {onRetry && (
                <button type="button" onClick={onRetry}>
                    Try Again
                </button>
            )}
        </div>
    );
}

function PostCard({ post }) {
    return (
        <article className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </article>
    );
}

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=5"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <LoadingSpinner text="Loading posts..." />;
    if (error) return <ErrorMessage message={error} onRetry={fetchPosts} />;
    if (posts.length === 0) return <p>No posts found.</p>;

    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function Task17_4() {
    return (
        <div>
            <h1>Task 17.4: Loading and Error States</h1>
            <PostList />
        </div>
    );
}

export default Task17_4;
