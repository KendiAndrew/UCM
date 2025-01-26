import Mediacal from "../../../assets/icon1.png";
import Help from "../../../assets/icon2.png";
import Gumanitar from "../../../assets/icon3.png";
import HelpKids from "../../../assets/icon4.png";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Section4() {
  const CircleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <section className="page__section" id="section_">
      <div className="page__content">
        <div className="container-directions">
          <h2 className="page__sub-title lng-title2">Наші напрямки</h2>
          <div className="wrap">
            <div className="card">
              <div className="card-pic-wrap">
                <div className="container-icon">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className="container-circle"
                  >
                    <motion.div
                      custom={1}
                      variants={CircleAnimation}
                      className="span3"
                    >
                      <div
                        className="circle"
                        data-aos="fade-up"
                        data-aos-duration="300"
                        data-content="medical"
                      >
                        <img src={Mediacal} alt="Медичний напрямок" />
                        <p>Медичний напрямок</p>
                      </div>
                    </motion.div>
                    <motion.div
                      custom={2}
                      variants={CircleAnimation}
                      className="span3"
                    >
                      <div
                        className="circle"
                        data-aos="fade-up"
                        data-aos-duration="300"
                        data-content="help-people"
                      >
                        <img src={Help} alt="Допомога людям" />
                        <p>Допомога </p>
                        <p>людям</p>
                      </div>
                    </motion.div>
                    <motion.div
                      custom={3}
                      variants={CircleAnimation}
                      className="span3"
                    >
                      <div
                        className="circle"
                        data-aos="fade-up"
                        data-aos-duration="300"
                        data-content="humanitarian-aid"
                      >
                        <img src={Gumanitar} alt="Гуманітарна допомога" />
                        <p>Гуманітарна допомога</p>
                      </div>
                    </motion.div>
                    <motion.div
                      custom={4}
                      variants={CircleAnimation}
                      className="span3"
                    >
                      <div
                        className="circle"
                        data-aos="fade-up"
                        data-aos-duration="300"
                        data-content="help-children"
                      >
                        <img src={HelpKids} alt="Допомога дітям" />
                        <p>Допомога</p>
                        <p>дітям</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <div className="card-content">
                <Link className="detali" to="/activities">
                  Детільніше про нашу діяльність &gt;
                </Link>
                <h3 className="h3-text" id="title">
                  Гуманітарна допомога
                </h3>
                <p className="para-text-one" id="description">
                  Надання благодійної (гуманітарної) допомоги особам, які
                  потребують її у зв'язку з соціальною незахищеністю,
                  матеріальною незабезпеченістю, важким фінансовим становищем
                </p>
                <p className="button_directions">
                  <a href="https://send.monobank.ua/jar/Jv1EVewoC">
                    ПІДТРИМАТИ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
