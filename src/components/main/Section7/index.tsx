import ReactPlayer from "react-player/youtube";
import mono from "../../../assets/monojar.jpg";

export default function Section7() {
  return (
    <section className="page__section page__section_3">
      <div className="page__content">
        <div className="donation-block">
          <div className="donation-title">Донат на розвиток УЦМ</div>
          <div className="donation-content">
            <ReactPlayer
              className="donation-video"
              light
              url={"https://www.youtube.com/embed/your_video_id"}
              playing
            />
            <div className="donation-info">
              <div className="bank-logo">
                <img src={mono} alt="Логотип банка" />
              </div>
              <div className="bank-text">
                УЦМ-це Сила. УЦМ-це Майбутнє. УЦМ-це МАТІР. Підтримуй проєкт
                УЦМ, не будь байдужим до нашої країни, будуймо разом наше
                майбутнє.
              </div>
              <div className="donation-button">
                <a href="https://send.monobank.ua/jar/Jv1EVewoC">Підтримати</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
