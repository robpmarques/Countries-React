import React from 'react';
import styled from  'styled-components';

export const StyledInput = styled.input`
border: 0;
width: 100%;
border-radius: 5px;
color: ${props => props.theme.text};
padding: 15px 0px 15px 50px;
box-shadow: 0px 0px 3px -2px ${props => props.theme.text};
background-color: ${props => props.theme.primary};

&::placeholder {
    color: ${props => props.theme.text};
}
`;

const Input = ({...props}) => (
    <StyledInput value={props.input} onChange={(e) => props.inputChange(e)} {...props} />
)

export default Input;