import React from 'react';
import * as Styled from './styles';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text';
import Title from '../Title';

const Header = ({ ...props }) => {

    return (

        <Styled.Header>
            <Styled.TitleContainer>
                <Title>Where in the world?</Title>
                <Styled.LinkColorMode onClick={props.handleThemeChange}>
                    <Text noMargin>{props.colorMode} Mode</Text>
                </Styled.LinkColorMode>
                <Styled.MoonIcon icon={faMoon} />
            </Styled.TitleContainer>
        </Styled.Header>
    )
};

export default Header;