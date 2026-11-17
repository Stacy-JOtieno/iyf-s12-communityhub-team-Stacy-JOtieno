import './ExerciseButton.css';

function ExerciseButton({
    text,
    onClick,
    variant = 'primary',
    disabled = false,
    size = 'medium',
    loading = false
}) {
    const isDisabled = disabled || loading;

    return (
        <button
            className={`ex-btn ex-btn-${variant} ex-btn-${size}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {loading && <span className="ex-spinner" aria-hidden="true" />}
            {loading ? 'Loading...' : text}
        </button>
    );
}

export default ExerciseButton;