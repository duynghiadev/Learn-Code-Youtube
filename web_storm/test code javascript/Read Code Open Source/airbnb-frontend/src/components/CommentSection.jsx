import PropTypes from "prop-types";
import { addSpaceBeforeUppercase } from "../utils/addSpaceBeforeUppercase";
import { capitalizeString } from "../utils/capitalizeString";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { DEFAULT_NO_AVATAR } from "../constants/defaultValues";
import { convertDateTimeFormat } from "../utils/convertDateTimeFormat";

const onImageError = e => {
  e.target.src = DEFAULT_NO_AVATAR;
};

export default function CommentSection({ item }) {
  return (
    <div className='space-y-3'>
      <div className='flex items-center gap-3'>
        <div>
          <img alt='' className='w-12 h-12 rounded-full object-cover' src={item.avatar} onError={onImageError} />
        </div>
        <div>
          <p className='font-bold space-x-2'>
            <span>{addSpaceBeforeUppercase(capitalizeString(item.tenNguoiBinhLuan)).trim()}</span>
            <span className='space-x-1'>
              <FontAwesomeIcon className='w-4 h-4 text-[#FF5A5F]' icon={faStar} />
              <span className='text-black font-bold'>{item.saoBinhLuan} / 5</span>
            </span>
          </p>
          <p className='text-gray-600'>
            {convertDateTimeFormat(item.ngayBinhLuan) === null || convertDateTimeFormat(item.ngayBinhLuan).getFullYear() < 2023
              ? "tháng 10 năm 2023"
              : `tháng ${moment(convertDateTimeFormat(item.ngayBinhLuan)).format("MM")} năm ${moment(convertDateTimeFormat(item.ngayBinhLuan)).format(
                  "YYYY",
                )}`}
          </p>
        </div>
      </div>
      <div>
        <pre className='text-justify'>{item.noiDung.length > 0 ? item.noiDung : "Không nhận xét."}</pre>
      </div>
    </div>
  );
}

CommentSection.propTypes = {
  item: PropTypes.object,
};
