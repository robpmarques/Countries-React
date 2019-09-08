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
import Icon from '../../Components/Icon';
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
                    <Icon icon={faArrowLeft} color={this.state.currentThemeObj.text} left="25px" /><Text noMargin>Back</Text></Link>
                </Styled.Button>
                <Styled.CountryDetailContainer>
                  <Styled.ImageDiv>
                    <Styled.Image src={country.flag} alt="" />
                  </Styled.ImageDiv>
                  <Styled.CountryDetails>
                    <Styled.TitleDiv margin="20px">
                      <Title>{country.name}</Title>
                    </Styled.TitleDiv>  
                    <Styled.Boxes mobileMargin>
                      <Text><strong>Native Name:</strong> {country.nativeName}</Text>
                      <Text><strong>Population: </strong>{numeral(country.population).format('0,00,000')}</Text>
                      <Text><strong>Region:</strong> {country.region}</Text>
                      <Text><strong>Sub-region:</strong> {country.subregion}</Text>
                      <Text><strong>Capital:</strong> {country.capital}</Text>
                    </Styled.Boxes>
                    <Styled.Boxes>
                      <Text><strong>Top Level Domain:</strong> {country.topLevelDomain}</Text>
                      <Text><strong>Currencies:</strong> {country.currencies.map((currencies) => (
                        <>
                          {`${currencies.code} `}
                        </>
                      ))}</Text>
                      <Text><strong>Language:</strong> {country.languages.map((languages) => (
                        <>
                          {`${languages.name} `}
                        </>
                      ))}</Text>
                    </Styled.Boxes>
                    <Styled.Boxes mt20 maxWidth>
                      <Text bold borderMargin inlineBlock maxWidth>Border Countries: </Text>
                      {country.borders.map((borders) => (
                        <Styled.NoLink>
                          {borders}
                        </Styled.NoLink>
                      ))}
                    </Styled.Boxes>
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