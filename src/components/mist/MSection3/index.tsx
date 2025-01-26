import ReactPlayer from "react-player";

export default function MSection3() {
  return (
    <section className="content-section reverse">
      <div className="text-container">
        <p>
          Дополнительное описание проекта. Этот текст даёт более глубокое
          понимание целей и задач проекта.
        </p>
      </div>
      <ReactPlayer
        className="video-container-mist"
        light
        url={"https://www.youtube.com/embed/video_id_2"}
        playing
        allowfullscreen
      />
    </section>
  );
}
