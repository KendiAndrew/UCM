import { motion } from "framer-motion";

export default function Section9() {
  const CircleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <section className="page__section page__section_9">
      <div className="page__content">
        <h2 className="page__sub-title lng-title3">Приєднатися до нас</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="page__catalog catalog"
        >
          <motion.div
            custom={1}
            variants={CircleAnimation}
            className="catalog__item item5"
          >
            <a href="https://t.me/ukrainetse_matir/11">
              <p className="catalog__title lng-work5">ПОТРІБНА ДОПОМОГА?</p>
            </a>
          </motion.div>
          <motion.div
            custom={2}
            variants={CircleAnimation}
            className="catalog__item item6"
          >
            <a href="https://t.me/ukrainetse_matir/11">
              <p className="catalog__title lng-work6">Звʼязок з нами</p>
            </a>
          </motion.div>
        </motion.div>
        <div className="page__text">
          <div className="joinus-text">
            <p>Приєднуйся</p>
            <p>Разом ми сила !</p>
          </div>
        </div>
      </div>
    </section>
  );
}
