import * as React from 'react';
import styled, { keyframes, themeColor } from 'src/themes/themes';

type LoaderProps = {
  className?: string;
};

const Loader: React.SFC<LoaderProps> = props => (
  <div className={props.className}>
    <div />
  </div>
);

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledTripleLoader = styled(Loader)`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  & > div {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin-right: 3em;
    font-size: 10px;
    width: 6em;
    height: 6em;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${themeColor.blue};
    animation: ${spin} 2s linear infinite;

    &:before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: ${themeColor.lightGrey};
      animation: ${spin} 3s linear infinite;
    }

    &:after {
      content: '';
      position: absolute;
      top: 12px;
      left: 12px;
      right: 12px;
      bottom: 12px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: ${themeColor.purple};
      animation: ${spin} 1.5s linear infinite;
    }
  }
`;
