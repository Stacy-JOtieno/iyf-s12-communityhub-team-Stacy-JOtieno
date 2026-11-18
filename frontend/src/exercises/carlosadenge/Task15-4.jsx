function Card({ title, children }) {
  return (
    <div className="card" style={{ border: "1px solid #ccc", padding: "16px", margin: "12px 0", borderRadius: "8px" }}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}

function Task15_4() {
  return (
    <div>
      <h1>Task 15.4 – Component Composition</h1>

      <Card title="Welcome">
        <p>This content is passed as children.</p>
        <p>Composition makes components flexible.</p>
      </Card>

      <Card title="About Carlos">
        <p>I am learning React at IYF Weekend Academy Season 12.</p>
        <p>Building CommunityHub with my team.</p>
      </Card>

      <Card>
        <p>This card has no title — only children.</p>
      </Card>
    </div>
  );
}

export default Task15_4;
