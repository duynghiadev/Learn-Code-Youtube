import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Link } from "react-router-dom";

const phoneAdImg = "https://a0.muscache.com/im/pictures/ffb461ba-275f-46f5-9b7f-ff508bcaa05f.jpg";
const adContent = (
  <div className='space-y-6 py-6'>
    <h1 className='font-bold text-3xl text-center'>Tìm các phòng được yêu thích</h1>
    <p className='text-center text-gray-500'>
      Những ngôi nhà được yêu thích nhất trên Airbnb, theo đánh giá của khách hàng. Cộng với những nâng cấp khác để giúp bạn tìm được một kỳ nghỉ
      tuyệt vời.
    </p>
    <div className='flex justify-center items-center'>
      <Link to='/roombycity/ho-chi-minh'>
        <button className='bg-gray-800 hover:bg-black duration-300 rounded-lg text-center text-white w-52 px-6 py-3'>Có gì hấp dẫn?</button>
      </Link>
    </div>
  </div>
);
export default function AdvertisementModal() {
  const [showAdvertisementModal, setShowAdvertisementModal] = useState(false);
  const [removeAdvertisementModal, setRemoveAdvertisementModal] = useState(false);
  const modalRef = useRef(null);
  const closeAdvertisementModal = () => {
    setShowAdvertisementModal(false);
    setTimeout(() => {
      setRemoveAdvertisementModal(true);
    }, 600);
  };
  const handleClickOutside = event => {
    if (modalRef.current && modalRef.current.contains(event.target)) {
      closeAdvertisementModal();
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShowAdvertisementModal(true);
    }, 500);
  }, []);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Escape") {
        closeAdvertisementModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <div
        ref={modalRef}
        className={`${showAdvertisementModal ? "opacity-50" : "opacity-0"} ${
          removeAdvertisementModal ? "hidden" : "block"
        } fixed left-0 top-0 z-[90] w-screen h-screen bg-black transition-opacity duration-500`}
      >
        {showAdvertisementModal && <RemoveScrollBar />}
      </div>
      {!removeAdvertisementModal && (
        <>
          <div
            className={`z-[100] hidden lg:grid grid-cols-1 lg:grid-cols-2 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ${
              showAdvertisementModal ? "opacity-100 scale-100" : "opacity-0 scale-50"
            } transition-all duration-500`}
          >
            <div className='p-6 flex justify-center items-center relative'>
              {adContent}
              <div className='absolute left-3 top-3'>
                <FontAwesomeIcon
                  className='cursor-pointer bg-gray-200 hover:bg-gray-300 duration-300 rounded-full w-3.5 h-3.5 p-2 text-black'
                  icon={faClose}
                  onClick={closeAdvertisementModal}
                />
              </div>
            </div>
            <div>
              <img className='h-full w-full object-cover rounded-lg' alt='' src={phoneAdImg} />
            </div>
          </div>
          <div className='z-[100] lg:hidden fixed bottom-0 right-0 bg-white w-full rounded-t-lg'>
            <div className='relative rounded-t-lg overflow-hidden'>
              <div className='absolute left-3 top-3'>
                <FontAwesomeIcon
                  className='cursor-pointer bg-gray-200 hover:bg-gray-300 duration-300 rounded-full w-3.5 h-3.5 p-2 text-black'
                  icon={faClose}
                  onClick={closeAdvertisementModal}
                />
              </div>
              <div
                className={`grid grid-cols-1 overflow-auto overscroll-auto ${
                  showAdvertisementModal ? "opacity-100 h-[calc(100vh-52px)]" : "opacity-0 h-0"
                } transition-all duration-500`}
              >
                <div>
                  <img className='w-full h-96 object-cover' alt='' src={phoneAdImg} />
                </div>
                <div className='flex justify-center h-full p-3'>{adContent}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
