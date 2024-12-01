import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/timer">
        Timer Apps
      </NavLink>
      <NavLink activeClassName="active" to="/todo">
        Todo Apps
      </NavLink>
      <NavLink activeClassName="active" to="/blog">
        Blog Apps
      </NavLink>
      <NavLink activeClassName="active" to="/secret">
        Secret
      </NavLink>
    </div>
  );
};

export default Nav;
