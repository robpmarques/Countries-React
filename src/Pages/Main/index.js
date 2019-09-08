import React, { Component } from 'react';
import axios from 'axios';
import * as Styled from './styles';
import { GlobalStyle } from '../../assets/css/global';
import { switchTheme, colorScheme } from '../../utils/colors';
import { ThemeProvider } from 'styled-components';
import Card from '../../Components/Card/';
import Header from '../../Components/Header';
import Icon from '../../Components/Icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Main extends Component {

  constructor() {
    super();

    this.state = {
      countries: [],
      countryInput: '',
      region: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
      selectedRegion: '',
      currentThemeObj: {},
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getRecordsByName = this.getRecordsByName.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);

  }

  async componentDidMount() {

    let countriesResult = await axios.get('https://restcountries.eu/rest/v2/all');

    this.setState({ countries: countriesResult.data });
    this.setState({ currentThemeObj: colorScheme });
  }

  handleThemeChange() {

    switchTheme();
    this.setState({ currentThemeObj: colorScheme });

  }

  handleSelectChange(e) {
    this.setState({ selectedRegion: e.target.value });
  }

  handleColorModeChange() {
    this.setState({ colorMode: 'dark' });
  }

  handleInputChange(e) {
    this.setState({ countryInput: e.target.value.substr(0, 20) });
  }

  getRecordsByName() {

    let filteredCountry = this.state.countries.filter((countries) => {

      let countryCondition = countries.name.toLowerCase().indexOf(this.state.countryInput.toLowerCase()) !== -1;

      if (this.state.selectedRegion !== '') {

        return countryCondition && countries.region === this.state.selectedRegion;
      }

      return countryCondition;
    });

    return filteredCountry;
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
            <Styled.Container>
              <Styled.FilterContainer>
                <Styled.InputContainer>
                  <Icon icon={faSearch} left="20px" color={this.state.currentThemeObj.text} />
                  <Styled.Input value={this.state.countryInput} onChange={(e) => this.handleInputChange(e)} placeholder="Search for a country..." />
                </Styled.InputContainer>
                <Styled.SelectDiv>
                  <Styled.Select value={this.state.selectedRegion} onChange={(e) => this.handleSelectChange(e)}>
                    <Styled.Option value="">Filter by region</Styled.Option>
                    {this.state.region.map((value) => (
                      <Styled.Option value={value}>{value}</Styled.Option>
                    ))}
                  </Styled.Select>
                </Styled.SelectDiv>
              </Styled.FilterContainer>
              {<Card
                getRecordsByName={this.getRecordsByName}
                countries={this.state.countries}
                numberOfCards={this.state.numberOfCards}
                region={this.state.selectedRegion} />
              }
            </Styled.Container>
          </Styled.Main>
        </ThemeProvider>
      </>
    )
  }
}