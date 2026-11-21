
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '../Day3/Tabs';

function UserProfile() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProfile() {
      try {
        setLoading(true);
        setError('');

        const options = {
          signal: controller.signal
        };

        // Fetch user, posts and todos together
        const [userResponse, postsResponse, todosResponse] =
          await Promise.all([
            fetch(
              `https://jsonplaceholder.typicode.com/users/${userId}`,
              options
            ),
            fetch(
              `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
              options
            ),
            fetch(
              `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
              options
            )
          ]);

        if (
          !userResponse.ok ||
          !postsResponse.ok ||
          !todosResponse.ok
        ) {
          throw new Error('Unable to load profile information.');
        }

        const userData = await userResponse.json();
        const postsData = await postsResponse.json();
        const todosData = await todosResponse.json();

        if (!userData.id) {
          throw new Error('User not found.');
        }

        setUser(userData);
        setPosts(postsData);
        setTodos(todosData);

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

    fetchProfile();

    return () => controller.abort();

  }, [userId]);

  if (loading) {
    return (
      <p className="text-center mt-10">
        Loading user profile...
      </p>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const tabs = [
    {
      id: 'posts',
      label: 'Posts',
      content: (
        <div className="space-y-4">
          {posts.map(post => (
            <article
              key={post.id}
              className="border p-4 rounded-lg"
            >
              <h3 className="font-bold text-lg capitalize mb-2">
                {post.title}
              </h3>

              <p className="text-gray-600">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      )
    },

    {
      id: 'todos',
      label: 'Todos',
      content: (
        <div className="space-y-3">
          {todos.map(todo => (
            <div
              key={todo.id}
              className="flex gap-3 items-center border p-3 rounded-lg"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly
                aria-label={`Completed: ${todo.title}`}
              />

              <span className={
                todo.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-700'
              }>
                {todo.title}
              </span>
            </div>
          ))}
        </div>
      )
    },

    {
      id: 'about',
      label: 'About',
      content: (
        <div className="space-y-3">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6">

      {/* Profile header */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            {user.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {user.name}
            </h1>

            <p className="text-gray-500">
              @{user.username}
            </p>

            <p className="text-gray-600">
              {user.email}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div>
            <p className="text-2xl font-bold">
              {posts.length}
            </p>
            <p className="text-gray-500">Posts</p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              {todos.length}
            </p>
            <p className="text-gray-500">Todos</p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              {todos.filter(todo => todo.completed).length}
            </p>
            <p className="text-gray-500">Completed</p>
          </div>
        </div>

      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded-xl p-6">
        <Tabs tabs={tabs} initialTab="posts" />
      </div>

    </div>
  );
}

export default UserProfile;
