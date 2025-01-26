import pathner1 from "../../../assets/partner1.jpg";
import pathner2 from "../../../assets/partner2.jpg";
import pathner3 from "../../../assets/partner3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Section6() {
  return (
    <section className="page__section">
      <div className="partners">
        <h2 className="page__sub-title lng-title2">Наші партнеры</h2>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper"
        >
          <SwiperSlide>
            <div className="swiper__container">
              <img className="swiper__img" src={pathner1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <img className="swiper__img" src={pathner2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <img className="swiper__img" src={pathner3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <img className="swiper__img" src={pathner1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <img className="swiper__img" src={pathner2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__container">
              <img className="swiper__img" src={pathner3} />
            </div>
          </SwiperSlide>
        </Swiper>
        <a href="https://t.me/ukrainetse_matir/6">
          <p className="partner-dit">Детальніше про партнерів &gt;</p>
        </a>
      </div>
    </section>
  );
}
