import ReactPlayer from "react-player";

export default function MSection2() {
  return (
    <section className="content-section">
      <ReactPlayer
        className="video-container-mist"
        light
        url={"https://www.youtube.com/embed/video_id_1"}
        playing
        allowfullscreen
      />
      <div className="text-container">
        <p>
          Описание проекта. Это текстовое описание сопровождает видео, которое
          иллюстрирует ключевые аспекты проекта Міст Опори.
        </p>
      </div>
    </section>
  );
}
