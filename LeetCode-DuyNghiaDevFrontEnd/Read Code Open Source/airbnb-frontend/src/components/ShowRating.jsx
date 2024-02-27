import PropTypes from "prop-types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowRating({ trungBinhRating, binhLuanRef, ratingLength }) {
  return (
    <span className='space-x-2'>
      <FontAwesomeIcon className='w-4 h-4 text-[#FF5A5F]' icon={faStar} />
      <span className='text-black font-bold'>{trungBinhRating}</span>
      <span
        onClick={() => binhLuanRef.current.scrollIntoView({ behavior: "smooth" })}
        className='underline cursor-pointer text-gray-600 hover:text-[#FF5A5F] duration-300'
      >
        ({ratingLength}) đánh giá
      </span>
    </span>
  );
}

ShowRating.propTypes = {
  trungBinhRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  binhLuanRef: PropTypes.object,
  ratingLength: PropTypes.number,
};
