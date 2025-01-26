import { useEffect, useState } from "react";

export default function WelcomeText() {
  const textToDisplay =
    "Організація, яка об'єднує волонтерів і фахівців, неурядові організації та бізнес по всьому світу, щоб підтримати потерпілих від війни. У спільному зусиллі кожного ми прокладаємо шлях до майбутнього тим, хто цього потребує найбільше."; // Текст для поступового виводу
  let [displayedText, setDisplayedText] = useState(""); // Стан для тексту
  const typingSpeed = 50; // Інтервал між літерами (у мс)

  useEffect(() => {
    let index = 0; // Локальна змінна для індексації

    const intervalId = setInterval(() => {
      if (index < textToDisplay.length) {
        // Використовуємо функціональне оновлення
        setDisplayedText((displayedText += textToDisplay[index]));
        index++; // Збільшуємо індекс
      }
    }, typingSpeed);

    return () => clearInterval(intervalId); // Очищення інтервалу при розмонтуванні
  }, []); // Порожній масив залежностей

  return (
    <div className="welcome-text">
      <div>{displayedText} </div>
    </div>
  );
}
