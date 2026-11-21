import styles from "./LoadingSpinner.module.css";

function LoadingSpinner({ size = "medium", text = "Loading..." }) {
  return (
    <div className={`${styles.wrap} ${styles[size]}`} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;
