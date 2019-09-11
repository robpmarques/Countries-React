import React from 'react';
import * as Styled from './styles';

const Button = ({ ...props }) => {

    return (
        <Styled.Button {...props}>{props.children}</Styled.Button>
    )
}

export default Button;