// src/exercises/Stacy-JOtieno/Task15-4.jsx

// Simple Header & Footer for the Layout example
function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 CommunityHub. All rights reserved.</p>
    </footer>
  );
}

// Exercise 1: Card with children prop
function Card({ children, title }) {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}

// Exercise 2: Layout component
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

// Exercise 3: Conditional Rendering Patterns
function UserGreeting({ user }) {
  // Pattern 1: && operator
  // Pattern 2: Ternary
  // Pattern 3: Early return

  if (!user) {
    return <p>Please log in</p>;
  }

  return <p>Welcome, {user.name}!</p>;
}

// Main component that shows all exercises
function Task15_4() {
  const loggedInUser = { name: "Stacy" };
  const guestUser = null;

  return (
    <div>
      <h1>Task 15.4 – Component Composition</h1>

      {/* Exercise 1: Children Prop */}
      <section>
        <h2>1. Card with children</h2>

        <Card title="Welcome">
          <p>This is the card content!</p>
          <button>Click me</button>
        </Card>

        <br />

        <Card>
          <p>This card has no title, only children.</p>
        </Card>
      </section>

      {/* Exercise 2: Layout Component */}
      <section>
        <h2>2. Layout Component</h2>
        <Layout>
          <h3>Home Page</h3>
          <p>This content is passed as children to the Layout.</p>
        </Layout>
      </section>

      {/* Exercise 3: Conditional Rendering */}
      <section>
        <h2>3. Conditional Rendering</h2>
        <UserGreeting user={loggedInUser} />
        <UserGreeting user={guestUser} />
      </section>
    </div>
  );
}

export default Task15_4;