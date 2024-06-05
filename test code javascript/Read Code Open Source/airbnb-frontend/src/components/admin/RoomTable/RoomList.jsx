import React, { useEffect, useState } from "react";
import { locationServ, roomServ } from "../../../api/api";
import Room from "./Room";
import ViewMoreRoom from "./ViewMoreRoom";
import { useLocation } from "react-router-dom";
import PaginationRoomList from "./PaginationRoomList";
import ShowtotalRoomNumber from "./ShowtotalRoomNumber";
import { useSelector } from "react-redux";

const RoomList = () => {
  const { pathname } = useLocation();

  const [rooms, setRooms] = useState(null);
  const [locations, setLocations] = useState(null);
  let [roomFrom, setRoomFrom] = useState(1);

  const { reload } = useSelector((state) => state.roomSlice);

  const fetch = () => {
    roomServ
      .getAllRooms()
      .then((result) => {
        setRooms(result.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchLocation = () => {
    locationServ
      .getAllLocations()
      .then((result) => {
        setLocations(result.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch();
  }, [reload]);

  useEffect(() => {
    fetchLocation();
  }, []);

  const selectPaginationRoom = (number) => {
    setRoomFrom(number);
  };

  const selectPaginationRoomNextPrev = (number) => {
    if (
      (roomFrom === 1 && number === -1) ||
      (roomFrom === Math.ceil(rooms?.length / 10) && number === 1)
    ) {
      return null;
    }
    const num = (roomFrom += number);
    setRoomFrom(num);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Tên phòng</th>
              <th className="px-4 py-3">Giá tiền</th>
              <th className="px-4 py-3">Thông tin</th>
              <th className="px-4 py-3">Vị trí</th>
              <th className="px-4 py-3">Thao Tác</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {rooms
              ?.slice((roomFrom - 1) * 10, roomFrom * 10)
              .map((room, index) => {
                let viTri = "";
                locations?.map((item) => {
                  if (item.id === room.maViTri) {
                    viTri = item.tenViTri;
                  }
                });
                return (
                  <Room
                    room={room}
                    index={index}
                    key={index}
                    fetch={fetch}
                    viTri={viTri}
                    locations={locations}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
        <ShowtotalRoomNumber rooms={rooms} roomFrom={roomFrom} />
        <span className="col-span-2"></span>
        {/* <!-- Pagination --> */}
        {pathname === "/admin" ? (
          <ViewMoreRoom />
        ) : (
          <PaginationRoomList
            roomFrom={roomFrom}
            rooms={rooms}
            selectPaginationRoom={selectPaginationRoom}
            selectPaginationRoomNextPrev={selectPaginationRoomNextPrev}
          />
        )}
      </div>
    </div>
  );
};

export default RoomList;
