import styles from "./Button.module.css";

function Button({
    children,
    variant = "primary",
    size = "medium",
    loading = false,
    disabled = false,
    fullWidth = false,
    onClick,
    type = "button"
}) {
    const className = [
        styles.button,
        styles[size],
        styles[variant],
        fullWidth ? styles.fullWidth : "",
        disabled || loading ? styles.disabled : ""
    ].filter(Boolean).join(" ");

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={className}
        >
            {loading ? (
                <span className={styles.spinner} aria-hidden="true" />
            ) : null}
            {loading ? "Loading..." : children}
        </button>
    );
}

export default Button;
