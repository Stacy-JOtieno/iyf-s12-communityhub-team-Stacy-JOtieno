// Task 15.4: Component Composition
// frontend/src/exercises/antonyshisia/

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Card({ children, title }) {
    return (
        <div className="card">
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

function PostCard({ title, excerpt, author, date }) {
    return (
        <article className="post-card">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div className="post-meta">
                <span>By {author}</span>
                <span>{date}</span>
            </div>
        </article>
    );
}

function PostList() {
    const posts = [
        { id: 1, title: "First Post", excerpt: "...", author: "Alice", date: "Jan 15" },
        { id: 2, title: "Second Post", excerpt: "...", author: "Bob", date: "Jan 14" },
        { id: 3, title: "Third Post", excerpt: "...", author: "Charlie", date: "Jan 13" }
    ];

    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    );
}

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

function UserGreetingAnd({ user }) {
    return (
        <div>
            {user && <p>Welcome, {user.name}!</p>}
            {!user && <p>Please log in</p>}
        </div>
    );
}

function UserGreetingTernary({ user }) {
    return (
        <div>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
}

function UserGreeting({ user }) {
    if (!user) {
        return <p>Please log in</p>;
    }
    return <p>Welcome, {user.name}!</p>;
}

function Task15_4() {
    const user = { name: "Antony" };

    return (
        <Layout>
            <h1>Home Page</h1>

            <Card title="Welcome">
                <p>This is the card content!</p>
                <button>Click me</button>
            </Card>

            <Card>
                <img src="photo.jpg" alt="Photo" />
            </Card>

            <PostList />

            <UserGreetingAnd user={user} />
            <UserGreetingAnd />
            <UserGreetingTernary user={user} />
            <UserGreetingTernary />
            <UserGreeting user={user} />
            <UserGreeting />
        </Layout>
    );
}

export default Task15_4;
