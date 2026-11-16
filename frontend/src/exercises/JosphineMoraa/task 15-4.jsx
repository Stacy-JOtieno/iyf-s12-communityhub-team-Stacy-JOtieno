
// TASK 15.4 — COMPONENT COMPOSITION

// EXERCISE 1: CHILDREN PROP
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

// EXERCISE 2: LAYOUT COMPONENT
function Header() {
  return (
    <header>
      <h2>CommunityHub</h2>
      <nav>
        <a href="#home">Home</a>{" | "}
        <a href="#posts">Posts</a>{" | "}
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 CommunityHub</p>
    </footer>
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

// EXERCISE 3: CONDITIONAL RENDERING

function UserGreeting({ user }) {
  if (!user) {
    return <p>Please log in.</p>;
  }

  return <p>Welcome, {user.name}!</p>;
}

function LoginMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}

function Notification({ hasNotification }) {
  return (
    <div>
      {hasNotification && <p>You have a new notification!</p>}
    </div>
  );
}

// MAIN COMPONENT
function Task15_4() {
  const user = { name: "Josphine" };

  return (
    <Layout>
      <h1>Task 15.4: Component Composition</h1>

      <Card title="Welcome">
        <p>This is my first reusable Card component.</p>
        <button>Click me</button>
      </Card>

      <Card title="About Me">
        <p>I am learning React component composition.</p>
      </Card>

      <h2>Conditional Rendering</h2>
      <UserGreeting user={user} />
      <LoginMessage isLoggedIn={true} />
      <Notification hasNotification={true} />
    </Layout>
  );
}

export default Task15_4;
