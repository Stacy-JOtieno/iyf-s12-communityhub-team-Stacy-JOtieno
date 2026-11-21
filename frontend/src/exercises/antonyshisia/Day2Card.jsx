// Day 2: Card component with props
// frontend/src/exercises/antonyshisia/

import "./Day2Card.css";

function Card({ title, children, variant = "primary" }) {
    return (
        <div className={`card card-${variant}`}>
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-body">{children}</div>
        </div>
    );
}

function Day2Card() {
    return (
        <div className="day-2">
            <h1>Day 2: Card Component</h1>
            <Card title="Primary" variant="primary">
                <p>This card uses the primary variant.</p>
            </Card>
            <Card title="Secondary" variant="secondary">
                <p>This card uses the secondary variant.</p>
            </Card>
            <Card title="Outlined" variant="outlined">
                <p>This card uses the outlined variant.</p>
            </Card>
        </div>
    );
}

export default Day2Card;
