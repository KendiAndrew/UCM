import "../../scss/components/mist.scss";
import MSection2 from "../../components/mist/MSection2";
import MSection3 from "../../components/mist/MSection3";
import MSection4 from "../../components/mist/MSection4";
import MSection5 from "../../components/mist/MSection5";
import Section7 from "../../components/main/Section7";
import tsinuy from "../../assets/tsinujitta2.jpg";

export default function Tsinuy() {
  return (
    <main className="project-main">
      <div className="header-section">
        <h1>Цінуй Життя🙏</h1>
      </div>
      <div className="banner-section">
        <img src={tsinuy} alt="Цінуй Життя Лого" className="banner-logo" />
      </div>
      <MSection2 />
      <MSection3 />
      <MSection4 />
      <MSection5 />
      <Section7 />
    </main>
  );
}
