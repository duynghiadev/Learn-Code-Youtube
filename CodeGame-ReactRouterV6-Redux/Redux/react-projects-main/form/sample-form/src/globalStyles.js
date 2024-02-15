import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: #fff;
    background-color: #000;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin-inline: auto;
  padding: 30px;

  @media (max-width: 968px) {
    padding: 15px;
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
    background-color: ${({ $primary }) => ($primary ? "#0467FB" : "#4B59F7")};
  }

  &:disabled {
    background: gray;
    color: #e1e1e1;
  }

  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;

export default GlobalStyle;
