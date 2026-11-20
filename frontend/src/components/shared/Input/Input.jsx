import styles from "./Input.module.css";

function Input({
    label,
    error,
    type = "text",
    placeholder,
    value,
    onChange,
    onBlur,
    name,
    required = false
}) {
    return (
        <div className={styles.field}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}> *</span>}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                required={required}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? `${name}-error` : undefined}
                className={`${styles.input} ${error ? styles.invalid : ""}`}
            />
            {error && (
                <p id={`${name}-error`} className={styles.error}>
                    {error}
                </p>
            )}
        </div>
    );
}

export default Input;
