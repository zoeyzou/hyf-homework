import * as React from 'react';
import styled, { themeColor, themeFont } from 'src/themes/themes';

type SearchInputProps = {
  value: string;
  placeholder?: string;
  className?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchInput: React.SFC<SearchInputProps> = props => {
  return (
    <div className={props.className}>
      <input
        value={props.value}
        onChange={props.changeHandler}
        onKeyUp={props.enterHandler}
        placeholder={props.placeholder}
      />
    </div>
  );
};
SearchInput.defaultProps = {
  placeholder: 'Type in the search keyword'
};

export const StyledSearchInput = styled(SearchInput)`
  width: 100%;
  display: flex;
  justify-content: center;

  & > input {
    width: calc(150px + 30vw);
    padding: calc(3px + 1vh) calc(6px + 1vw);
    border: 1px solid ${themeColor.blue};
    background-color: ${themeColor.lightBlue};
    box-shadow: var(--box-shadow-sm);
    font-family: ${themeFont.text};
    border-radius: 3px;

    &::placeholder {
      color: ${themeColor.lightGrey};
      font-style: italic;
    }
  }
`;
