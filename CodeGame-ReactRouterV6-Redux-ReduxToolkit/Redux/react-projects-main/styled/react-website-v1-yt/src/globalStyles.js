import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media (max-width: 968px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  background-color: ${({ $primary }) => ($primary ? "#4B59F7" : "#0467FB")};
  padding: ${({ $big }) => ($big ? "12px 64px" : "10px 20px")};
  font-size: ${({ $fontBig }) => ($fontBig ? "1.25rem" : "1rem")};
  color: #fff;
  border-radius: 0.25rem;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
  }

  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;

export default GlobalStyle;
