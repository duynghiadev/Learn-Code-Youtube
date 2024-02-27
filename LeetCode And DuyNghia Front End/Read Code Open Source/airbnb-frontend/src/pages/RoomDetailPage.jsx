import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import boopSfx from "../assets/sounds/iphone-notification-fx.mp3";
import errSfx from "../assets/sounds/Error.mp3";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "swiper/css/autoplay";
import { addDays, differenceInDays } from "date-fns";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import viVN from "antd/es/locale/vi_VN";
import { useEffect, useMemo, useRef, useState } from "react";
import { https, httpsNoLoading } from "../api/config";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAirFreshener,
  faAward,
  faBacon,
  faHandsWash,
  faHeart,
  faKitchenSet,
  faParking,
  faSwimmingPool,
  faTv,
  faUpload,
  faWifi,
  faChevronCircleUp,
  faChevronCircleDown,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import convertToSlug from "../utils/convertToSlug";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Avatar, Button, ConfigProvider, Form, Image, Modal, Rate, message, notification } from "antd";
import { useSelector } from "react-redux";
import CommentSection from "../components/CommentSection";
import TextArea from "antd/es/input/TextArea";
import { Comment } from "@ant-design/compatible";
import { DEFAULT_NO_AVATAR, COUNTRY_FORMAT } from "../constants/defaultValues";
import { Home, Trophy, CalendarCheck2, Languages, Flag } from "lucide-react";
import ShowRating from "../components/ShowRating";
import { DateRangePicker } from "react-date-range";
import moment from "moment";
import { isRangeOverlap } from "range-overlap";
import useSound from "use-sound";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const BookCalendar = ({ bookedRangeDates, setBookedRangeDates }) => (
  <DateRangePicker
    onChange={item => setBookedRangeDates([item.selection])}
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    months={2}
    ranges={bookedRangeDates}
    direction='horizontal'
    className='p-6 flex overflow-auto'
  />
);

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const chuNha = "Long";
const phiDichVu = 31;
const Editor = ({ onChange, onSubmit, submitting, value, rateNum, onRateChange }) => (
  <>
    <Form.Item>
      <TextArea
        rows={4}
        onChange={onChange}
        value={value}
        style={{
          resize: "none",
        }}
        placeholder='Viết đánh giá...'
      />
    </Form.Item>
    <Form.Item>
      <Rate onChange={onRateChange} defaultValue={3} value={rateNum} character={({ index }) => customIcons[index + 1]} />
    </Form.Item>
    <Form.Item>
      <Button disabled={!value} htmlType='submit' loading={submitting} onClick={onSubmit} type='primary'>
        Thêm bình luận
      </Button>
    </Form.Item>
  </>
);

