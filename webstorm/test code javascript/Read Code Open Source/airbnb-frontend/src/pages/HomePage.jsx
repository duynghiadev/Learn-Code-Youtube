import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import FooterFixed from "../components/FooterFixed";
import Header from "../components/Header";
import { httpsNoLoading } from "../api/config";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import bgAnimate from "../assets/animation_lok4gyyr.json";
import Lottie from "lottie-react";
import convertToSlug from "../utils/convertToSlug";
import { Link } from "react-router-dom";
import AdvertisementModal from "../components/AdvertisementModal";

const anywherePlaces = [
  {
    name: "Toàn bộ nhà",
    link_slug: "ho-chi-minh",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329222%2Fmjwqhra4wbzlvoo2pe27.jpg&w=1920&q=75",
  },
  {
    name: "Chỗ ở độc đáo",
    link_slug: "nha-trang",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329186%2Ffmoml05qcd0yk2stvl9r.jpg&w=1920&q=75",
  },
  {
    name: "Trang trại và thiên nhiên",
    link_slug: "da-lat",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329121%2Fguagj5r2bkccgr1paez3.jpg&w=1920&q=75",
  },
  {
    name: "Cho phép mang theo thú cưng",
    link_slug: "da-nang",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329252%2Fgqhtg9ua6jdrffhbrfv1.jpg&w=1920&q=75",
  },
];

const explorePlaces = [
  {
    time: "15 phút",
    image: "https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp",
  },
  {
    time: "3 giờ",
    image: "https://res.cloudinary.com/rawn/image/upload/lbe3gpqkrwmzt98ce2nj.webp",
  },
  {
    time: "6.5 giờ",
    image: "https://res.cloudinary.com/rawn/image/upload/xi99sldgebhfvd3n66yx.webp",
  },
  {
    time: "15 phút",
    image: "https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp",
  },
  {
    time: "7.5 giờ",
    image: "https://res.cloudinary.com/rawn/image/upload/v1skk44cynr7gauhzb4e.webp",
  },
  {
    time: "45 phút",
    image: "https://res.cloudinary.com/rawn/image/upload/tqrm3cthowneesuafbp0.webp",
  },
  {
    time: "30 phút",
    image: "https://res.cloudinary.com/rawn/image/upload/tgt8dxlfwdh41jkptxeg.webp",
  },
  {
    time: "5 giờ",
    image: "https://res.cloudinary.com/rawn/image/upload/bt5jrxsl5ljq5bmfqqw0.webp",
  },
];

export default function HomePage() {
  const [cities, setCities] = useState(null);
  useEffect(() => {
    httpsNoLoading
      .get("vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8")
      .then(res => {
        setCities([...res.data.content.data]);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  const div2Ref = useRef(null);
  const firstSectionRef = useRef(null);
  return (
    <>
      <AdvertisementModal />
      <div className='bg-black'>
        <Header div2Ref={div2Ref} />
        <div ref={div2Ref} className='bg-black w-[95%] mx-auto h-[calc(100vh-64px)] lg:h-[calc(100vh-48px-64px)] flex justify-center items-center'>
          <div className='space-y-28 lg:space-y-6'>
            <img className='mx-auto w-full' alt='' src='https://airbnb-app.vercel.app/Images/banner_airbnb.webp' />
            <p className='text-center text-white font-bold text-3xl'>Nhờ có Host, mọi điều đều có thể</p>
            <div className='flex justify-center items-center'>
              <button onClick={() => firstSectionRef.current.scrollIntoView({ behavior: "smooth" })}>
                <Lottie className='mx-auto w-auto h-12 grayscale invert brightness-0' animationData={bgAnimate} loop={true} />
              </button>
            </div>
          </div>
        </div>
        <div className='bg-white'>
          <div ref={firstSectionRef} className='pb-[70px]'></div>
          <div className='w-[95%] mx-auto space-y-12'>
            {cities !== null ? (
              <div>
                <h1 className='font-bold text-3xl mb-3'>Khám phá điểm đến gần đây</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {cities.map((item, index) => {
                    return (
                      <Link key={index} to={`/roombycity/${convertToSlug(item.tinhThanh)}`}>
                        <Card
                          hoverable
                          className='w-full flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out'
                        >
                          <div className='flex items-center gap-3'>
                            <img className='w-12 h-12 rounded-lg object-cover' src={explorePlaces[index].image} alt='' />
                            <div>
                              <h2 className='font-bold'>{item.tinhThanh}</h2>
                              <p className='text-gray-700 text-sm'>{explorePlaces[index].time} lái xe</p>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className='space-y-3 pt-6 pb-16'>
              <h1 className='font-bold text-3xl'>Ở bất cứ đâu</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9'>
                {anywherePlaces.map((item, index) => {
                  return (
                    <Link key={index} to={`/roombycity/${item.link_slug}`}>
                      <Card hoverable className='w-full' cover={<img alt='' src={item.url} />}>
                        <Meta title={item.name} />
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <FooterFixed />
      </div>
    </>
  );
}
