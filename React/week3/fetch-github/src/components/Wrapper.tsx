import * as React from 'react';
import styled from 'src/theme';

type WrapperProps = {
  className?: string;
  width?: string;
  marginTop?: number;
};

const Wrapper: React.SFC<WrapperProps> = props => (
  <div className={props.className}>{props.children}</div>
);

export const StyledWrapper = styled(Wrapper)`
  width: ${props => props.width || '100%'};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  margin-top: ${props => props.marginTop || 16}px;
`;
