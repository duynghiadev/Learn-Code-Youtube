import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./cardSwiper.css";
import "swiper/css/navigation";
const CardSwiper = ({ children }) => {
  return (
    <div className="cardSwiper">
      <Swiper
        slidesPerView={4}
        grabCursor={true}
        navigation={{
          nextEl: ".my-swiper-button-next",
          prevEl: ".my-swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          510: {
            slidesPerView: 2,
          },
          758: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <div className="my-swiper-button-next">
        <i className="fas fa-chevron-right" />
      </div>
      <div className="my-swiper-button-prev">
        <i className="fas fa-chevron-left" />
      </div>
    </div>
  );
};

export default CardSwiper;
