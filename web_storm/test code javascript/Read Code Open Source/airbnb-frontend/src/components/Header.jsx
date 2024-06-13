import { Dropdown, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../api/localService";
import { setLogin, setSoNguoi, setDateRange, setDiaDiem } from "../redux/userSlice";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { DEFAULT_NO_AVATAR } from "../constants/defaultValues";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { httpsNoLoading } from "../api/config";
import { DateRangePicker } from "react-date-range";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import moment from "moment";
import convertToSlug from "../utils/convertToSlug";

export default function Header({ div2Ref }) {
  const [extendSearchBar, setExtendSearchBar] = useState(false);
  const overlayRef = useRef(null);
  const handleClickOutside = event => {
    if (overlayRef.current && overlayRef.current.contains(event.target)) {
      setExtendSearchBar(false);
      setShowSearchLocation(false);
      setShowSearchDateRange(false);
      setShowSearchGuests(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [extendSearchBar]);
  const [div2Visible, setDiv2Visible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (div2Ref && div2Ref.current) {
        const div2Position = div2Ref.current.getBoundingClientRect();
        if (div2Position.top - 64 > window.innerHeight || div2Position.bottom - 64 < 0) {
          setDiv2Visible(false);
        } else {
          setDiv2Visible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [div2Ref]);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    httpsNoLoading
      .get("vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8")
      .then(res => {
        setCities(res.data.content.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const { user, diaDiem, dateRange, soNguoi } = useSelector(state => {
    return state.userSlice;
  });
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    userLocalStorage.remove();
    dispatch(setLogin(null));
    message.success("Đăng xuất thành công!");
    if (pathname === "/personal-info") {
      navigate("/");
    }
  };
  const location = useLocation();
  const items = [
    {
      key: "1",
      label: user ? (
        <Link className='font-bold' to='/personal-info'>
          Thông tin cá nhân
        </Link>
      ) : (
        <Link className='font-bold' to='/register'>
          Đăng ký
        </Link>
      ),
    },
    {
      key: "2",
      label: user ? (
        <a className='font-bold' onClick={handleLogout}>
          Đăng xuất
        </a>
      ) : (
        <Link className='font-bold' to='/login'>
          Đăng nhập
        </Link>
      ),
    },
    {
      key: "3",
      label: <div className='w-full'>Cho thuê nhà</div>,
    },
    {
      key: "4",
      label: <div>Tổ chức trải nghiệm</div>,
    },
    {
      key: "5",
      label: <div>Trợ giúp</div>,
    },
  ];
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const [showSearchDateRange, setShowSearchDateRange] = useState(false);
  const [showSearchGuests, setShowSearchGuests] = useState(false);

  return (
    <>
      <div className='invisible lg:visible'>
        {extendSearchBar && <div ref={overlayRef} className='fixed top-0 left-0 z-50 w-screen h-screen bg-black opacity-50'></div>}
      </div>
      <div className={`w-full fixed ${location.pathname === "/" && div2Visible ? "bg-black" : "bg-white"} duration-300 z-50 left-0 top-0 shadow-md`}>
        <div className='w-[95%] mx-auto py-6 flex flex-grow justify-between items-center h-16 duration-300 transition-all'>
          <div className='w-[50%] flex justify-start items-center'>
            <Link to='/' className='inline-flex'>
              <img
                alt=''
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                className={`w-24 ${location.pathname === "/" && div2Visible ? "grayscale invert brightness-0 cursor-pointer" : ""} duration-300`}
              />
            </Link>
          </div>
          {extendSearchBar ? (
            <ul className='hidden lg:flex justify-center items-center gap-x-12 grow w-full transition-all duration-300'>
              <li
                className={`text-black cursor-pointer ${
                  location.pathname === "/" && div2Visible ? "text-white" : "text-black"
                } duration-300 relative group`}
              >
                <a>Nơi ở</a>
                <div
                  className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    location.pathname === "/" && div2Visible ? "bg-white" : "bg-black"
                  } h-px w-0 group-hover:w-1/2 top-[30px] left-1/2 duration-300 rounded-lg`}
                ></div>
              </li>
              <li
                className={`text-black cursor-pointer ${
                  location.pathname === "/" && div2Visible ? "text-white" : "text-black"
                } duration-300 relative group`}
              >
                <a>Trải nghiệm</a>
                <div
                  className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    location.pathname === "/" && div2Visible ? "bg-white" : "bg-black"
                  } h-px w-0 group-hover:w-1/2 top-[30px] left-1/2 duration-300 rounded-lg`}
                ></div>
              </li>
              <li
                className={`text-black cursor-pointer ${
                  location.pathname === "/" && div2Visible ? "text-white" : "text-black"
                } duration-300 relative group`}
              >
                <a>Trải nghiệm trực tuyến</a>
                <div
                  className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    location.pathname === "/" && div2Visible ? "bg-white" : "bg-black"
                  } h-px w-0 group-hover:w-1/2 top-[30px] left-1/2 duration-300 rounded-lg`}
                ></div>
              </li>
            </ul>
          ) : (
            <div className='hidden lg:block bg-white w-1/2 rounded-full border-[1px] border-gray-300'>
              <div className='flex'>
                <div
                  onClick={() => {
                    setExtendSearchBar(true);
                    setShowSearchLocation(true);
                  }}
                  className='flex-1 p-1.5 flex justify-center items-center cursor-pointer'
                >
                  <p className='truncate font-bold text-black'>Địa điểm bất kỳ</p>
                </div>
                <div className='my-3 border-l border-gray-400'></div>
                <div
                  onClick={() => {
                    setExtendSearchBar(true);
                    setShowSearchDateRange(true);
                  }}
                  className='flex-1 p-1.5 flex justify-center items-center cursor-pointer'
                >
                  <p className='truncate font-bold text-black'>Tuần bất kỳ</p>
                </div>
                <div className='my-3 border-l border-gray-400'></div>
                <div
                  onClick={() => {
                    setExtendSearchBar(true);
                    setShowSearchGuests(true);
                  }}
                  className='flex-1 p-1.5 flex justify-center items-center cursor-pointer group gap-3'
                >
                  <p className='truncate text-gray-500'>Thêm khách</p>
                  <div className='bg-[#FF5A5F] group-hover:bg-[#9e3e4e] duration-300 text-white rounded-full p-2 flex justify-center items-center'>
                    <FontAwesomeIcon className='h-3 w-3' icon={faSearch} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='flex justify-end w-[50%]'>
            <div className='flex justify-between items-center gap-x-3'>
              <div
                className={`hidden md:block rounded-full bg-transparent hover:bg-gray-300 duration-300 cursor-pointer px-1 py-2 truncate ${
                  location.pathname === "/" && div2Visible ? "text-white" : "text-black"
                } duration-300`}
              >
                {location.pathname === "/" ? "Đón tiếp khách" : "Trở thành chủ nhà"}
              </div>
              <div
                className={`hidden md:flex justify-center items-center ${
                  location.pathname === "/" && div2Visible ? "text-white" : "text-black"
                } rounded-full bg-transparent hover:bg-gray-300 duration-300 cursor-pointer px-6 py-3`}
              >
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='presentation'
                  focusable='false'
                  className='inline-block h-4 w-4 text-current fill-current'
                >
                  <path d='m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z'></path>
                </svg>
              </div>
              <Dropdown trigger={["click"]} menu={{ items }} placement='bottomRight'>
                <div className='px-6 py-3 border border-gray-300 rounded-full flex justify-between items-center gap-x-6 hover:shadow-lg hover:shadow-gray-500/50 duration-200 cursor-pointer bg-white'>
                  <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='presentation'
                    focusable='false'
                    className='block h-5 w-5 text-current stroke-current stroke-3 fill-none overflow-visible'
                  >
                    <g fill='none' fillRule='nonzero'>
                      <path d='m2 16h28'></path>
                      <path d='m2 24h28'></path>
                      <path d='m2 8h28'></path>
                    </g>
                  </svg>
                  {user?.avatar ? (
                    <img alt='' className='h-5 w-5 mx-auto rounded-full object-cover' src={user?.avatar ?? DEFAULT_NO_AVATAR} />
                  ) : (
                    <svg
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='presentation'
                      focusable='false'
                      className='block h-5 w-5 fill-current'
                    >
                      <path d='m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z'></path>
                    </svg>
                  )}
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className={`transition-all duration-300 ${extendSearchBar ? "lg:h-16 lg:pb-6" : "h-0 pb-0"} flex justify-center items-center`}>
          {extendSearchBar && <RemoveScrollBar />}
          {extendSearchBar && (
            <div className='hidden lg:block bg-white w-1/2 rounded-full border-[1px] border-gray-300 relative'>
              {showSearchLocation && (
                <div className='absolute w-[500px] top-[70px] left-0 bg-white rounded-lg p-6 border-2 border-gray-300 overflow-y-auto overscroll-y-auto cursor-auto max-h-[calc(100vh-250px)]'>
                  <h1 className='font-bold text-md mb-6'>Tìm kiếm địa điểm</h1>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {cities.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          dispatch(setDiaDiem(item.tinhThanh));
                          setShowSearchLocation(false);
                          setShowSearchDateRange(true);
                        }}
                        className='space-y-1 group cursor-pointer'
                      >
                        <div>
                          <img
                            className='w-full h-20 object-cover rounded-lg border-2 group-hover:border-gray-600 duration-300'
                            alt=''
                            src={item.hinhAnh}
                          />
                        </div>
                        <p>{item.tinhThanh}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className='flex'>
                <div
                  onClick={() => {
                    setShowSearchLocation(true);
                    setShowSearchDateRange(false);
                    setShowSearchGuests(false);
                  }}
                  className='flex-1 px-6 py-3 flex justify-start items-center cursor-pointer'
                >
                  <div>
                    <p className='text-sm'>Địa điểm</p>
                    <p className={`text-sm ${!diaDiem ? "text-gray-400" : "font-bold"}`}>{diaDiem ? diaDiem : "Bạn sắp đi đâu?"}</p>
                  </div>
                </div>
                <div className='my-3 border-l border-gray-400'></div>
                <div
                  onClick={() => {
                    setShowSearchLocation(false);
                    setShowSearchDateRange(true);
                    setShowSearchGuests(false);
                  }}
                  className='flex-1 p-3 flex justify-center items-center cursor-pointer relative'
                >
                  <p>
                    {moment(dateRange[0].startDate).format("DD/MM/YYYY")} – {moment(dateRange[0].endDate).format("DD/MM/YYYY")}
                  </p>
                  {showSearchDateRange && (
                    <div className='absolute top-[70px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg border-2 border-gray-300 overflow-y-auto overscroll-y-auto cursor-auto'>
                      <DateRangePicker
                        onChange={item => dispatch(setDateRange([item.selection]))}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={dateRange}
                        direction='horizontal'
                        className='p-6 flex max-h-[calc(100vh-250px)] overflow-auto overscroll-auto'
                      />
                    </div>
                  )}
                </div>
                <div className='my-3 border-l border-gray-400'></div>
                <div
                  onClick={() => {
                    setShowSearchLocation(false);
                    setShowSearchDateRange(false);
                    setShowSearchGuests(true);
                  }}
                  className='flex-1 p-3 flex justify-between items-center cursor-pointer relative gap-3'
                >
                  <p>Thêm khách</p>
                  <div
                    className='bg-[#FF5A5F] hover:bg-[#9e3e4e] duration-300 text-white rounded-full p-2 flex justify-center items-center'
                    onClick={() => {
                      if (diaDiem) {
                        navigate(`/roombycity/${convertToSlug(diaDiem)}`);
                        setExtendSearchBar(false);
                        setShowSearchGuests(false);
                        setShowSearchLocation(false);
                        setShowSearchDateRange(false);
                      }
                    }}
                  >
                    <FontAwesomeIcon className='h-3 w-3' icon={faSearch} />
                  </div>
                  {showSearchGuests && (
                    <div className='absolute w-[300px] top-[70px] right-0 bg-white rounded-full px-6 py-3 border-2 border-gray-300 overflow-y-auto overscroll-y-auto cursor-auto flex justify-between items-center'>
                      <div className='text-md'>Khách</div>
                      <div className='flex justify-between items-center gap-3'>
                        <button
                          onClick={() => dispatch(setSoNguoi(soNguoi - 1))}
                          className={`font-bold w-6 h-6 text-white bg-[#FF5A5F] hover:bg-[#9e3e4e] rounded-full duration-300 flex items-center justify-center ${
                            soNguoi === 1 && "cursor-not-allowed opacity-50"
                          }`}
                          disabled={soNguoi === 1}
                        >
                          <div>-</div>
                        </button>
                        <div className='text-md'>{soNguoi}</div>
                        <button
                          onClick={() => dispatch(setSoNguoi(soNguoi + 1))}
                          className='font-bold w-6 h-6 text-white bg-[#FF5A5F] hover:bg-[#9e3e4e] rounded-full duration-300 flex items-center justify-center'
                        >
                          <div>+</div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='mt-16'></div>
    </>
  );
}

Header.propTypes = {
  div2Ref: PropTypes.object,
};
