import React, { useContext } from "react";
import styled from "styled-components";
import logoImage from "../../assets/images/logo.png";
import deliveryImage from "../../assets/images/delivery.svg";
import Vector from "../../assets/images/Vector.png";
import Vector2 from "../../assets/images/Vector2.png";
import ServiceBtn from "../Buttons/Service";
import InputSearch from "../Input/Search";
import { ThemeContext } from "../../App";
import { EnvironmentOutlined } from "@ant-design/icons";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme, "Header");
  return (
    <Wrapper>
      <Container>
        <Logo src={logoImage} />
        <InputSearch />
        <Services>
          <ServiceBtn image={""} title1="Gọi mua hàng" title2="1800.2097" />
        </Services>
        <Services>
          <ServiceBtn
            image={deliveryImage}
            title1="Cửa hàng gần bạn"
            title2="1800.2097"
          />
        </Services>
        <Services>
          <ServiceBtn
            image={Vector}
            title1="Tra cứu đơn hàng"
            title2="1800.2097"
          />
        </Services>
        <Services>
          <ServiceBtn image={Vector2} title1="Giỏ hàng" title2="1800.2097" />
        </Services>
        {/* <ThemeButton
          theme={theme}
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </ThemeButton> */}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #d70018;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-right: 60px;
`;

const Search = styled.input`
  height: 36px;
  border-radius: 10px;
  border: none;
  min-width: 500px;
`;
const Services = styled.a`
  display: flex;
  margin-left: 20px;
`;

const Service = styled.div`
  display: flex;
`;
const ThemeButton = styled.div`
  display: flex;
  width: 30px;
  color: ${(props) => (props.theme === "dark" ? "#001529" : "white")};
  cursor: pointer;
`;

export default Header;
