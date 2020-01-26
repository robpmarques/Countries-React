import React from 'react';
import * as Styled from './styles';

const Boxes = ({ country }) => {
    return (
        <Styled.CountryDetails>
            <Styled.TitleDiv>
                <h1>{country.name}</h1>
            </Styled.TitleDiv>
            <Styled.Boxes>
                <p><strong>Native Name:</strong> {country.nativeName}</p>
                <p><strong>Population:</strong> {country.population && country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Sub-region:</strong> {country.subregion}</p>
                <p><strong>Capital:</strong> {country.capital}</p>
            </Styled.Boxes>
            <Styled.Boxes>
                <p><strong>Top Level Domain: </strong> {country.topLevelDomain}</p>
                <p><strong>Currencies: </strong>{country.currencies && country.currencies.map((currencies) => (
                    <>
                        {` ${currencies.code} `}
                    </>
                ))}</p>
                <p><strong>Language: </strong>{country.languages && country.languages.map((languages) => (
                    <>
                        {` ${languages.name} `}
                    </>
                ))}</p>
            </Styled.Boxes>
            <Styled.BorderBoxes>
                <strong>Border Countries: </strong>
                {country.borders && country.borders.map((borders) => (
                    <Styled.BorderButton>
                        {borders}
                    </Styled.BorderButton>
                ))}
            </Styled.BorderBoxes>
        </Styled.CountryDetails>
    );
}


export default Boxes;