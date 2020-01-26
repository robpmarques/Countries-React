import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { switchTheme, colorScheme } from '../../utils/colors';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onThemeChange }) => {

    const [currentColorMode, setCurrentColorMode] = useState('');

    const handleThemeChange = () => {
        switchTheme();
        setCurrentColorMode(colorScheme.name);
        onThemeChange(colorScheme);
    }

    useEffect(() => {
        setCurrentColorMode(colorScheme.name);
    }, [])

    return (

        <Styled.Header>
            <Styled.TitleContainer>
                <h1>Where in the world?</h1>
                <Styled.LinkColorMode onClick={handleThemeChange}>
                    <p>{currentColorMode} Mode</p>
                </Styled.LinkColorMode>
                <Styled.MoonIcon icon={faMoon} />
            </Styled.TitleContainer>
        </Styled.Header>
    )
};

export default Header;