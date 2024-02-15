import React from "react";
import { StyledFooter } from "./styled/Footer.styled";
import { Container } from "./styled/Container.styled";
import footerLogo from "../images/logo_white.svg";
import { FlexBox } from "./styled/FlexBox.styled";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src={footerLogo} alt="footer-logo" />
        <FlexBox flexdirection="row">
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">What We Do</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <SocialIcons />
        </FlexBox>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
