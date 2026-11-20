// Task 15.3: Working with Props
// Lesson exercises live here so the marker can find them:
// frontend/src/exercises/antonyshisia/

function Greeting({ name }) {
    return <h2>Hello, {name}!</h2>;
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

function Button({
    text = "Click me",
    variant = "primary",
    size = "medium",
    disabled = false
}) {
    return (
        <button
            className={`btn btn-${variant} btn-${size}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

function Task15_3() {
    return (
        <div>
            <h1>Task 15.3: Working with Props</h1>

            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />

            <PostCard
                title="Getting Started with React"
                excerpt="Learn the basics of React..."
                author="Amina Otieno"
                date="Jan 15, 2026"
            />
            <PostCard
                title="JavaScript Best Practices"
                excerpt="Write cleaner code..."
                author="Brian Kamau"
                date="Jan 10, 2026"
            />

            <PostList />

            <Button text="Submit" variant="primary" />
            <Button text="Cancel" variant="secondary" />
            <Button text="Delete" variant="danger" />
            <Button />
        </div>
    );
}

export default Task15_3;
