import React, { useCallback, useRef, useState } from "react";
import {
  MobileMenu,
  MobileMenuContainer,
  MobileMenuIconContainer,
  Nav,
  NavBarContainer,
  NavBtnLink,
  NavIcon,
  NavLogo,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
} from "./NavBar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { Button } from "../../globalStyles";
import useEventListener from "../../hooks/useEventListener";

const NavBar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  const closeMobileMenu = useCallback((e) => {
    if (e.target.nodeName.toLowerCase() === "a") {
      setisMobileMenuOpen(false);
    }
  }, []);

  useEventListener("click", closeMobileMenu, mobileMenuRef);

  return (
    <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <NavMenu>
            <NavMenuItem>
              <NavMenuLink to="/">Home</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/services">Services</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/products">Products</NavMenuLink>
            </NavMenuItem>
            <NavBtnLink to="/sign-up">
              <Button>SIGN UP</Button>
            </NavBtnLink>
          </NavMenu>

          {/* Mobile Menu */}
          <MobileMenuIconContainer
            onClick={() => setisMobileMenuOpen((val) => !val)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuIconContainer>

          <MobileMenuContainer
            $isMobileMenuOpen={isMobileMenuOpen}
            data-testid="mobile-menu"
            ref={mobileMenuRef}
          >
            <MobileMenu>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Prodcuts</NavLink>
              </li>
              <li>
                <Button as={"a"} $primary $big $fontBig>
                  SIGN UP
                </Button>
              </li>
            </MobileMenu>
          </MobileMenuContainer>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default NavBar;
