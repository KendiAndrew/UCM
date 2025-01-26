import utm12 from "../../../assets/utm12.png";

export default function ASection1() {
  return (
    <div className="container-about">
      <div className="left-column">
        <div className="logo-about">
          <img src={utm12} alt="Логотип" />
        </div>
      </div>
      <div className="right-column">
        <div className="title-about">Громадська організація</div>
        <div className="description-about">
          Організація, яка об'єднує волонтерів і фахівців, неурядові організації
          та бізнес по всьому світу, щоб підтримати потерпілих від війни. У
          спільному зусиллі кожного ми прокладаємо шлях до майбутнього тим, хто
          цього потребує найбільше.
        </div>
      </div>
    </div>
  );
}
