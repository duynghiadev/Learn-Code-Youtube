import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiperMenuData = [
  {
    spanValue: "Thật ấn tượng",
    imgSrc: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    spanValue: "Công viên quốc gia",
    imgSrc: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
  },
  {
    spanValue: "Hồ bơi tuyệt vời",
    imgSrc: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    spanValue: "Đảo",
    imgSrc: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
  },
  {
    spanValue: "Bãi biển",
    imgSrc: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
  },
  {
    spanValue: "Nhà nhỏ",
    imgSrc: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
  },
  {
    spanValue: "Thiết kế",
    imgSrc: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
  },
  {
    spanValue: "Bắc cực",
    imgSrc: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
  },
  {
    spanValue: "Cabin",
    imgSrc: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    spanValue: "Ven hồ",
    imgSrc: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    spanValue: "Chơi golf",
    imgSrc: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
  },
  {
    spanValue: "Khung cảnh tuyệt vời",
    imgSrc: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    spanValue: "Hang động",
    imgSrc: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
  },
  {
    spanValue: "Lướt sóng",
    imgSrc: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
  },
  {
    spanValue: "Khung nhà chữ A",
    imgSrc: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
  },
  {
    spanValue: "Nhà dưới lòng đất",
    imgSrc: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
  },
];

export default function SwiperMenu() {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 3, spaceBetween: 30 },
        480: { slidesPerView: 3, spaceBetween: 30 },
        768: { slidesPerView: 5, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
      }}
      navigation={true}
      modules={[Navigation]}
      className='mySwiper w-[95%] mx-auto'
    >
      {swiperMenuData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='w-full hover:border-b-2 hover:border-gray-500 h-12 cursor-pointer'>
            <img className='mx-auto w-5 h-5' src={item.imgSrc} alt='' />
            <p className='text-center font-xs text-gray-600 truncate'>{item.spanValue}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
