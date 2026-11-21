
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8">

      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      <div className="bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          Welcome, {username}!
        </h2>

        <p className="text-gray-600">
          You have successfully accessed your protected dashboard.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;
