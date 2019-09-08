import React from 'react';
import Icon from '../Icon/';
import * as Styled from './styles';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text';


const Header = ({...props}) => {

    return(

    <Styled.Header>
        <Styled.TitleContainer>
                <Styled.Title>Where in the world?</Styled.Title>
                <Styled.LinkColorMode onClick={props.handleThemeChange}>
                    <Text noMargin>{props.colorMode} Mode</Text>
            </Styled.LinkColorMode>
            <Icon icon={faMoon} right="90px" color={props.color} />
        </Styled.TitleContainer>
    </Styled.Header>
    )
};

export default Header;