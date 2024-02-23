import React from "react";
import styled from "styled-components";
import LogoImg from "../images/logo.png";

const NavBarStyled = styled.nav`
  height: 50px;
  max-width: 1050px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 100%;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const MenuItem = styled.li`
  color: white;
`;

const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo src={LogoImg} alt="logo" />
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </NavBarStyled>
  );
};

export default NavBar;
