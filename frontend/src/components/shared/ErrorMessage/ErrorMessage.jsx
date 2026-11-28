import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.box} role="alert">
      <p>
        <span className={styles.mark} aria-hidden="true">!</span>
        {message}
      </p>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
