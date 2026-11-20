// Task 18.2: Styling React Applications
// frontend/src/exercises/antonyshisia/

import styles from "./Button.module.css";

function ModuleButton({ variant = "primary", children, ...props }) {
    return (
        <button
            type="button"
            className={`${styles.button} ${styles[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
}

function TailwindCard({ title, children }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    );
}

function TailwindButton({ variant = "primary", children }) {
    const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600"
    };

    return (
        <button type="button" className={`${baseClasses} ${variants[variant]}`}>
            {children}
        </button>
    );
}

function Task18_2() {
    return (
        <div>
            <h1>Task 18.2: Styling</h1>
            <ModuleButton>Primary</ModuleButton>
            <ModuleButton variant="secondary">Secondary</ModuleButton>
            <TailwindCard title="CommunityHub">
                <p>This card uses Tailwind utility classes.</p>
            </TailwindCard>
            <TailwindButton>Save</TailwindButton>
            <TailwindButton variant="secondary">Cancel</TailwindButton>
            <TailwindButton variant="danger">Delete</TailwindButton>
        </div>
    );
}

export default Task18_2;
