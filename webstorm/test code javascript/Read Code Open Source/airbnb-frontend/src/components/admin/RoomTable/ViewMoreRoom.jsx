import React from "react";

const ViewMoreRoom = () => {
  return (
    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
      <a className=" group hover:text-primary " href="./admin/room">
        <span className=" group-hover:underline">Xem thêm</span> →
      </a>
    </span>
  );
};

export default ViewMoreRoom;
