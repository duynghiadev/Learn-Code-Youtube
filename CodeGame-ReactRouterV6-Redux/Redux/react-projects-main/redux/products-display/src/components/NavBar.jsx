import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-white z-5 border border-b-gray-400">
      <div className="max-w-[1200px] mx-auto px-2 py-4">
        <h1 className="text-3xl text-black font-bold">
          <Link to="/">Store</Link>
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
