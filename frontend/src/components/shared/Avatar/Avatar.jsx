import styles from "./Avatar.module.css";

function Avatar({ name = "Member", src, alt }) {
    const initials = name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <span className={styles.avatar}>
            {src ? <img src={src} alt={alt || name} /> : initials}
        </span>
    );
}

export default Avatar;
