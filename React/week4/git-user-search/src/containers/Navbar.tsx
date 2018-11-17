import * as React from 'react';
import styled, { themeColor } from 'src/themes/themes';
import { StyledNavTab } from '../components/NavTab';

export type NavbarProps = {
  className?: string;
};

class Navbar extends React.Component<NavbarProps, {}> {
  // matchActivePath = () => {

  // }

  public render() {
    return (
      <nav className={this.props.className}>
        <StyledNavTab name="Home" path="/" />
        <StyledNavTab name="Profile" path="/profile" />
        <StyledNavTab name="About" path="/about" />
      </nav>
    );
  }
}

export const StyledNavbar = styled(Navbar)`
  display: flex;
  justify-content: flex-end;
  padding: calc(5px + 1.5vh) calc(10px + 3vw);
  background-color: ${themeColor.blue};
  box-shadow: var(--box-shadow);
`;
