import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/"> Home </Link>
        <Link to="/dogs"> Dogs </Link>
        <Link to="/checkout"> My Cart </Link>
      </nav>
    </>
  );
};

export default NavBar;
