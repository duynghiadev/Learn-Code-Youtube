import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchPlaces({ onClick }) {
  return (
    <div className='hidden lg:block bg-white w-1/2 rounded-full border-[1px] border-gray-300' onClick={onClick}>
      <div className='flex'>
        <div className='flex-1 p-1.5 flex justify-center items-center cursor-pointer'>
          <p>Địa điểm bất kỳ</p>
        </div>
        <div className='my-3 border-l border-gray-400'></div>
        <div className='flex-1 p-1.5 flex justify-center items-center cursor-pointer'>
          <p>Tuần bất kỳ</p>
        </div>
        <div className='my-3 border-l border-gray-400'></div>
        <div className='flex-1 p-1.5 flex justify-center items-center cursor-pointer group gap-3'>
          <p>Thêm khách</p>
          <div className='bg-[#FF5A5F] group-hover:bg-[#9e3e4e] duration-300 text-white rounded-full p-2 flex justify-center items-center'>
            <FontAwesomeIcon className='h-3 w-3' icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

SearchPlaces.propTypes = {
  onClick: PropTypes.func.isRequired,
};
