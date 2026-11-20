import { useState } from "react";
import {
    MemoryRouter,
    NavLink,
    Navigate,
    Route,
    Routes,
    useNavigate
} from "react-router-dom";
import "./Day4Auth.css";

function ProtectedRoute({ username, children }) {
    if (!username) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

function LoginForm({ onLogin }) {
    const navigate = useNavigate();
    const [draft, setDraft] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const name = draft.trim();
        if (!name) {
            return;
        }
        onLogin(name);
        navigate("/profile");
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                required
            />
            <button type="submit">Log in</button>
        </form>
    );
}

function AuthHeader({ username, onLogout }) {
    const navigate = useNavigate();

    function handleLogout() {
        onLogout();
        navigate("/");
    }

    return (
        <header>
            <nav className="auth-nav" aria-label="Primary">
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
                    Profile
                </NavLink>
                {username ? (
                    <>
                        <span>Signed in as {username}</span>
                        <button type="button" onClick={handleLogout}>Log out</button>
                    </>
                ) : (
                    <NavLink to="/login">Log in</NavLink>
                )}
            </nav>
        </header>
    );
}

function AuthShell({ username, setUsername }) {
    return (
        <>
            <AuthHeader username={username} onLogout={() => setUsername("")} />
            <Routes>
                <Route path="/" element={<p>Home is open to everyone.</p>} />
                <Route path="/login" element={<LoginForm onLogin={setUsername} />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute username={username}>
                            <section>
                                <h1>{username}'s profile</h1>
                                <p>This page redirects to login until a username is stored.</p>
                            </section>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
}

function Day4Auth() {
    const [username, setUsername] = useState("");

    return (
        <MemoryRouter>
            <AuthShell username={username} setUsername={setUsername} />
        </MemoryRouter>
    );
}

export default Day4Auth;
