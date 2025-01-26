import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Section5() {
  const CircleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <section className="page__section page__section_4" id="section_5">
      <div className="page__content">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="case-study-gallery"
        >
          <h1 className="title">Наші проєкти</h1>

          <motion.div
            custom={1}
            variants={CircleAnimation}
            className="case-study study1"
          >
            <Link to="/dobrobat">
              <div className="case-study__overlay">
                <h2 className="case-study__title">
                  Добровольчий батальйон УЦМ
                </h2>
                <p className="case-study__link">Детальніше</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            custom={2}
            variants={CircleAnimation}
            className="case-study study2"
          >
            <Link to="mist">
              <div className="case-study__overlay">
                <h2 className="case-study__title">Міст Опори</h2>
                <p className="case-study__link">Детальніше</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            custom={3}
            variants={CircleAnimation}
            className="case-study study4"
          >
            <Link to="inkluziya">
              <div className="case-study__overlay">
                <h2 className="case-study__title">Інклюзія від УЦМ</h2>
                <p className="case-study__link">Детальніше</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={CircleAnimation}
            className="case-study study3"
          >
            <Link to="tsinuy">
              <div className="case-study__overlay">
                <h2 className="case-study__title">Цінуй Життя</h2>
                <p className="case-study__link">Детальніше</p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
