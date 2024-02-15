import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styled/SocialIconsStyled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <a href="https://www.twitter.com" target="_blank">
        <FaTwitter />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
