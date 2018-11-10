import * as React from 'react';
import styled, { IThemeColor } from '../theme';

type TitleBannerProps = {
  title: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  width?: string;
  color?: IThemeColor;
  bgColor?: IThemeColor;
  className?: string;
  fontSize?: number;
};

const TitleBanner: React.SFC<TitleBannerProps> = props => {
  return (
    <div className={props.className}>
      <h1 className="title">{props.title}</h1>
      <p className="subTitle">{props.subTitle}</p>
    </div>
  );
};

const StyledTitleBanner = styled(TitleBanner)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  width: ${props => props.width || '100%'};
  color: ${props => props.color || IThemeColor.lightGrey};
  background-color: ${props => props.bgColor || IThemeColor.darkGreen};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  padding: 20px 10px;

  & > * {
    text-align: center;
  }

  .title {
    text-transform: capitalize;
    font-size: ${props => props.fontSize || 40}px;
    letter-spacing: 1px;
    margin-top: ${props => props.fontSize || 40}px;
    margin-bottom: ${props => props.fontSize || 10}px;

    span {
      color: var(--light-yellow);
    }
  }

  .subTitle {
    font-size: ${props => (props.fontSize && props.fontSize * 0.5) || 20}px;
    span {
      color: var(--light-yellow);
    }
  }
`;

export default StyledTitleBanner;
