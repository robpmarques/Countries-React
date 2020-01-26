import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Boxes from '../../Components/Boxes';
import { GlobalStyle } from '../../assets/css/global';
import { colorScheme } from '../../utils/colors';
import { Link } from "react-router-dom";
import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Detail = (props) => {

  const [country, setCountry] = useState({});
  const [currentTheme, setCurrentTheme] = useState({});

  useEffect(() => {

    const getCountriesByCode = async () => {
      const countriesResult = await axios.get(`https://restcountries.eu/rest/v2/alpha/${props.match.params.countryCode}`);

      setCountry(countriesResult.data);
      setCurrentTheme(colorScheme);
    }

    getCountriesByCode();

  }, []);

  const handleColorModeChange = theme => {
    console.log(theme);
    setCurrentTheme(theme);
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
            <Button>
              <Link to="/">
                <Styled.ArrowIcon icon={faArrowLeft} />
                <p>Back</p> {/* Text sem margin */}
              </Link>
            </Button>
            <Styled.CountryDetailContainer>
              <Styled.ImageDiv>
                <Styled.Image src={country.flag} alt="" />
              </Styled.ImageDiv>
              <Boxes country={country} />
            </Styled.CountryDetailContainer>
          </Styled.Container>
        </>
      </ThemeProvider>
    </>
  )
}

export default Detail;