import * as React from 'react';
import styled from '../theme';

type CardProps = {
  className?: string;
  height?: string;
  width?: string;
  minWidth?: string;
  margin?: string;
  padding?: string;
  flexDirection?: 'row' | 'column';
};

const Card: React.SFC<CardProps> = props => {
  return <div className={props.className}>{props.children}</div>;
};

export const StyledCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 2px;
  height: auto;
  width: ${props => props.width || 'calc(100% - 80px)'};
  min-width: ${props => props.minWidth};
  padding: ${props => props.padding || '16px'};
  margin: ${props => props.margin || '16px'};
  position: relative;

  @media (max-width: 500px) {
    width: ${props => props.minWidth || '100%'};
    padding: 5px;
    margin: 10px;
  }
`;

export const StyledCardWithShadow = styled(StyledCard)`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const StyledCardWithHoverShadow = styled(StyledCard)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

// export const StyledBorderedCard = styled(StyledCard)`

// `;
