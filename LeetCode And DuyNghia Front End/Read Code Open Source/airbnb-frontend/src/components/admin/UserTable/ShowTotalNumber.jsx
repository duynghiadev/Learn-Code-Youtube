import React from "react";

const ShowTotalNumber = ({ totalUsers, userFrom }) => {
  return (
    <span className="flex items-center col-span-3">
      Showing {(userFrom - 1) * 10 + 1}-
      {totalUsers - (userFrom - 1) * 10 + 1 <= 10 ? totalUsers : userFrom * 10}{" "}
      of {totalUsers}
    </span>
  );
};

export default ShowTotalNumber;
