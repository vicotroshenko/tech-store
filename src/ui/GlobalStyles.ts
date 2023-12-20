import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  
	* {
    box-sizing: border-box;
  }
  *::before,
  *::after {
    margin: 0;
		padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: 300;
		color: "#000";
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
