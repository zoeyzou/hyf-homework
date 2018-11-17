import { createGlobalStyle, themeFont } from './themes';

const GlobalStyle = createGlobalStyle`
  :root {
    --transition: all .2s ease-out;
    --box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    --box-shadow-sm: 0 2px 4px rgba(0, 0, 0, .16);
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${themeFont.text};
  }
  *::before, *::after {
    box-sizing: border-box;
  }
  h1, h2 {
    font-family: ${themeFont.title};
  }
  h1, h2, h3, h4, h5, h6, p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
