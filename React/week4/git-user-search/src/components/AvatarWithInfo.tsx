import * as React from 'react';
import { StyledAvatar } from './Avatar';
import styled, { themeColor } from 'src/themes/themes';

type AvatarWithInfoProps = {
  name: string;
  imgUrl: string;
  forHire: boolean;
  location?: string;
  bio?: string;
  className?: string;
};

const StyledHireTag = styled('div')`
  position: absolute;
  text-transform: uppercase;
  background-color: ${themeColor.blue};
  color: ${themeColor.white};
  box-shadow: var(--box-shadow-sm);
  border-radius: 3px;
  padding: calc(2px + 0.3vw) calc(4px + 0.3vw);
  font-weight: bold;
  font-size: calc(10px + 0.6vw);
  right: calc(5px + 0.5vw);
`;

const StyledUserDetails = styled('div')`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  & > * {
    font-style: italic;
    text-align: center;
  }

  & > h3 {
    font-size: calc(14px + 0.5vw);
    padding: calc(5px + 0.5vw) 0;

    & > img {
      width: calc(16px + 1vw);
      height: calc(16px + 1vw);
      display: inline-block;
      margin: 0 0 0 calc(3px + 0.5vw);
    }
  }

  & > p {
    color: ${themeColor.grey};
  }
`;

const AvatarWithInfo: React.SFC<AvatarWithInfoProps> = props => {
  return (
    <div className={props.className}>
      {props.forHire && <StyledHireTag>For hire</StyledHireTag>}
      <StyledAvatar imgUrl={props.imgUrl} />
      <StyledUserDetails>
        <h3>
          {props.name},
          <img src="https://img.icons8.com/ios/96/000000/marker.png" />
          {props.location}
        </h3>
        <p>"{props.bio}"</p>
      </StyledUserDetails>
    </div>
  );
};

AvatarWithInfo.defaultProps = {
  location: 'Mystery',
  bio: 'This person has nothing to say'
};

export const StyledAvatarWithInfo = styled(AvatarWithInfo)`
  position: relative;
  margin: calc(10px + 6vh) calc(5px + 10vw) calc(10px + 3vh);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;
