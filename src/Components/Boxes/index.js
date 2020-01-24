import React from 'react';
import * as Styled from './styles';

const Boxes = ({ ...props }) => {

    return (
        <Styled.CountryDetails>
            <Styled.TitleDiv>
                <p>{props.country[0].name}</p>
            </Styled.TitleDiv>
            <Styled.Boxes>
                <p><strong>Native Name:</strong> {props.country[0].nativeName}</p>
                <p><strong>Population:</strong> {props.country[0].population.toLocaleString()}</p>
                <p><strong>Region:</strong> {props.country[0].region}</p>
                <p><strong>Sub-region:</strong> {props.country[0].subregion}</p>
                <p><strong>Capital:</strong> {props.country[0].capital}</p>
            </Styled.Boxes>
            <Styled.Boxes>
                <p><strong>Top Level Domain: </strong> {props.country[0].topLevelDomain}</p>
                <p><strong>Currencies: </strong>{props.country[0].currencies.map((currencies) => (
                    <>
                        {` ${currencies.code} `}
                    </>
                ))}</p>
                <p><strong>Language: </strong>{props.country[0].languages.map((languages) => (
                    <>
                        {` ${languages.name} `}
                    </>
                ))}</p>
            </Styled.Boxes>
            <Styled.BorderBoxes>
                <strong>Border Countries: </strong>
                {props.country[0].borders.map((borders) => (
                    <Styled.BorderButton>
                        {borders}
                    </Styled.BorderButton>
                ))}
            </Styled.BorderBoxes>
        </Styled.CountryDetails>
    );
}


export default Boxes;