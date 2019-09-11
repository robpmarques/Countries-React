import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import Boxes from '../../Components/Boxes';
import { GlobalStyle } from '../../assets/css/global';
import { switchTheme, colorScheme } from '../../utils/colors';
import { Link } from "react-router-dom";
import * as Styled from './styles';
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


    const countriesResult = await axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.countryCode}`);

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
          <>
            <Header
              handleThemeChange={this.handleThemeChange}
              colorMode={this.state.currentThemeObj.name}
              color={this.state.currentThemeObj.text}
            />
            {this.state.countries.map((country) => (
              <Styled.Container>
                <Button>
                  <Link to="/">
                    <Styled.ArrowIcon icon={faArrowLeft} />
                    <Text noMargin>Back</Text>
                  </Link>
                </Button>
                <Styled.CountryDetailContainer>
                  <Styled.ImageDiv>
                    <Styled.Image src={country.flag} alt="" />
                  </Styled.ImageDiv>
                  <Boxes country={this.state.countries}/>
                </Styled.CountryDetailContainer>
              </Styled.Container>
            ))}
          </>
        </ThemeProvider>
      </>
    )
  }
}