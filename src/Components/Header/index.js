import React, { useState } from 'react';
import * as Styled from './styles';
import { switchTheme } from '../../utils/colors';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text';

const Header = ({ onThemeChange }) => {

    const [currentColorMode, setCurrentColorMode] = useState('');

    const handleThemeChange = () => {
        setCurrentColorMode(switchTheme);
        onThemeChange(switchTheme);
    }

    return (

        <Styled.Header>
            <Styled.TitleContainer>
                <Text>Where in the world?</Text>
                <Styled.LinkColorMode onClick={handleThemeChange}>
                    <Styled.Text>{currentColorMode} Mode</Styled.Text>
                </Styled.LinkColorMode>
                <Styled.MoonIcon icon={faMoon} />
            </Styled.TitleContainer>
        </Styled.Header>
    )
};

export default Header;