import "swiper/css";
import "swiper/css/pagination";
import { Card } from "antd";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { COUNTRY_FORMAT } from "../constants/defaultValues";
import { useState } from "react";
import { useEffect } from "react";

export default function ListRooms({ item, cityNoSlug }) {
  const [usefulThings, setUsefulThings] = useState([]);
  useEffect(() => {
    const updatedThings = [];
    if (item.wifi) {
      updatedThings.push("Wifi");
    }
    if (item.bep) {
      updatedThings.push("Bếp");
    }
    if (item.dieuHoa) {
      updatedThings.push("Điều hòa nhiệt độ");
    }
    if (item.mayGiat) {
      updatedThings.push("Máy giặt");
    }
    if (item.tivi) {
      updatedThings.push("Tivi");
    }
    if (item.doXe) {
      updatedThings.push("Đỗ xe");
    }
    if (item.hoBoi) {
      updatedThings.push("Hồ bơi");
    }
    setUsefulThings(updatedThings);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='space-y-6'>
      <div className='w-full h-px bg-gray-300 mb-6'></div>
      <Link to={`/roomdetail/${item.id}`}>
        <Card hoverable>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                modules={[Pagination]}
                pagination={true}
                className='mySwiper mx-auto w-[90%] h-48 rounded-lg'
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className='w-full cursor-pointer'>
                      <img className='w-full h-52 object-cover object-left' src={item.hinhAnh} alt='' />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <div>
                <div className='relative'>
                  <p className='text-gray-500 text-md truncate'>Toàn bộ căn hộ dịch vụ tại {cityNoSlug}</p>
                  <p className='truncate text-xl'>{item.tenPhong}</p>
                  <div className='absolute right-0 top-1 cursor-pointer'>
                    <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
                      <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
                    </svg>
                  </div>
                </div>
                <div className='w-[15%] bg-gray-300 h-[3px] rounded-lg my-2'></div>
                <p className='text-gray-500 text-md truncate'>
                  {item.khach} khách {item.tenPhong.toLowerCase().includes("studio") && "• Phòng studio"}
                  {item.phongNgu > 0 && " • " + item.phongNgu + " phòng ngủ"}
                  {item.giuong > 0 && " • " + item.phongNgu + " giường"}
                  {item.phongTam > 0 && " • " + item.phongNgu + " phòng tắm"}
                </p>
                <p className='text-gray-500 text-md truncate'>
                  {usefulThings.map((item, index) => {
                    return (
                      <span key={index}>
                        {item}
                        {index === usefulThings.length - 1 ? "" : " • "}
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className='text-right mt-12'>
                <span className='font-bold'>$ {item.giaTien.toLocaleString(COUNTRY_FORMAT)}</span> / đêm
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}

ListRooms.propTypes = {
  item: PropTypes.object,
  cityNoSlug: PropTypes.string,
};
