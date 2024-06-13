import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Raleway&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  p {
    color: #656363
  }
`;
