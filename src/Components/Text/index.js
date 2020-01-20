import React from 'react';
import styled from  'styled-components';

const StyledText = styled.p`
    color: ${props => props.theme.text};
`;

const Text = ({...props}) => (
      <StyledText {...props}></StyledText>
)

export default Text;