import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
const Slider = ({ slides }) => {

  const mediaType = {
    tv: "series",
    movie: "movies",
    series: "series",
    movies: "movies",
  };

  return (
    <div className="slider">
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        effect={"slide"}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {slides.map((ele) => {
          return (
            <SwiperSlide key={ele?.id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280${ele?.backdrop_path}`}
                alt=""
              />
              <div className="slideContent">
                <div className="title">
                  <h2>
                    <span>{ele?.name || ele?.title}</span>
                  </h2>
                </div>
                <div className="play">
                  <Link to={`${mediaType[ele?.media_type] || ""}/${ele?.id}`}>
                    <i className="fa-solid fa-circle-play"></i>
                  </Link>
                </div>

                <div className="tags">
                  {ele?.release_date && (
                    <span className="year">
                      {ele?.release_date?.split("-")[0]}
                    </span>
                  )}
                  <span className="quality">{ele?.media_type}</span>
                  <span className="rating">
                    <i className="fa-solid fa-star"></i>
                    {Math.round(ele?.vote_average * 10) / 10}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
