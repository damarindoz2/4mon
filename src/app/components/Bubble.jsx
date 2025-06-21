import styles from "../styles/Bubble.module.css";

export default function Bubble({ onClick }) {
  const left = Math.random() * 90 + "%";
  const duration = 8 + Math.random() * 6 + "s";
  const size = 20 + Math.random() * 30 + "px";

  return (
    <img
      src="/burb.png"
      className={styles.bubble}
      style={{ left, animationDuration: duration, width: size, height: size }}
      onClick={onClick}
      alt="burbuja"
    />
  );
}
