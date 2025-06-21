"use client";
import { useState } from "react";
import Fish from "./Fish";
import Bubble from "./Bubble";
import FullScreenMessage from "./FullScreenMessage";
import styles from "../styles/Aquarium.module.css";
import messages from "../data/messages";

export default function Aquarium() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [easterEgg, setEasterEgg] = useState(false);

  const handleRandomMessage = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setSelectedMessage(random.message);
  };

  const triggerEasterEgg = () => {
    setEasterEgg(true);
    setTimeout(() => setEasterEgg(false), 3000);
  };

  return (
    <div className={styles.aquarium}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Fish
          key={i}
          style={{
            top: `${10 + i * 12}%`,
            animationDuration: `${12 + Math.random() * 6}s`,
          }}
          onClick={triggerEasterEgg}
        />
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <Bubble key={i} onClick={handleRandomMessage} />
      ))}

      {selectedMessage && (
        <FullScreenMessage
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}
      {easterEgg && (
        <div className={styles.easterEgg}>
          Te ganaste un besito. Muaaaa 😘
        </div>
      )}
    </div>
  );
}