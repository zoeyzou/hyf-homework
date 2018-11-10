import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import StyledTitleBanner from './components/TitleBanner';
import { StyledEmojiPlayground } from './EmojiPlayground/EmojiPlayground';

class App extends React.Component {
  public render() {
    return (
      <>
        <GlobalStyle />
        <StyledTitleBanner
          title={
            <>
              <span>A</span>wesome <span>G</span>ithub <span>E</span>moji{' '}
              <span>F</span>inder
            </>
          }
          subTitle={
            <>
              Find all the cool <span>emojis</span> github offers
            </>
          }
        />
        <StyledEmojiPlayground />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  :root {
    --font-title: 'Black And White Picture', sans-serif;
    --font-body: 'Black Han Sans', sans-serif;
    --dark-green: #004e66;
    --light-yellow: #fcbe32;
    --orange: #ff5f2e;
    --light-grey: #e1eef6;
  }
  body {
    background-color: var(--light-grey);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Black Han Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Black And White Picture', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

export default App;
