import React from "react";
import sUser from "../assets/single.png";
import dUser from "../assets/double.png";
import tUser from "../assets/triple.png";

const Card = ({ user }) => {
  let btnClass =
    "bg-brightGreen text-black hover:bg-black hover:text-brightGreen hover:border border-brightGreen";

  if (user.btnColor === "black") {
    btnClass =
      "bg-black text-brightGreen hover:bg-brightGreen hover:text-black hover:border border-black";
  }

  return (
    <div className="text-center bg-gray-100 pb-8 rounded-md cursor-pointer drop-shadow-xl hover:scale-105 duration-500">
      <img
        src={user.image}
        alt={user.type}
        className="w-20 mx-auto mt-[-30px]"
      />
      <p className="font-bold text-black text-lg p-4">{user.type}</p>
      <p className="font-bold text-black text-2xl p-6 border-b border-gray-200 md:text-3xl">
        {user.price}
      </p>
      <p className="text-black text-md p-2 border-b border-gray-200">
        {user.storage}
      </p>
      <p className="text-black text-md p-2 border-b border-gray-200">
        {user.noOfUsers}
      </p>
      <p className="text-black text-md p-2 border-b border-gray-200">
        {user.transfer}
      </p>
      <button className={"m-6 w-[200px] px-4 py-2 rounded-lg " + btnClass}>
        Start Trial
      </button>
    </div>
  );
};

const Price = () => {
  return (
    <div className="px-4 py-24 bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-y-0 md:gap-x-2">
        <Card
          user={{
            type: "Single User",
            image: sUser,
            price: "$149",
            storage: "500 GB Storage",
            noOfUsers: "1 User Allowed",
            transfer: "Send up to 2 GB",
            btnColor: "green",
            textColor: "black",
          }}
        />
        <Card
          user={{
            type: "Partnership",
            image: dUser,
            price: "$199",
            storage: "1 TB Storage",
            noOfUsers: "3 Users Allowed",
            transfer: "Send up to 10 GB",
            btnColor: "black",
            textColor: "black",
          }}
        />
        <Card
          user={{
            type: "Group Account",
            image: tUser,
            price: "$299",
            storage: "5 TB Storage",
            noOfUsers: "10 Users Allowed",
            transfer: "Send up to 20 GB",
            btnColor: "green",
            textColor: "black",
          }}
        />
      </div>
    </div>
  );
};

export default Price;
