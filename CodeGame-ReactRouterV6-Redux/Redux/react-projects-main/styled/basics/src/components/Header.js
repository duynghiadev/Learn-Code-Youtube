import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import { FlexBox } from "./styled/FlexBox.styled";
import logo from "../images/logo.svg";
import convMockup from "../images/illustration-mockups.svg";
import { Button } from "./styled/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="logo" />
          <Button>Try It Free</Button>
        </Nav>

        <FlexBox>
          <FlexBox flexdirection="column" alignitems="flex-start">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </FlexBox>
          <Image src={convMockup} alt="convMockup" />
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
