import React from 'react';
import styled from  'styled-components';

export const StyledSelect = styled.select`

width: 100%;
height: 100%;
padding: 15px 20px;
border-radius: 5px;
border: 0;
-moz-appearance:none;
-webkit-appearance:none;
color: ${props => props.theme.text};
appearance:none;
background-color: ${props => props.theme.primary};

`;

const Select = ({...props}) => (
    <StyledSelect value={props.select} onChange={(e) => props.selectChange(e)} placeholder={props.placeholder}>
        ${props.children}
    </StyledSelect>
)

export default Select;