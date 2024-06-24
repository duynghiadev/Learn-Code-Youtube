import React from "react";

const ShowtotalRoomNumber = ({ rooms, roomFrom }) => {
  return (
    <span className="flex items-center col-span-3">
      Showing {(roomFrom - 1) * 10 + 1}-
      {rooms?.length - (roomFrom - 1) * 10 + 1 < 10
        ? rooms?.length
        : roomFrom * 10}{" "}
      of {rooms?.length}
    </span>
  );
};

export default ShowtotalRoomNumber;
