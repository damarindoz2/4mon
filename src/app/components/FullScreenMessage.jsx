import styles from "../styles/FullScreenMessage.module.css";

export default function FullScreenMessage({ message, onClose }) {
  return (
    <div className={styles.fullscreen} onClick={onClose}>
      <p>{message}</p>
    </div>
  );
}