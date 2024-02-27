import React from "react";

const PopupRoomPhoto = ({ photo, index }) => {
  return (
    <td
      className={`hidden absolute z-20 left-[80px] ${
        index >= 2 ? "top-[-137px]" : "bottom-[-137px]"
      } bg-bg-popup px-[10px] py-[20px] rounded-[5px] w-[300px] h-[145px]  group-hover:block `}
    >
      <img
        src={photo}
        className="w-[280px] h-[97px] object-cover"
        alt="Hình ảnh minh hoạ"
      />
    </td>
  );
};

export default PopupRoomPhoto;
