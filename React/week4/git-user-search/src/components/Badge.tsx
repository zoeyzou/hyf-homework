import * as React from 'react';
import styled, { themeColor } from 'src/themes/themes';

interface BadgeProps {
  name: string;
  className?: string;
}

const Badge: React.SFC<BadgeProps> = props => {
  return <div className={props.className}>{props.name}</div>;
};

export const StyledBadge = styled(Badge)`
  font-size: calc(10px + 1vw);
  color: ${themeColor.purple};
  border: calc(1px + 0.5vw) solid ${themeColor.purple};
  border-radius: calc(10px + 1vw);
  padding: calc(3px + 0.3vw) calc(5px + 0.5vw);
  margin: calc(3px + 0.3vw) calc(5px + 0.5vw);
`;
