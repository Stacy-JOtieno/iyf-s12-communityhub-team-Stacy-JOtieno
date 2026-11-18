// Day 4: Reusable button
// frontend/src/exercises/antonyshisia/

import "./Day4Button.css";

function Button({
    text = "Click me",
    onClick,
    variant = "primary",
    disabled = false,
    size = "medium",
    loading = false
}) {
    return (
        <button
            type="button"
            className={`btn btn-${variant} btn-${size}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading && <span className="spinner" aria-hidden="true" />}
            {text}
        </button>
    );
}

function Day4Button() {
    return (
        <div className="day-4">
            <h1>Day 4: Reusable Button</h1>
            <Button text="Save" variant="primary" onClick={() => {}} />
            <Button text="Cancel" variant="secondary" onClick={() => {}} />
            <Button text="Delete" variant="danger" onClick={() => {}} />
            <Button text="Small" size="small" onClick={() => {}} />
            <Button text="Large" size="large" onClick={() => {}} />
            <Button text="Off" disabled onClick={() => {}} />
            <Button text="Saving" loading onClick={() => {}} />
        </div>
    );
}

export default Day4Button;
