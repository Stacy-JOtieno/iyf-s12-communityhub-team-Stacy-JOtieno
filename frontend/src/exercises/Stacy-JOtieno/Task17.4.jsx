import { useState, useEffect } from 'react';
import styles from './Task17.4.module.css';

const GOOD_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
const BAD_URL = 'https://jsonplaceholder.typicode.com/does-not-exist';

function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
    return (
        <div
            className={`${styles.loadingSpinner} ${styles[size]}`}
            role="status"
        >
            <div className={styles.spinner} aria-hidden="true"></div>
            <p>{text}</p>
        </div>
    );
}

function ErrorMessage({ message, onRetry }) {
    return (
        <div className={styles.errorMessage} role="alert">
            <span aria-hidden="true">⚠️</span>
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
        <article className={styles.postCard}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </article>
    );
}

function PostList({ url }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                setPosts(await response.json());
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError("We couldn't load the posts. Please try again.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchPosts();

        return () => controller.abort();
    }, [url, reloadKey]);

    if (loading) return <LoadingSpinner text="Loading posts..." />;
    if (error) {
        return (
            <ErrorMessage
                message={error}
                onRetry={() => setReloadKey((key) => key + 1)}
            />
        );
    }
    if (posts.length === 0) return <p>No posts found.</p>;

    return (
        <div className={styles.postList}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function Task174() {
    const [simulateError, setSimulateError] = useState(false);

    return (
        <div>
            <h1>Task 17.4: Loading and Error States</h1>

            <label>
                <input
                    type="checkbox"
                    checked={simulateError}
                    onChange={(event) => setSimulateError(event.target.checked)}
                />{' '}
                Simulate a failed request
            </label>

            <PostList url={simulateError ? BAD_URL : GOOD_URL} />
        </div>
    );
}
