import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { GlobalStyle } from '../../assets/css/global';
import { colorScheme } from '../../utils/colors';
import { ThemeProvider } from 'styled-components';
import Card from '../../Components/Card/';
import Header from '../../Components/Header';
import Filter from '../../Components/Filter';
import { getCountries } from '../../utils/get';

const Main = () => {

  const [countries, setCountries] = useState([]);
  const [currentTheme, setCurrentTheme] = useState({});

  useEffect(() => {
    const asyncResults = async () => {
      let countriesResult = await getCountries();

      setCountries(countriesResult.data);
      setCurrentTheme(colorScheme);
      console.log(colorScheme);
    }
    asyncResults();

  }, []);

  const handleColorModeChange = theme => {
    console.log(theme);
    setCurrentTheme(theme);
  };

  const _onChange = (obj) => {
    setCountries(obj);
  };

  return (
    <>
      <GlobalStyle
        theme={currentTheme} />
      <ThemeProvider
        theme={currentTheme}>
        <>
          <Header
            onThemeChange={handleColorModeChange} />
          <Styled.Container>
            <Filter
              countries={countries}
              _onChange={_onChange} />
            <Card
              filter={countries}
            />
          </Styled.Container>
        </>
      </ThemeProvider>
    </>
  )
}

export default Main;