import React from "react";
import styled from "styled-components";
import Button from "./styled/Button";

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 50px;
`;

const TitleAndLinks = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
    text-decoration: underline crimson;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      color: gray;
      margin-left: 2rem;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarStyled>
      <TitleAndLinks>
        <h1>Agency</h1>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </TitleAndLinks>
      <Button bordercolor="white" borderwidth="2px">
        JOIN TODAY
      </Button>
    </NavBarStyled>
  );
};

export default NavBar;
