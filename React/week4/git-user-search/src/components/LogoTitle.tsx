import * as React from 'react';
import styled, { themeColor, themeFont } from 'src/themes/themes';

type LogoTitleProps = {
  title: string;
  className?: string;
};

const LogoTitle: React.SFC<LogoTitleProps> = props => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
    </div>
  );
};

export const StyledLogoTitle = styled(LogoTitle)`
  padding: calc(5px + 1vh) calc(10px + 2vw);
  display: flex;
  justify-content: center;

  & > * {
    font-size: calc(2em + 2vw);
    letter-spacing: 0.4vw;
    color: ${themeColor.purple};
    font-family: ${themeFont.title};
    font-weight: bold;
  }
`;
