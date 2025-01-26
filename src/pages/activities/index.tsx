import ReactPlayer from "react-player";
import "../../scss/components/activities.scss";
import photo2 from "../../assets/photodendite2.jpg";
import photo3 from "../../assets/photodendite3.jpg";
import photo4 from "../../assets/photodendite4.jpg";
import photo5 from "../../assets/photodendite5.jpg";
import photo1_1 from "../../assets/photoditi1.jpg";
import photo1_2 from "../../assets/photoditi2.jpg";
import photo1_3 from "../../assets/photoditi3.jpg";
import photo1_4 from "../../assets/photoditi4.jpg";
import kherson from "../../assets/photokherson1.jpg";

export default function Activities() {
  return (
    <main className="activities-main">
      <div className="activity-block">
        <h2 className="activity-title">Влаштували день Матері</h2>
        <div className="activity-content">
          <div className="video-gallery">
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/gQA8EXwW-FQ"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/TYZDqtG4vm8"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
      <div className="activity-block">
        <h2 className="activity-title">Організовуємо свята для дітей</h2>
        <div className="activity-content">
          <div className="video-gallery">
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/5T7Mpwj-Kf8"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/poHsRpWF-54"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/YBBhfzpqvp8"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/5uSpoi9nxKg"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
      <div className="activity-block">
        <h2 className="activity-title">Проводимо тренінги</h2>
        <div className="activity-content">
          <div className="video-gallery">
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/5T7Mpwj-Kf8"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/5T7Mpwj-Kf8"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="video-container">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/5T7Mpwj-Kf8"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
      <div className="activity-block">
        <h2 className="activity-title">Донор крови</h2>
        <div className="activity-content">
          <div className="video-container">
            <ReactPlayer
              className="activities1-video-player"
              light
              url={"https://www.youtube.com/embed/5T7Mpwj-Kf8"}
              playing
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
      <div className="body-gallery-container">
        <h1 className="title">Галерея</h1>
        <div className="grid-container">
          <div>
            <div className="grid-item grid-item-1">
              <ReactPlayer
                className="activities1-video-player"
                light
                url={"https://www.youtube.com/embed/srkC009ApJo"}
                playing
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <p>Свято до дня Батька</p>
            </div>
          </div>
          <div>
            <img className="grid-item grid-item-2" src={photo2} alt="" />
            <p>Свято для дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-3" src={photo3} alt="" />
            <p>Свято для дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-4" src={photo4} alt="" />
            <p>Свято для дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-4" src={photo4} alt="" />
            <p>Свято для дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-5" src={photo5} alt="" />
            <p>Свято для дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-6" src={photo1_1} alt="" />
            <p>Міжнародний день дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-7" src={photo1_2} alt="" />
            <p>Міжнародний день дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-8" src={photo1_3} alt="" />
            <p>Міжнародний день дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-9" src={photo1_4} alt="" />
            <p>Міжнародний день дітей</p>
          </div>
          <div>
            <img className="grid-item grid-item-10" src={kherson} alt="" />
            <p>Поїздка в Херсон</p>
          </div>
        </div>
      </div>
    </main>
  );
}
