import * as React from 'react';
import styled from 'src/theme';

interface InputProps {
  value: string;
  className?: string;
  padding?: string;
  margin?: string;
  onSearchChange: (value: string) => void;
}

class Input extends React.Component<InputProps, any> {
  private changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchChange(e.target.value);
  };

  public render() {
    const { className, value } = this.props;
    return (
      <div className={className}>
        <label>Get your favorite: </label>
        <input type="text" onChange={this.changeHandler} value={value} />
      </div>
    );
  }
}

const StyledSearchInput = styled(Input)`
  margin: ${props => props.margin || '10px'};
  display: flex;
  align-items: center;

  & > * {
    display: inline-block;
    margin: 0 5px;
  }

  & > input {
    border-radius: 2px;
    border: none;
    padding: ${props => props.padding || '5px 3px'};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;

export default StyledSearchInput;
