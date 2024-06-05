import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterFixed from "../components/FooterFixed";
import { Link } from "react-router-dom";
import SpaceManSVG from "../components/SpaceMan";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className='w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 py-12 space-y-9'>
        <div className='space-y-9'>
          <p className='text-black font-bold text-xl'>Chúng tôi dường như không thể tìm thấy trang bạn đang tìm kiếm</p>
          <div className='space-y-3'>
            <p>Dưới đây là một số đường dẫn của website:</p>
            <ul className='space-y-3'>
              <li>
                <Link to='/' className='font-bold text-black underline cursor-pointer'>
                  Trang chủ
                </Link>
              </li>
              <li>
                <a className='font-bold text-black underline cursor-pointer'>Đi du lịch trên Airbnb</a>
              </li>
              <li>
                <a className='font-bold text-black underline cursor-pointer'>Làm chủ nhà trên Airbnb</a>
              </li>
              <li>
                <a className='font-bold text-black underline cursor-pointer'>Uy tín & An toàn</a>
              </li>
              <li>
                <a className='font-bold text-black underline cursor-pointer'>Sơ đồ trang web</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='mx-auto my-auto w-72'>
            <SpaceManSVG />
          </div>
        </div>
      </div>
      <Footer />
      <FooterFixed />
    </>
  );
}
