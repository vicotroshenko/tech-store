import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../ui/GlobalStyles";
import theme from "../../ui/theme";
import FooterMain from "../Footer/FooterMain/FooterMain";
import FooterLinkList from "../Footer/FooterLinkList/FooterLinkList";
//import CardItem from "../ProductCard/CardItem/CardItem";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        {/* <ul>
          <CardItem/>
        </ul> */}
        <FooterMain>
          <FooterLinkList/>
        </FooterMain>
      </main>
    </ThemeProvider>
  );
};

export default App;
