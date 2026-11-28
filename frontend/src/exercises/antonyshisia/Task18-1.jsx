// Task 18.1: Custom Hooks
// frontend/src/exercises/antonyshisia/

import useForm from "../../hooks/useForm";
import useLocalStorage from "../../hooks/useLocalStorage";
import useToggle from "../../hooks/useToggle";

function Settings() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const [fontSize, setFontSize] = useLocalStorage("fontSize", 16);

    return (
        <div>
            <label htmlFor="theme">Theme</label>
            <select
                id="theme"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <label htmlFor="font-size">Font size</label>
            <input
                id="font-size"
                type="range"
                value={fontSize}
                onChange={(event) => setFontSize(Number(event.target.value))}
                min="12"
                max="24"
            />
        </div>
    );
}

function Modal() {
    const [isOpen, { toggle, setFalse }] = useToggle(false);

    return (
        <>
            <button type="button" onClick={toggle}>
                Open Modal
            </button>
            {isOpen && (
                <div className="modal" role="dialog" aria-modal="true" aria-label="Example">
                    <p>Modal Content</p>
                    <button type="button" onClick={setFalse}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
}

function ContactForm() {
    const validate = (values) => {
        const errors = {};
        if (!values.email.includes("@")) {
            errors.email = "Invalid email";
        }
        return errors;
    };

    const { values, errors, touched, handleChange, handleBlur, reset } = useForm(
        { name: "", email: "" },
        validate
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input
                id="contact-name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <label htmlFor="contact-email">Email</label>
            <input
                id="contact-email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && (
                <span className="error">{errors.email}</span>
            )}

            <button type="submit">Submit</button>
        </form>
    );
}

function Task18_1() {
    return (
        <div>
            <h1>Task 18.1: Custom Hooks</h1>
            <Settings />
            <Modal />
            <ContactForm />
        </div>
    );
}

export default Task18_1;
