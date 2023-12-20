import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../ui/GlobalStyles";
import theme from "../../ui/theme";
import ReviewItem from "../ReviewSlider/ReviewItem/ReviewItem";
//import CardItem from "../ProductCard/CardItem/CardItem";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        {/* <ul>
          <CardItem/>
        </ul> */}
        <ReviewItem/>
      </main>
    </ThemeProvider>
  );
};

export default App;
