import ReactPlayer from "react-player/youtube";
import WelcomeText from "./WelcomeText";
import { motion } from "framer-motion";

const sectionAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export default function Section3() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="page__section page__section_24"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <motion.div
        custom={1}
        variants={sectionAnimation}
        className="page__content"
      >
        <div className="welcome-block">
          <div className="welcome-video">
            <ReactPlayer
              className="welcome-video-player"
              light
              url={
                "https://www.youtube.com/embed/XgWM8SI0wZs?si=DVsR5Ovl70kzY4U-"
              }
              playing
            />
          </div>
          <WelcomeText />
        </div>
      </motion.div>
    </motion.section>
  );
}
