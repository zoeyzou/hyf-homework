import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { StyledHomePage } from './containers/HomePage';
import { StyledNavbar } from './containers/Navbar';
import GlobalStyle from './themes/globalStyles';
import { StyledProfilePage } from './containers/ProfilePage';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <GlobalStyle />
          <StyledNavbar />
          <Switch>
            <Route exact path="/" component={StyledHomePage} />
            <Route path="/profile/:id" component={StyledProfilePage} />
            <Route path="/profile" render={this.renderRedirect} />
            <Route path="/about" render={this.renderRedirect} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  private renderRedirect = () => <Redirect to="/profile/zoeyzou" />;
}

export default App;
