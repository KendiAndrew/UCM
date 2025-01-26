import ReactPlayer from "react-player";

export default function ASection3() {
  return (
    <div className="about-block">
      <div className="title-about">Про організацію</div>
      <div className="line"></div>
      <div className="about-description">
        Быстро поощряйте эффективные действия до тактического сотрудничества и
        обмена идеями. Монотонно привлекайте рыночный интеллектуальный капитал с
        помощью беспроводных возможностей. Постепенно на основе
        производительности сети услуги по функционализированным процедурам
        тестирования.
      </div>
      <div className="video">
        <ReactPlayer
          className="welcome-video-about"
          light
          url={"https://www.youtube.com/embed/XgWM8SI0wZs?si=DVsR5Ovl70kzY4U-"}
          playing
        />
      </div>
    </div>
  );
}
