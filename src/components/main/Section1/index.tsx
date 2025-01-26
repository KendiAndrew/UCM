import mainImg from "../../../assets/greeting.png";

export default function Section1() {
  return (
    <section className="page__section page__section_1" id="section_1">
      <div className="page__content">
        <img src={mainImg} className="main-image" />
      </div>
    </section>
  );
}
