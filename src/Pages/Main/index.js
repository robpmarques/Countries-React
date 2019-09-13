import React, { Component } from 'react';
import axios from 'axios';
import * as Styled from './styles';
import { GlobalStyle } from '../../assets/css/global';
import { switchTheme, colorScheme } from '../../utils/colors';
import { ThemeProvider } from 'styled-components';
import Card from '../../Components/Card/';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Main extends Component {

  constructor() {
    super();

    this.state = {
      countries: [],
      region: [],
      filteredCountry: [],
      selectedRegion: '',
      currentThemeObj: {},
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  async componentDidMount() {

    let countriesResult = await axios.get('https://restcountries.eu/rest/v2/all');

    const uniqueRegion = Array.from(new Set(countriesResult.data.map(a => a.region)))
      .map(region => {
        return countriesResult.data.find(a => a.region === region);
      });


    this.setState({ countries: countriesResult.data, currentThemeObj: colorScheme, region: uniqueRegion });

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

    var value = e.target.value;

    let debounced = this.debounce(() => {

      let filteredCountry = this.state.countries.filter((countries) => {

        let countryCondition = countries.name.toLowerCase().startsWith(value.toLowerCase()) !== false;

        if (this.state.selectedRegion !== '') {

          return countryCondition && countries.region === this.state.selectedRegion;
        }

        return countryCondition;
      });

      this.setState({ filteredCountry });

    }, 500);

    debounced();

  }

  debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
      var context = this;
      var args = arguments;

      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  };

  render() {
    return (
      <>
        <GlobalStyle theme={this.state.currentThemeObj} />
        <ThemeProvider theme={this.state.currentThemeObj}>
          <>
            <Header
              handleThemeChange={this.handleThemeChange}
              colorMode={this.state.currentThemeObj.name}
            />
            <Styled.Container>
              <Styled.FilterContainer>
                <Styled.InputContainer>
                  <Styled.searchIcon icon={faSearch} />
                  <Input input={this.state.countryInput} inputChange={(e) => this.handleInputChange(e)} placeholder="Search for a country..." />
                </Styled.InputContainer>
                <Styled.SelectDiv>
                  <Select select={this.state.selectedRegion} selectChange={(e) => this.handleSelectChange(e)}>
                    <Styled.Option value="">Filter by region</Styled.Option>
                    {this.state.region.map((value) => {
                      if (value.region !== '') {
                        return (
                          <Styled.Option value={value.region}>{value.region}</Styled.Option>
                        );
                      }
                    })}
                  </Select>
                </Styled.SelectDiv>
              </Styled.FilterContainer>
              {<Card
                filter={this.state.filteredCountry}
                countries={this.state.countries}
                numberOfCards={this.state.numberOfCards}
                region={this.state.selectedRegion} />
              }
            </Styled.Container>
          </>
        </ThemeProvider>
      </>
    )
  }
}