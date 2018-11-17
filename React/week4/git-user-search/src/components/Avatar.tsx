import * as React from 'react';
import styled from 'src/themes/themes';

type AvatarProps = {
  imgUrl: string;
  alt?: string;
  login?: string | React.ReactNode;
  className?: string;
  onUserClick?: () => void;
};

const Avatar: React.SFC<AvatarProps> = props => {
  return (
    <div className={props.className} onClick={props.onUserClick}>
      <img src={props.imgUrl} alt={props.alt} />
      {props.login && <h3>{props.login}</h3>}
    </div>
  );
};

Avatar.defaultProps = {
  alt: 'avatar image'
};

export const StyledAvatar = styled(Avatar)`
  width: calc(110px + 6vw);
  padding: calc(4px + 1vh) calc(4px + 0.9vw);
  cursor: pointer;

  &:hover {
    transition: var(--transition);
    box-shadow: var(--box-shadow);
  }

  & > img {
    width: 100%;
    border-radius: 50%;
  }

  & > h3 {
    font-size: calc(12px + 0.5vw);
    font-weight: normal;
    text-align: center;
    margin: calc(3px + 0.5vh) auto;
    font-style: italic;
    letter-spacing: 0.1vw;
    text-transform: capitalize;
  }
`;
