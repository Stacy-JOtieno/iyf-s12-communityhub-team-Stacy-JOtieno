
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
  const [username, setUsername] = useState('');

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim()) return;

    login(username);

    const destination =
      location.state?.from || '/dashboard';

    navigate(destination, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 mb-6">
          Enter your username to continue.
        </p>

        <label
          htmlFor="username"
          className="block font-medium mb-2"
        >
          Username
        </label>

        <input
          id="username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="Enter your username"
          required
          className="w-full border p-3 rounded-lg mb-5"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;
