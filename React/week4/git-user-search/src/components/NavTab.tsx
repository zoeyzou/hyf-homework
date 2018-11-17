import * as H from 'history';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { themeColor } from 'src/themes/themes';

type NavTabProps = {
  name: string;
  path: H.LocationDescriptor;
  className?: string;
};

const activeClassName = 'active';

export const NavTab: React.SFC<NavTabProps> = props => {
  console.log();
  return (
    <NavLink
      exact
      to={props.path}
      activeClassName={activeClassName}
      className={props.className}
    >
      {props.name}
    </NavLink>
  );
};

export const StyledNavTab = styled(NavTab).attrs({
  activeClassName
})`
  color: ${themeColor.lightBlue};
  font-size: calc(12px + 1vw);
  padding: calc(2px + 0.3vw) calc(4px + 0.6vw);
  margin: 0 calc(5px + 0.5vw);
  border-radius: 3px;

  &:hover,
  &.${activeClassName} {
    color: ${themeColor.blue};
    background-color: ${themeColor.lightBlue};
    transition: var(--transition);
  }
`;
