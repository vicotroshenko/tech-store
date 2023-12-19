import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../ui/GlobalStyles";
import theme from "../../ui/theme";
import FooterMain from "../Footer/FooterMain/FooterMain";
//import CardItem from "../ProductCard/CardItem/CardItem";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        {/* <ul>
          <CardItem/>
        </ul> */}
        <FooterMain/>
      </main>
    </ThemeProvider>
  );
};

export default App;
