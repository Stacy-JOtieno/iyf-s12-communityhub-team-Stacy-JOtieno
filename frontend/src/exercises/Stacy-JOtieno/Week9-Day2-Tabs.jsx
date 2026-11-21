
import { useState, useEffect } from 'react';

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch users once
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);

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

    fetchUsers();

    return () => controller.abort();
  }, []);

  // Debounce search input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  // Filter users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-10">Loading users...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">
        User Search
      </h1>

      <input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name or email..."
        className="w-full border p-3 rounded-lg mb-6"
      />

      <p className="text-gray-500 mb-4">
        {filteredUsers.length} users found
      </p>

      <div className="space-y-3">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="p-4 border rounded-lg shadow-sm"
          >
            <h2 className="font-bold text-lg">
              {user.name}
            </h2>

            <p className="text-gray-600">
              {user.email}
            </p>

            <p className="text-sm text-gray-400">
              @{user.username}
            </p>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p>No matching users found.</p>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
