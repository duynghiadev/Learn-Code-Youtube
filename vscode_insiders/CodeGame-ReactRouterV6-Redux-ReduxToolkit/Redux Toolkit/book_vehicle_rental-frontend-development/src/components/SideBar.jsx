import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink, Link } from 'react-router-dom';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { BiLogOutCircle } from 'react-icons/bi';
import { logoutUser } from '../redux/slices/userSlice';
import Logo from '../assets/Screenshot from 2023-07-16 12-04-49.png';

const SideBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success('Logout Successful!');
  };

  return (
    <div className="drawer-side shadow" style={{ zIndex: 9999 }}>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <label htmlFor="my-drawer-2" className="drawer-overlay" />
      <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content flex flex-col justify-between">
        <div>
          <div className="mb-28">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          {/* Sidebar content here */}
          <div className="shadow py-3">
            <NavLink to="/" className="p-3 text-xl rounded-none shadow-sm w-full hover:bg-[#97bf0f]">VEHICLES</NavLink>
          </div>
          <div className="shadow py-3">
            <NavLink to="/reservations" className="p-3 text-xl rounded-none hover:bg-[#97bf0f] w-full">MY RESERVATIONS</NavLink>
          </div>
          <div className="shadow py-3">
            <NavLink to="/reserve-vehicle" className="p-3 text-xl rounded-none hover:bg-[#97bf0f] w-full">RESERVE</NavLink>
          </div>
          <div className="shadow py-3">
            <NavLink to="/add-vehicle" className="p-3 text-xl rounded-none hover:bg-[#97bf0f] w-full">ADD VEHICLE</NavLink>
          </div>
          <div className="shadow py-3">
            <NavLink to="/remove-vehicle" className="p-3 text-xl rounded-none hover:bg-[#97bf0f] w-full">REMOVE VEHICLE</NavLink>
          </div>
          <br />
          <br />
          <Link to="/register" className="flex justify-center items-center">
            <button
              type="button"
              onClick={handleLogout}
              className=" btn flex text center p-1 pl-4 w-2/3 gap-2 hover:border-xl  hover:text-white  hover:bg-red-500 shadow bg-red-100 text-red-500"
            >
              Logout
              <BiLogOutCircle className="text-3xl" />
            </button>
          </Link>
        </div>
        <div className="grid  gap-4 ">
          <span className="flex gap-4">
            <BsTwitter className="text-xl" />
            <FaFacebookF className="text-xl" />
            <FcGoogle className="text-xl" />
            <TfiMicrosoftAlt className="text-xl" />
            <BsWhatsapp className="text-xl" />
          </span>
          <span className="text-sm font-bold">
            &copy;
            {' '}
            <small>Vehicle Booking</small>
          </span>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
