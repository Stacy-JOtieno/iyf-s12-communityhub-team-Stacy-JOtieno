import { useState, useEffect } from 'react';

// Shared by both exercises
function PostCard({ post }) {
    return (
        <article className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
        </article>
    );
}

// Exercise 1: fetch inside the component
function FetchedPostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts',
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();
                setPosts(data.slice(0, 10)); // First 10 posts
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchPosts();

        return () => controller.abort();
    }, []);

    if (loading) {
        return <div className="loading" role="status">Loading posts...</div>;
    }
    if (error) {
        return <div className="error" role="alert">Error: {error}</div>;
    }
    if (posts.length === 0) {
        return <p>No posts found.</p>;
    }

    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

// Exercise 2: the custom hook
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error(`Fetch failed (${response.status})`);
                }

                setData(await response.json());
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}

// Exercise 2: using the hook
function HookPostList() {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (loading) return <p role="status">Loading...</p>;
    if (error) return <p role="alert">Error: {error}</p>;
    if (!posts) return null;

    return (
        <div>
            {posts.slice(0, 10).map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function Task172() {
    return (
        <div>
            <h1>Task 17.2: Data Fetching</h1>

            <h2>Exercise 1: Fetch posts in the component</h2>
            <FetchedPostList />

            <h2>Exercise 2: Custom useFetch hook</h2>
            <HookPostList />
        </div>
    );
}

export default Task172;