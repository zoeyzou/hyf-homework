import * as React from 'react';
import styled, { IThemeColor } from '../theme';

type StandardButtonProps = {
  label: string;
  clickHandler: () => void;
  className?: string;
  bgColor?: IThemeColor;
  color?: IThemeColor;
  width?: string;
  disabled?: boolean;
};

export const StandardButton: React.SFC<StandardButtonProps> = props => {
  return (
    <button
      className={props.className}
      type="button"
      onClick={props.clickHandler}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export const StyledButton = styled(StandardButton)`
  display: block;
  width: ${props => props.width || '100%'};
  min-width: 200px;
  background-color: ${props => props.bgColor || IThemeColor.orange};
  color: ${props => props.color || IThemeColor.lightGrey};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 10px 5px;
  font-size: 1.2em;
  border-radius: 3px;
  border: none;
  transition: all 0.1s ease-in;
  outline: var(--dark-green);

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
