import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchUser() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userId}`,
                    { signal: controller.signal }
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                const data = await response.json();
                setUser(data);
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

        fetchUser();

        return () => controller.abort();
    }, [userId]); // Re-fetch when userId changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return <div>{user.name}</div>;
}

export default UserProfile;