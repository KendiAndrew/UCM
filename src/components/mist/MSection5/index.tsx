import bloknot from "../../../assets/bloknot-mist.jpg";
import stiker from "../../../assets/stiker-mist.jpg";

export default function MSection5() {
  return (
    <section className="banners-section">
      <div className="banner-container">
        <img src={bloknot} alt="Вертикальный Баннер 1" />
      </div>
      <div className="banner-container">
        <img src={stiker} alt="Вертикальный Баннер 2" />
      </div>
    </section>
  );
}
