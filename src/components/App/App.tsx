import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../ui/GlobalStyles";
import theme from "../../ui/theme";
import HeaderMain from "../Header/HeaderMain/HeaderMain";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        {/* <ul>
          <CardItem/>
        </ul> */}
        <HeaderMain/>
      </main>
    </ThemeProvider>
  );
};

export default App;
