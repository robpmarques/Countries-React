import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import Text from '../../Components/Text';
import Title from '../../Components/Title';
import { GlobalStyle } from '../../assets/css/global';
import { switchTheme, colorScheme } from '../../utils/colors';
import { Link } from "react-router-dom";
import * as Styled from './styles';
import numeral from 'numeral';
import { ThemeProvider } from 'styled-components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default class Detail extends Component {

  constructor() {
    super();

    this.state = {
      countries: [],
      currentThemeObj: {},
    }
    this.handleThemeChange = this.handleThemeChange.bind(this);

  }

  async componentDidMount() {


    let countriesResult = await axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.countryCode}`);

    console.log(countriesResult);

    this.setState({ countries: [countriesResult.data] });
    this.setState({ currentThemeObj: colorScheme });

  }

  handleThemeChange() {

    switchTheme();
    this.setState({ currentThemeObj: colorScheme });

  }

  render() {
    return (
      <>
      <GlobalStyle theme={this.state.currentThemeObj} />
      <ThemeProvider theme={this.state.currentThemeObj}>
          <Styled.Main>
            <Header
              handleThemeChange={this.handleThemeChange}
              colorMode={this.state.currentThemeObj.name}
              color={this.state.currentThemeObj.text}
            />
            {this.state.countries.map((country) => (
              <Styled.Container>
                <Styled.Button>
                  <Link to="/">
                    <Styled.ArrowIcon icon={faArrowLeft} /><Text noMargin>Back</Text></Link>
                </Styled.Button>
                <Styled.CountryDetailContainer>
                  <Styled.ImageDiv>
                    <Styled.Image src={country.flag} alt="" />
                  </Styled.ImageDiv>
                  <Styled.CountryDetails>
                    <Styled.TitleDiv>
                      <Title>{country.name}</Title>
                    </Styled.TitleDiv>  
                    <Styled.Boxes mobileMargin>
                      <Text><Styled.BoldText>Native Name:</Styled.BoldText> {country.nativeName}</Text>
                      <Text><Styled.BoldText>Population:</Styled.BoldText> {numeral(country.population).format('0,00,000')}</Text>
                      <Text><Styled.BoldText>Region:</Styled.BoldText> {country.region}</Text>
                      <Text><Styled.BoldText>Sub-region:</Styled.BoldText> {country.subregion}</Text>
                      <Text><Styled.BoldText>Capital:</Styled.BoldText> {country.capital}</Text>
                    </Styled.Boxes>
                    <Styled.Boxes>
                    <Text><Styled.BoldText>Top Level Domain: </Styled.BoldText> {country.topLevelDomain}</Text>
                      <Text><Styled.BoldText>Currencies: </Styled.BoldText>{country.currencies.map((currencies) => (
                        <>
                          {` ${currencies.code} `}
                        </>
                      ))}</Text>
                      <Text><Styled.BoldText>Language: </Styled.BoldText>{country.languages.map((languages) => (
                        <>
                          {` ${languages.name} `}
                        </>
                      ))}</Text>
                    </Styled.Boxes>
                    <Styled.BorderBoxes>
                      <Styled.BoldText>Border Countries: </Styled.BoldText>
                      {country.borders.map((borders) => (
                        <Styled.BorderButton>
                          {borders}
                        </Styled.BorderButton>
                      ))}
                    </Styled.BorderBoxes>
                  </Styled.CountryDetails>
                </Styled.CountryDetailContainer>
              </Styled.Container>
            ))}
          </Styled.Main>
      </ThemeProvider>
      </>
    )
  }
}