import Header from "./components/Header";
import { Container } from "./components/styled/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styled/Global";
import Body from "./components/Body";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        <Body />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
