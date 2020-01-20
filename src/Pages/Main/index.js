import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from './styles';
import { GlobalStyle } from '../../assets/css/global';
import { colorScheme } from '../../utils/colors';
import { ThemeProvider } from 'styled-components';
import Card from '../../Components/Card/';
import Header from '../../Components/Header';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Main = () => {

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [currentTheme, setCurrentTheme] = useState({});

  useEffect(() => {
    async function getCountries() {
      let countriesResult = await axios.get('https://restcountries.eu/rest/v2/all');

      const uniqueRegion = Array.from(new Set(countriesResult.data.map(a => a.region)))
        .map(region => {
          return countriesResult.data.find(a => a.region === region);
        });

      setFilteredCountry(countriesResult.data);
      setCountries(countriesResult.data);
      setCurrentTheme(colorScheme);
      setRegion(uniqueRegion);
    }

    getCountries();
  }, []);

  const handleColorModeChange = currentTheme => {
    console.log(currentTheme);
  };

  const handleSelectChange = (filteredCountryText) => {
    setFilteredCountry(filteredCountryText);
  };

  const handleInputChange = (filteredCountryText) => {
    setFilteredCountry(filteredCountryText);
  };

  return (
    <>
      <GlobalStyle theme={currentTheme} />
      <ThemeProvider theme={currentTheme}>
        <>
          <Header onThemeChange={handleColorModeChange} />
          <Styled.Container>
            <Filter />
            <Card
              filter={filteredCountry}
            />
          </Styled.Container>
        </>
      </ThemeProvider>
    </>
  )
}

export default Main;