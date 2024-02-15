import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import { Link, NavLink } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101522;
  position: sticky;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;
`;

export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const NavLogo = styled(Link)`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
`;

export const NavIcon = styled(FaMagento)``;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuItem = styled.li``;

export const NavMenuLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;

  &.active {
    border-bottom: 1px solid #fff;
  }
`;

export const NavBtnLink = styled(NavLink)`
  align-self: center;
`;

// Mobile Menu
export const MobileMenuIconContainer = styled.div`
  display: none;
  cursor: pointer;
  align-self: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  left: ${(props) => (props.$isMobileMenuOpen ? "0" : "-100%")};
  transition: all 0.5s ease;
  background: #101522;
  padding: 1rem;

  @media screen and (min-width: 768.1px) {
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
  }
`;
