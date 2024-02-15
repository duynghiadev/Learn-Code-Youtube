import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const MenuItem = (props) => {
  const { setIsMobileMenuOpen } = useContext(AppContext);

  const { icon, path, text } = props;
  return (
    <li>
      <Link
        to={path}
        className="flex flex-row gap-2 items-center"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {icon}
        <h2 className="text-2xl">{text}</h2>
      </Link>
    </li>
  );
};

export default MenuItem;
