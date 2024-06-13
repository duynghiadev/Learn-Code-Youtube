import React from "react";
import PopupRoomPhoto from "./PopupRoomPhoto";
import PopupRoomInfo from "./PopupRoomInfo";
import DeleteRoomButton from "../Button/Delete/Room/DeleteRoomButton";
import UpdateRoomButton from "../Button/Update/Room/UpdateRoomButton";

const Room = ({ room, index, fetch, viTri, locations }) => {
  return (
    <tr className="text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 relative cursor-pointer group">
      <td className="px-4 py-3 text-sm">{room.id}</td>
      <td className="px-4 py-3 text-sm ">{room.tenPhong}</td>

      <td className="px-4 py-3 text-sm">
        {room.giaTien} <b>$</b>
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="w-[20px] h-[20px] leading-[20px] rounded-full text-center font-bold bg-primary text-white relative cursor-pointer group/item ">
          !
          <PopupRoomInfo room={room} index={index} />
        </div>
      </td>

      <td className="px-4 py-3 text-sm">{viTri}</td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-4 text-sm">
          <UpdateRoomButton room={room} fetch={fetch} locations={locations} />
          <DeleteRoomButton room={room} fetch={fetch} />
        </div>
      </td>
      <PopupRoomPhoto photo={room.hinhAnh} index={index} />
    </tr>
  );
};

export default Room;
