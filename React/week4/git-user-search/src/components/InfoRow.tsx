import * as React from 'react';
import styled, { themeColor } from 'src/themes/themes';

type InfoRowProps = {
  propName: string;
  propValue: number | string;
  isSelected: boolean;
  clickHandler?: () => void;
  className?: string;
};

const InfoRow: React.SFC<InfoRowProps> = props => {
  return (
    <div className={props.className} onClick={props.clickHandler}>
      <h3>{props.propName}:</h3>
      <p>{props.propValue}</p>
      {props.isSelected && (
        <img src="https://img.icons8.com/windows/96/000000/pin.png" />
      )}
    </div>
  );
};

export const StyledInfoRow = styled(InfoRow)`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  padding: calc(5px + 1vh) calc(5px + 3vw);
  border-bottom: calc(1px + 0.1vw) solid ${themeColor.blue};
  cursor: pointer;

  & > h3 {
    flex: 1 1 calc(40%);
    text-align: right;
    padding: 0 calc(5px + 5vw);
  }

  & > p {
    flex: 1 1 calc(40%);
    padding: 0 calc(5px + 5vw);
  }

  & > img {
    position: absolute;
    right: calc(10px + 10vw);
    width: calc(16px + 1vw);
    height: calc(16px + 1vw);
    display: inline-block;
  }
`;
