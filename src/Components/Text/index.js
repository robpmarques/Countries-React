import React from 'react';
import styled from  'styled-components';

const StyledText = styled.p`
    margin: ${props => props.borderMargin ? '0 5px 10px 0' : ''};
    margin: ${props => props.noMargin ? '0' : ''};
    font-weight: ${props => props.bold ? 'bold' : ''};
    color: ${props => props.theme.text};
    display: ${props => props.inlineBlock ? 'inline-block' : 'block'};
    
    @media (max-width: 500px) {
        width: ${props => props.width ? '100%' : ''};
    }
`;

const Text = ({...props}) => {

  return (
      <StyledText
        bold={props.bold} 
        margin={props.borderMargin} 
        noMargin={props.noMargin} 
        inlineBlock={props.inlineBlock} 
        width={props.maxWidth}>
        {props.children}
        </StyledText>
  );
}

export default Text;