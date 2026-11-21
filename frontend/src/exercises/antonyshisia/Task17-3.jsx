// Task 17.3: React Router
// frontend/src/exercises/antonyshisia/

import { useEffect, useState } from "react";
import {
    Link,
    MemoryRouter,
    NavLink,
    Outlet,
    Route,
    Routes,
    useNavigate,
    useParams
} from "react-router-dom";

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

function Navigation() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <nav>
            <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Home
            </NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <Link to="/about">About</Link>
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
}

function Home() {
    return <h2>Home Page</h2>;
}

function Posts() {
    return (
        <div>
            <h2>Posts</h2>
            <Link to="/posts/1">Open post 1</Link>
        </div>
    );
}

function About() {
    return <h2>About CommunityHub</h2>;
}

function NotFound() {
    return <h2>Page not found</h2>;
}

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [postId]);

    if (!post) return <p>Loading...</p>;

    return (
        <article>
            <Link to="/posts">&larr; Back to Posts</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    );
}

function Task17_3() {
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

export default Task17_3;
