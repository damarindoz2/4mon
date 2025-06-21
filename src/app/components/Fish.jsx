import styles from "../styles/Fish.module.css";

export default function Fish({ style, onClick }) {
  const fishImages = ["/pez1.png", "/pez2.png", "/pez3.png", "/pez4.png", "/pez5.png", "/pez6.png"];
  const image = fishImages[Math.floor(Math.random() * fishImages.length)];

  return (
    <div className={styles.fish} style={style} onClick={onClick}>
      <img src={image} alt="pez" />
    </div>
  );
}

