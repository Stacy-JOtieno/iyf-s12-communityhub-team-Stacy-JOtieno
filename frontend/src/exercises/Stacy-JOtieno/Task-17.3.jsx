import { useState, useEffect } from 'react';
import {
    MemoryRouter,
    Routes,
    Route,
    Outlet,
    Link,
    NavLink,
    useNavigate,
    useParams,
} from 'react-router-dom';

// Exercise 3: Navigation (NavLink + useNavigate)
function Navigation() {
    const navigate = useNavigate();

    const handleLogout = () => {
               navigate('/');
    };

    return (
        <nav aria-label="Main navigation">
                       <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Home
            </NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/about">About</NavLink>
            <button type="button" onClick={handleLogout}>Logout</button>
        </nav>
    );
}

// Exercise 1: Layout with <Outlet />
function Layout() {
    return (
        <div className="layout">
            <header>
                <Navigation />
            </header>

            <main>
                <Outlet /> 
            </main>

            <footer>
                <p>&copy; 2026 CommunityHub</p>
            </footer>
        </div>
    );
}

function Home() {
    return <h2>Home Page</h2>;
}

function Posts() {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {[1, 2, 3, 4, 5].map((id) => (
                    <li key={id}>
                        <Link to={`/posts/${id}`}>Open post {id}</Link>
                    </li>
                ))}
                <li>
                    <Link to="/posts/999">Open post 999 (does not exist)</Link>
                </li>
            </ul>
        </div>
    );
}

function About() {
    return <h2>About CommunityHub</h2>;
}

function NotFound() {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to="/">Go to the home page</Link>
        </div>
    );
}

// Exercise 2: Dynamic route with useParams
function PostDetail() {
    const { postId } = useParams();
    const [result, setResult] = useState({ id: null, post: null, error: null });

    useEffect(() => {
        const controller = new AbortController();

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) throw new Error('Post not found');
                return res.json();
            })
            .then((post) => setResult({ id: postId, post, error: null }))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setResult({ id: postId, post: null, error: err.message });
                }
            });

        return () => controller.abort();
    }, [postId]);

    // The stored result belongs to an older postId, so we are still loading
    if (result.id !== postId) return <p role="status">Loading...</p>;
    if (result.error) {
        return (
            <div>
                <Link to="/posts">&larr; Back to Posts</Link>
                <p role="alert">Error: {result.error}</p>
            </div>
        );
    }

    return (
        <article>
            <Link to="/posts">&larr; Back to Posts</Link>
            <h1>{result.post.title}</h1>
            <p>{result.post.body}</p>
        </article>
    );
}

function Task173() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:postId" element={<PostDetail />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </MemoryRouter>
    );
}
