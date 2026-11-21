import { useState, useEffect } from 'react';

// Exercise 1: useLocalStorage
function useLocalStorage(key, initialValue) {
       const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved !== null ? JSON.parse(saved) : initialValue;
        } catch {
            return initialValue; 
        }
    });

        useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
                    }
    }, [key, value]);

    return [value, setValue];
}

// Exercise 2: useToggle
function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue((v) => !v);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);

    return [value, { toggle, setTrue, setFalse }];
}

// Exercise 3: useForm
function useForm(initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const next = { ...values, [name]: value };
        setValues(next);
                if (validate && touched[name]) {
            setErrors(validate(next));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));

        if (validate) {
            setErrors(validate(values));
        }
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        reset,
        setValues,
    };
}

// Demo 1: Settings (useLocalStorage)
function Settings() {
    // Keys are unique to this exercise so they can't clash with other demos
    const [theme, setTheme] = useLocalStorage('task181-theme', 'light');
    const [fontSize, setFontSize] = useLocalStorage('task181-fontSize', 16);

    const preview = {
        fontSize: `${fontSize}px`,
        padding: '0.5rem',
        background: theme === 'dark' ? '#111827' : '#ffffff',
        color: theme === 'dark' ? '#f9fafb' : '#111827',
    };

    return (
        <div>
            <label htmlFor="task181-theme">Theme</label>{' '}
            <select
                id="task181-theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <br />

            <label htmlFor="task181-font">Font size ({fontSize}px)</label>{' '}
            <input
                id="task181-font"
                type="range"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                min="12"
                max="24"
            />

            <p style={preview}>Preview text. Refresh the page and it stays.</p>
        </div>
    );
}

// Demo 2: modal (useToggle)
function ModalDemo() {
    const [isOpen, { toggle, setFalse }] = useToggle(false);

    return (
        <>
            <button type="button" onClick={toggle}>Open Modal</button>

            {isOpen && (
                <div role="dialog" aria-label="Example dialog">
                    <p>Modal Content</p>
                    <button type="button" onClick={setFalse}>Close</button>
                </div>
            )}
        </>
    );
}

// Demo 3: contact form (useForm)
const contactDefaults = { name: '', email: '' };

function validateContact(values) {
    const errors = {};
    if (!values.name.trim()) {
        errors.name = 'Name is required';
    }
    if (!values.email.includes('@')) {
        errors.email = 'Invalid email';
    }
    return errors;
}

function ContactForm() {
    const [sent, setSent] = useState(false);

    const { values, errors, touched, handleChange, handleBlur, reset } =
        useForm(contactDefaults, validateContact);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(validateContact(values)).length > 0) return;
        console.log(values);
        setSent(true);
        reset();
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="task181-name">Name</label>{' '}
            <input
                id="task181-name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.name && errors.name ? 'true' : 'false'}
            />
            {touched.name && errors.name && (
                <span role="alert"> {errors.name}</span>
            )}

            <br />

            <label htmlFor="task181-email">Email</label>{' '}
            <input
                id="task181-email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.email && errors.email ? 'true' : 'false'}
            />
            {touched.email && errors.email && (
                <span role="alert"> {errors.email}</span>
            )}

            <br />

            <button type="submit">Submit</button>
            {sent && <p role="status">Thanks! Check the console for the values.</p>}
        </form>
    );
}

function Task181() {
    return (
        <div>
            <h1>Task 18.1: Custom Hooks</h1>

            <h2>Exercise 1: useLocalStorage</h2>
            <Settings />

            <h2>Exercise 2: useToggle</h2>
            <ModalDemo />

            <h2>Exercise 3: useForm</h2>
            <ContactForm />
        </div>
    );
}