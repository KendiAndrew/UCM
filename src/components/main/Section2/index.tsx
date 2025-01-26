import { Link } from "react-router";

export default function Section2() {
  return (
    <section className="page__section page__section_2" id="section_2">
      <div className="page__content">
        <div className="box2">
          <div className="page__text">
            <div className="title-yellow">ПРО НАС</div>
            <div className="title-big2">
              Благодійний фонд, створений українцями для українців
            </div>
            <div className="title-medium">
              <p className="text-aboutus">
                Організація, яка об'єднує волонтерів і фахівців, неурядові
                організації та бізнес по всьому світу, щоб підтримати потерпілих
                від війни. У спільному зусиллі кожного ми прокладаємо шлях до
                майбутнього тим, хто цього потребує найбільше.
              </p>
            </div>
            <Link to="about.html" className="link">
              Детальніше про нас &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
