import React from 'react';
import styled from  'styled-components';

const StyledText = styled.h1`
    margin: ${props => props.margin};
    color: ${props => props.theme.text};
    font-size: ${props => props.fontSize};
`;

const Text = ({src, ...props}) => {

  return (
      <StyledText margin={props.margin} fontSize={props.fontSize}>{props.children}</StyledText>
  );
}

export default Text;