export default function RoomDetailPage() {
  const navigate = useNavigate();
  const [play] = useSound(boopSfx);
  const [errSound] = useSound(errSfx);
  const [openBookCalendar, setOpenBookCalendar] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [hienThiVeSinh, setHienThiVeSinh] = useState(false);
  const [bookedRangeDates, setBookedRangeDates] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 8),
      key: "selection",
    },
  ]);
  const totalNights = useMemo(() => differenceInDays(bookedRangeDates[0].endDate, bookedRangeDates[0].startDate), [bookedRangeDates]);
  const binhLuanRef = useRef(null);
  const [save, setSave] = useState(false);
  const [userBookedPlaces, setUserBookedPlaces] = useState([]);
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [tienNghi, setTienNghi] = useState(0);
  const [hienThiTatCaTienNghi, setHienThiTatCaTienNghi] = useState(false);
  const { user } = useSelector(state => {
    return state.userSlice;
  });
  const onSubmitReport = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOpenReport(false);
      setBaoCao("");
      notification.success({
        message: "Phản ánh thành công!",
      });
      play();
    }, 1000);
  };
  const [loginRequireModal, setLoginRequireModal] = useState(false);
  const handleConfirm = () => {
    if (user?.id === undefined) {
      setLoginRequireModal(true);
    } else {
      setShowConfirmModal(true);
    }
  };
  const handleBookHirePlace = () => {
    if (user?.id === undefined) {
      setLoginRequireModal(true);
    } else {
      if (
        userBookedPlaces.some(
          place =>
            place.maPhong.toString() === roomId &&
            isRangeOverlap(
              new Date(bookedRangeDates[0].startDate),
              new Date(bookedRangeDates[0].endDate),
              new Date(place.ngayDen),
              new Date(place.ngayDi),
            ),
        ) ||
        new Date(bookedRangeDates[0].startDate) < new Date() ||
        new Date(bookedRangeDates[0].endDate) < new Date()
      ) {
        message.error(
          new Date(bookedRangeDates[0].startDate) < new Date() || new Date(bookedRangeDates[0].endDate) < new Date()
            ? "Vui lòng không chọn thời gian quá khứ hoặc hôm nay!"
            : "Lịch trình bị chồng chéo hoặc người khác đã đặt khung giờ này!",
        );
        errSound();
      } else {
        httpsNoLoading
          .post("/dat-phong", {
            maPhong: roomId,
            ngayDen: bookedRangeDates[0].startDate,
            ngayDi: bookedRangeDates[0].endDate,
            soLuongKhach: countOfVisitors,
            maNguoiDung: user.id,
          })
          .then(res => {
            notification.success({
              message: res.data.message,
            });
            play();
            getBookedData();
          })
          .catch(err => {
            message.error(err.response.data.content.replace(/^\w/, c => c.toUpperCase()));
          });
      }
    }
    setShowConfirmModal(false);
  };
  const [usefulThings, setUsefulThings] = useState([]);
  const [trungBinhRating, setTrungBinhRating] = useState(0);
  const getBookedData = () => {
    httpsNoLoading
      .get(`dat-phong`)
      .then(res => {
        setUserBookedPlaces(res.data.content);
      })
      .catch(err => {
        console.error(err);
      });
  };
  useEffect(() => {
    getBookedData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const roomResponse = await https.get(`/phong-thue/${roomId}`);
        const commentListResponse = await https.get(`/binh-luan/lay-binh-luan-theo-phong/${roomId}`);
        const cityResponse = await https.get(`/vi-tri/${roomResponse.data.content.maViTri}`);

        setRoom({
          ...roomResponse.data.content,
          tinhThanh: cityResponse.data.content.tinhThanh,
          quocGia: cityResponse.data.content.quocGia,
          danhSachBinhLuan: commentListResponse.data.content.reverse(),
        });
        const updatedUsefulThings = [];
        if (roomResponse.data.content.bep) {
          updatedUsefulThings.push({
            name: "Bếp",
            icon: faKitchenSet,
          });
        }
        if (roomResponse.data.content.wifi) {
          updatedUsefulThings.push({
            name: "Wifi",
            icon: faWifi,
          });
        }
        if (roomResponse.data.content.tivi) {
          updatedUsefulThings.push({
            name: "Tivi",
            icon: faTv,
          });
        }
        if (roomResponse.data.content.dieuHoa) {
          updatedUsefulThings.push({
            name: "Điều hòa",
            icon: faAirFreshener,
          });
        }
        if (roomResponse.data.content.doXe) {
          updatedUsefulThings.push({
            name: "Bãi đỗ xe",
            icon: faParking,
          });
        }
        if (roomResponse.data.content.banUi) {
          updatedUsefulThings.push({
            name: "Bàn ủi",
            icon: faBacon,
          });
        }
        if (roomResponse.data.content.hoBoi) {
          updatedUsefulThings.push({
            name: "Hồ bơi",
            icon: faSwimmingPool,
          });
        }
        if (roomResponse.data.content.mayGiat) {
          updatedUsefulThings.push({
            name: "Máy giặt",
            icon: faHandsWash,
          });
        }
        setUsefulThings(updatedUsefulThings);
        const totalSao = commentListResponse.data.content.reduce((sum, item) => sum + item.saoBinhLuan, 0);
        if (commentListResponse.data.content.length === 0) {
          setTrungBinhRating("Chưa có đánh giá");
        } else {
          const tempNumber = totalSao / commentListResponse.data.content.length;
          const formatNumber = tempNumber % 1 === 0 ? tempNumber.toFixed(0) : tempNumber.toFixed(2);
          setTrungBinhRating(formatNumber);
        }
        const tempObjectRoom = { ...roomResponse.data.content };
        const trueValueCount = Object.keys(tempObjectRoom).filter(key => key !== "banLa" && tempObjectRoom[key] === true).length;
        setTienNghi(trueValueCount);
      } catch (err) {
        setError("Đã xảy ra lỗi khi tìm nạp dữ liệu. Vui lòng thử lại sau.");
        console.error(err);
      }
    }

    fetchData();
  }, [roomId]);

  const [submitting, setSubmitting] = useState(false);
  const [toEnglish, setToEnglish] = useState(true);
  const [hienThiMoTa, setHienThiMoTa] = useState(false);
  const [value, setValue] = useState("");
  const [baoCao, setBaoCao] = useState("");
  const [rating, setRating] = useState(3);
  const fetchCommentData = async () => {
    try {
      const commentListResponse = await https.get(`/binh-luan/lay-binh-luan-theo-phong/${roomId}`);
      setRoom(prevRoom => ({
        ...prevRoom,
        danhSachBinhLuan: commentListResponse.data.content.reverse(),
      }));
      const totalSao = commentListResponse.data.content.reduce((sum, item) => sum + item.saoBinhLuan, 0);
      setTrungBinhRating((totalSao / commentListResponse.data.content.length).toFixed(2));
      console.log(commentListResponse.data.content);
    } catch (err) {
      setError("Đã xảy ra lỗi khi tìm nạp dữ liệu. Vui lòng thử lại sau.");
      console.error(err);
    }
  };
  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setRating(3);
      https
        .post(
          `/binh-luan`,
          { maPhong: roomId, maNguoiBinhLuan: user.id, ngayBinhLuan: new Date(), noiDung: value, saoBinhLuan: rating },
          {
            headers: { token: user.token },
          },
        )
        .then(() => {
          message.success("Bình luận đã được gửi đi!");
          play();
          fetchCommentData();
        })
        .catch(err => {
          message.error(err.response.data.content.replace(/^\w/, c => c.toUpperCase()));
        });
    }, 1000);
  };

  const [countOfVisitors, setCountOfVisitors] = useState(1);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleRateChange = star => {
    setRating(star); // 1, 2, 3, 4, 5
  };

  if (error) {
    return <div className='mx-auto w-[95%] py-6 h-[200px]'>Lỗi: {error}</div>;
  }

  if (!room) {
    return <Spinner />;
  }

  return (
    <>
      <div className='mx-auto w-[95%] py-6 space-y-6'>
        <h1 className='font-bold text-black text-3xl'>{room.tenPhong}</h1>
        <div className='grid grid-cols-1 md:flex justify-between items-center gap-6'>
          <div className='grid md:flex gap-x-6 gap-y-3'>
            <div className='flex gap-x-6'>
              {room.danhSachBinhLuan.length > 0 && (
                <ShowRating trungBinhRating={trungBinhRating} binhLuanRef={binhLuanRef} ratingLength={room.danhSachBinhLuan.length} />
              )}
              <span className='space-x-2'>
                <FontAwesomeIcon className='w-4 h-4 text-[#FF5A5F]' icon={faAward} />
                <span className='text-gray-600'>Chủ nhà siêu cấp</span>
              </span>
            </div>
            <Link
              className='underline cursor-pointer text-gray-600 hover:text-[#FF5A5F] duration-300'
              to={`/roombycity/${convertToSlug(room.tinhThanh)}`}
            >
              {room.tinhThanh}, {room.quocGia}
            </Link>
          </div>
          <div className='flex justify-between md:block space-x-6'>
            <span
              onClick={() => {
                message.success("Đã chia sẻ!");
                play();
              }}
              className='text-black hover:text-[#FF5A5F] duration-300 cursor-pointer space-x-2'
            >
              <FontAwesomeIcon className='w-4 h-4' icon={faUpload} />
              <span className='underline'>Chia sẻ</span>
            </span>
            <span
              onClick={() => {
                setSave(!save);
                message.success(`Đã ${save ? "hủy" : ""} lưu!`);
                play();
              }}
              className='text-black hover:text-[#FF5A5F] duration-300 cursor-pointer space-x-2'
            >
              <FontAwesomeIcon className='w-4 h-4' icon={!save ? faHeart : faHeartBroken} />
              <span className='underline'>{save ? "Hủy lưu" : "Lưu"}</span>
            </span>
          </div>
        </div>
        <div className='w-full'>
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={true}
            className='mySwiper mx-auto'
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className='w-full cursor-pointer'>
                  <ConfigProvider locale={viVN}>
                    <Image width='100%' height='470px' alt='' src={room.hinhAnh} className='object-cover' />
                  </ConfigProvider>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='grid grid-cols-1 lg:flex gap-3'>
          <div className='basis-7/12 space-y-6'>
            <div className='flex items-center justify-between'>
              <div className='space-y-3'>
                <h1 className='font-bold text-black text-2xl'>Toàn bộ căn hộ. Chủ nhà {chuNha}</h1>
                <p>
                  {room.khach} khách • {room.tenPhong.toLowerCase().includes("studio") && "Phòng studio •"} {room.phongNgu} phòng ngủ • {room.giuong}{" "}
                  giường • {room.phongTam} phòng tắm
                </p>
              </div>
              <div className='relative'>
                <img
                  className='w-12 h-12 rounded-full object-cover'
                  alt=''
                  src='https://media.discordapp.net/attachments/1026660684739653674/1138030998991413352/ML_ITB_circle_OFF.png'
                />
                <div className='absolute top-7 left-7'>
                  <svg viewBox='0 0 14 24' role='presentation' aria-hidden={true} focusable={false} className='w-6 h-6 block fill-current'>
                    <path
                      d='m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823'
                      fill='#fff'
                    ></path>
                    <path
                      d='m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z'
                      fill='#ffb400'
                    ></path>
                    <path d='m12 9.5-5 3.75-5-3.75v-7.5z' fill='#ff5a5f'></path>
                    <path
                      d='m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z'
                      fill='#484848'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='w-full h-px bg-gray-300 mb-6'></div>
            <div className='space-y-6'>
              <div className='flex gap-3'>
                <Home />
                <div className='space-y-1'>
                  <h1 className='text-sm font-bold'>Toàn bộ nhà</h1>
                  <p className='text-sm text-gray-600 text-justify'>Bạn sẽ có chung cư cao cấp cho riêng mình.</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-sparkles'
                >
                  <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
                  <path d='M5 3v4' />
                  <path d='M19 17v4' />
                  <path d='M3 5h4' />
                  <path d='M17 19h4' />
                </svg>
                <div className='space-y-1'>
                  <h1 className='text-sm font-bold'>Vệ sinh tăng cường</h1>
                  <p className='text-sm text-gray-600 text-justify space-x-1'>
                    <span>Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb.</span>
                    {!hienThiVeSinh && (
                      <span onClick={() => setHienThiVeSinh(true)} className='font-bold underline text-black cursor-pointer'>
                        Hiển thị thêm
                      </span>
                    )}
                  </p>
                  {hienThiVeSinh && (
                    <ul className='text-sm text-gray-600'>
                      <li>Bước 1: Chuẩn bị</li>
                      <li>Bước 2: Làm sạch</li>
                      <li>Bước 3: Sát trùng</li>
                      <li>Bước 4: Kiểm tra</li>
                      <li>Bước 5: Sửa soạn lại</li>
                      <li>
                        Xem thêm:{" "}
                        <a
                          href='https://www.airbnb.com.vn/help/article/2809'
                          target='blank'
                          className='font-bold underline text-black cursor-pointer'
                        >
                          Bài viết
                        </a>
                      </li>
                    </ul>
                  )}
                  {hienThiVeSinh && (
                    <span onClick={() => setHienThiVeSinh(false)} className='text-sm font-bold underline text-black cursor-pointer'>
                      Ẩn bớt
                    </span>
                  )}
                </div>
              </div>
              <div className='flex gap-3'>
                <Trophy />
                <div className='space-y-1'>
                  <h1 className='text-sm font-bold'>{chuNha} là chủ nhà siêu cấp</h1>
                  <p className='text-sm text-gray-600 text-justify'>
                    Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời
                    cho khách.
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <CalendarCheck2 />
                <div className='space-y-1'>
                  <h1 className='text-sm font-bold'>Miễn phí hủy trong 48 giờ</h1>
                </div>
              </div>
            </div>
            <div className='w-full h-px bg-gray-300 mb-6'></div>
            <div className='space-y-6'>
              <img className='w-36' alt='' src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' />
              <p className='text-justify'>
                Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp chủ nhà {chuNha} hủy, thông tin nhà/phòng cho thuê không chính xác và những
                vấn đề khác như sự cố trong quá trình nhận phòng.
              </p>
              <div>
                <a href='https://www.airbnb.com.vn/help/article/3218' target='blank' className='font-bold underline text-black cursor-pointer'>
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <div className='w-full h-px bg-gray-300 mb-6'></div>
            <div>
              <button
                className='w-full text-black bg-white border-2 border-black rounded-lg py-3 hover:bg-gray-200 duration-300 flex justify-between items-center px-6'
                onClick={() => setToEnglish(!toEnglish)}
              >
                <span>Dịch sang tiếng {toEnglish ? "Việt" : "Anh"}</span>
                <Languages />
              </button>
            </div>
            <p className={`text-justify ${!hienThiMoTa && "line-clamp-2"}`}>
              {toEnglish
                ? "My apartment located on nearly top floor of condominium in Vung Tau. The balcony and 2 bedrooms windows face to mountains, ocean, big lake and whole city view. You can easily access to attractions nearby: Beaches, temples, church, fresh seafood market, convenient stores, coffee shops, pharmacy, lighthouse, night market..."
                : "Căn hộ của tôi nằm ở tầng cao nhất của chung cư ở Vũng Tàu. Ban công và cửa sổ 2 phòng ngủ hướng ra núi, biển, hồ lớn và view toàn thành phố. Bạn có thể dễ dàng tiếp cận các điểm tham quan lân cận: Bãi biển, đền chùa, nhà thờ, chợ hải sản tươi sống, cửa hàng tiện lợi, quán cà phê, hiệu thuốc, hải đăng, chợ đêm..."}
            </p>
            <div>
              <span onClick={() => setHienThiMoTa(!hienThiMoTa)} className='font-bold underline text-black cursor-pointer space-x-2'>
                <span>{!hienThiMoTa ? "Hiển thị thêm" : "Ẩn bớt"}</span>
                <span>{hienThiMoTa ? <FontAwesomeIcon icon={faChevronCircleUp} /> : <FontAwesomeIcon icon={faChevronCircleDown} />}</span>
              </span>
            </div>
            <div className='w-full h-px bg-gray-300 mb-6'></div>
          </div>
          <div className='basis-1/12 empty'></div>
          <div className='basis-4/12 space-y-6 sticky w-full lg:h-[350px] top-28'>
            <div className='p-6 rounded-lg border-2 border-gray-300 space-y-6 shadow-xl'>
              <div className='flex flex-wrap justify-between items-center gap-3'>
                <div>
                  <span className='font-bold'>${room.giaTien.toLocaleString(COUNTRY_FORMAT)}</span> / đêm
                </div>
                <div>
                  <ShowRating trungBinhRating={trungBinhRating} binhLuanRef={binhLuanRef} ratingLength={room.danhSachBinhLuan.length} />
                </div>
              </div>
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <div
                    className='cursor-pointer grow p-3 bg-white hover:bg-gray-300 duration-300 rounded-tl-lg border-x-2 border-t-2 border-gray-600'
                    onClick={() => setOpenBookCalendar(true)}
                  >
                    <div className='font-bold'>Nhận phòng</div>
                    <div>{moment(bookedRangeDates[0].startDate).format("DD-MM-YYYY")}</div>
                  </div>
                  <div className='grow-0'></div>
                  <div
                    className='cursor-pointer grow p-3 bg-white hover:bg-gray-300 duration-300 rounded-tr-lg border-t-2 border-r-2 border-gray-600'
                    onClick={() => setOpenBookCalendar(true)}
                  >
                    <div className='font-bold'>Trả phòng</div>
                    <div>{moment(bookedRangeDates[0].endDate).format("DD-MM-YYYY")}</div>
                  </div>
                </div>
                <div className='p-3 border-2 border-gray-600 rounded-b-lg'>
                  <div className='mb-3 font-bold'>Khách</div>
                  <div className='flex justify-between items-center'>
                    <div>
                      <button
                        onClick={() => {
                          if (countOfVisitors === 1) {
                            message.warning("Phải có tối thiểu 1 khách!");
                          } else {
                            setCountOfVisitors(countOfVisitors - 1);
                          }
                        }}
                        className='font-bold w-9 h-9 text-white bg-[#FF5A5F] hover:bg-[#9e3e4e] rounded-full duration-300 flex items-center justify-center'
                      >
                        <div>–</div>
                      </button>
                    </div>
                    <div>{countOfVisitors} khách</div>
                    <div>
                      <button
                        onClick={() => {
                          if (countOfVisitors === room.khach) {
                            message.warning("Đã đạt tới số khách tối đa!");
                          } else {
                            setCountOfVisitors(countOfVisitors + 1);
                          }
                        }}
                        className='font-bold w-9 h-9 text-white bg-[#FF5A5F] hover:bg-[#9e3e4e] rounded-full duration-300 flex items-center justify-center'
                      >
                        <div>+</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={handleConfirm} className='font-bold w-full text-white bg-[#FF5A5F] hover:bg-[#9e3e4e] rounded-lg py-3 duration-300'>
                Đặt phòng
              </button>
              <p className='text-center'>Bạn vẫn chưa bị trừ tiền</p>
              <div className='flex justify-between items-center'>
                <p className='underline'>
                  ${room.giaTien.toLocaleString(COUNTRY_FORMAT)} x {totalNights.toLocaleString(COUNTRY_FORMAT)} đêm
                </p>
                <p>${(room.giaTien * totalNights).toLocaleString(COUNTRY_FORMAT)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='underline'>Phí dịch vụ</p>
                <p>${phiDichVu.toLocaleString(COUNTRY_FORMAT)}</p>
              </div>
              <div className='w-full h-px bg-gray-300 mb-6'></div>
              <div className='flex justify-between items-center'>
                <p className='font-bold'>Tổng</p>
                <p className='font-bold'>${(room.giaTien * totalNights + phiDichVu).toLocaleString(COUNTRY_FORMAT)}</p>
              </div>
            </div>
            <p className='flex justify-center items-center gap-3 cursor-pointer'>
              <Flag className='w-3 h-3 text-gray-500' />
              <span onClick={() => setOpenReport(true)} className='underline text-gray-500 font-bold text-sm'>
                Báo cáo phòng cho thuê này
              </span>
            </p>
          </div>
        </div>
        <div className='space-y-6'>
          <h1 className='font-bold text-black text-3xl'>Tiện nghi</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {usefulThings.slice(0, 2).map((item, index) => (
              <div key={index} className='space-x-3'>
                <span>
                  <FontAwesomeIcon className='w-5 h-5' icon={item.icon} />
                </span>
                <span>{item.name}</span>
              </div>
            ))}
            {hienThiTatCaTienNghi && (
              <>
                {usefulThings.slice(2).map((item, index) => (
                  <div key={index} className='space-x-3'>
                    <span>
                      <FontAwesomeIcon className='w-5 h-5' icon={item.icon} />
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </>
            )}
          </div>
          {usefulThings.length > 2 && (
            <div>
              {!hienThiTatCaTienNghi ? (
                <button
                  onClick={() => setHienThiTatCaTienNghi(true)}
                  className='w-56 text-black bg-white border-2 border-black rounded-lg p-3 hover:bg-gray-200 duration-300'
                >
                  Hiển thị tất cả {tienNghi} tiện nghi
                </button>
              ) : (
                <div className='mt-6'>
                  <button
                    onClick={() => setHienThiTatCaTienNghi(false)}
                    className='w-56 text-black bg-white border-2 border-black rounded-lg p-3 hover:bg-gray-200 duration-300'
                  >
                    Ẩn bớt tiện nghi
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        {room.danhSachBinhLuan.length > 0 && <div ref={binhLuanRef} className='pb-[50px]'></div>}
        <div className='w-full h-px bg-gray-300 mb-6'></div>
        <h1 className='font-bold text-3xl text-black'>Bình luận</h1>
        {room.danhSachBinhLuan.length > 0 ? (
          <>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                room.danhSachBinhLuan.length > 4 && "h-[300px]"
              } overscroll-y-auto overflow-y-auto px-2`}
            >
              {room.danhSachBinhLuan.map((item, index) => (
                <CommentSection key={index} item={item} />
              ))}
            </div>
          </>
        ) : (
          <p>Chưa có bình luận nào! Bạn hãy trở thành người đầu tiên nhé 😍</p>
        )}
        <div className='w-full h-px bg-gray-300 mb-6'></div>
        {user === null ? (
          <div>Vui lòng đăng nhập để bình luận!</div>
        ) : (
          <div>
            <Comment
              avatar={<Avatar src={user?.avatar !== "" ? user?.avatar : DEFAULT_NO_AVATAR} alt='' />}
              content={
                <Editor
                  onRateChange={handleRateChange}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  value={value}
                  rateNum={rating}
                />
              }
            />
          </div>
        )}
      </div>
      <Modal
        title={`${totalNights.toLocaleString(COUNTRY_FORMAT)} đêm`}
        okType='primary'
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        className='!w-max'
        open={openBookCalendar}
        onCancel={() => setOpenBookCalendar(false)}
        centered
      >
        <BookCalendar bookedRangeDates={bookedRangeDates} setBookedRangeDates={setBookedRangeDates} />
      </Modal>
      <Modal
        cancelButtonProps={{ style: { display: "none" } }}
        title='Bạn chưa đăng nhập'
        okType='primary'
        className='!w-max'
        open={loginRequireModal}
        onCancel={() => setLoginRequireModal(false)}
        onOk={() => navigate("/login")}
        centered
      >
        Vui lòng đăng nhập để đặt phòng!
      </Modal>
      <Modal
        cancelButtonProps={{ style: { display: "none" } }}
        title='Xác nhận đặt phòng'
        okType='primary'
        className='!w-max'
        open={showConfirmModal}
        onCancel={() => setShowConfirmModal(false)}
        onOk={handleBookHirePlace}
        centered
      >
        <p>Bạn có chắc muốn đặt phòng #{roomId} này?</p>
        <p>
          Ngày sử dụng: {moment(bookedRangeDates[0].startDate).format("DD-MM-YYYY")} {"->"} {moment(bookedRangeDates[0].endDate).format("DD-MM-YYYY")}
        </p>
        <p>
          Lượng khách: {countOfVisitors < 10 && "0"}
          {countOfVisitors}
        </p>
      </Modal>
      <Modal
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        title='Báo cáo dịch vụ cho thuê (tên được bảo mật)'
        okType='primary'
        open={openReport}
        onCancel={() => setOpenReport(false)}
        centered
      >
        <Form.Item>
          <CKEditor onChange={(_, editor) => setBaoCao(editor.getData())} editor={ClassicEditor} />
        </Form.Item>
        <Form.Item>
          <div className='flex justify-end'>
            <Button disabled={!baoCao} right htmlType='submit' loading={submitting} onClick={onSubmitReport}>
              Gửi
            </Button>
          </div>
        </Form.Item>
      </Modal>
    </>
  );
}

BookCalendar.propTypes = {
  bookedRangeDates: PropTypes.array.isRequired,
  setBookedRangeDates: PropTypes.func.isRequired,
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onRateChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  rateNum: PropTypes.number.isRequired,
};
