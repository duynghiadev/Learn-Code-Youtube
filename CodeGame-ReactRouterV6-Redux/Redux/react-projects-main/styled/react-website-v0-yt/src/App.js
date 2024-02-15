import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { PageContainer } from "./components/styled/Container.styled";
import { GlobalStyle } from "./components/styled/global";
import PricingFeature from "./components/PricingFeature";

const App = () => {
  const theme = {
    colors: {
      blue: "#6746fd",
      grey: "#656363",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <NavBar />
        <Home />
      </PageContainer>
      <PricingFeature />
    </ThemeProvider>
  );
};

export default App;
