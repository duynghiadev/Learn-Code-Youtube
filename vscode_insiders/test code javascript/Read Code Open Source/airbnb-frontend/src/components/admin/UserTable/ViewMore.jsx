import React from "react";

const ViewMore = () => {
  return (
    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
      <a className=" group hover:text-primary " href="./admin/user">
        <span className=" group-hover:underline">Xem thêm</span> →
      </a>
    </span>
  );
};

export default ViewMore;
