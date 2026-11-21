
import {
  createContext,
  useContext,
  useState
} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(
    () => localStorage.getItem('username') || ''
  );

  const login = (name) => {
    const cleanName = name.trim();

    if (!cleanName) return;

    localStorage.setItem('username', cleanName);
    setUsername(cleanName);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setUsername('');
  };

  const isAuthenticated = Boolean(username);

  return (
    <AuthContext.Provider
      value={{
        username,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider'
    );
  }

  return context;
}
