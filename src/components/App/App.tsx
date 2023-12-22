import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../ui/GlobalStyles";
import theme from "../../ui/theme";
import TopProducts from "../Main/TopProducts/TopProducts";
import HeaderMain from "../Header/HeaderMain/HeaderMain";
import FooterMain from "../Footer/FooterMain/FooterMain";
import ManufacturersMain from "../Main/Manufacturers/ManufacturersMain/ManufacturersMain";
import ReviewMain from "../Main/ReviewSlider/ReviewMain/ReviewMain";
import SocialMediaMain from "../Main/SocialMediaNews/SocialMediaMain/SocialMediaMain";
import Hero from "../Main/Hero/Hero";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeaderMain/>
      <main>
        <Hero/>
        <TopProducts/>
        <ManufacturersMain/>
        <SocialMediaMain/>
        <ReviewMain/>
      </main>
      <FooterMain/>
    </ThemeProvider>
  );
};

export default App;
