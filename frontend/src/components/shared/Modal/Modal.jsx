import { useEffect } from "react";
import styles from "./Modal.module.css";
import Button from "../Button";

function Modal({ title, children, onClose }) {
    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                onClick={(event) => event.stopPropagation()}
            >
                <h2>{title}</h2>
                {children}
                <div className={styles.actions}>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
