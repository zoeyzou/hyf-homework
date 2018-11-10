import * as React from 'react';
import { StyledCardWithHoverShadow } from 'src/components/Card';
import styled from 'src/theme';

type EmojiCardProps = {
  name: string | undefined;
  url: string | undefined;
};

const EmojiCard: React.SFC<EmojiCardProps> = props => {
  return (
    <StyledCardWithHoverShadow
      flexDirection="column"
      width="calc(100% / 8)"
      minWidth="100px"
    >
      <StyledImg src={props.url} />
      <StyledP>{props.name}</StyledP>
    </StyledCardWithHoverShadow>
  );
};

const StyledImg = styled.img`
  display: inline-block;
  width: 45px;
  padding: 5px;
`;

const StyledP = styled.p`
  font-size: 10px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 5px;
  color: var(--dark-green);
`;

export default EmojiCard;
