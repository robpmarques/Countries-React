import React from 'react';
import styled from  'styled-components';

const StyledText = styled.h1`
    color: ${props => props.theme.text};
    margin: ${props => props.noMargin ? '0px' : ''};
`;

const Text = ({src, ...props}) => {

  return (
      <StyledText {...props}>{props.children}</StyledText>
  );
}

export default Text;