import React from 'react';
import * as Styled from './styles';
import Text from '../Text';

const Boxes = ({ ...props }) => {

    return (
        <Styled.CountryDetails>
            <Styled.TitleDiv>
                <Text>{props.country[0].name}</Text>
            </Styled.TitleDiv>
            <Styled.Boxes>
                <Text><Styled.BoldText>Native Name:</Styled.BoldText> {props.country[0].nativeName}</Text>
                <Text><Styled.BoldText>Population:</Styled.BoldText> {props.country[0].population.toLocaleString()}</Text>
                <Text><Styled.BoldText>Region:</Styled.BoldText> {props.country[0].region}</Text>
                <Text><Styled.BoldText>Sub-region:</Styled.BoldText> {props.country[0].subregion}</Text>
                <Text><Styled.BoldText>Capital:</Styled.BoldText> {props.country[0].capital}</Text>
            </Styled.Boxes>
            <Styled.Boxes>
                <Text><Styled.BoldText>Top Level Domain: </Styled.BoldText> {props.country[0].topLevelDomain}</Text>
                <Text><Styled.BoldText>Currencies: </Styled.BoldText>{props.country[0].currencies.map((currencies) => (
                    <>
                        {` ${currencies.code} `}
                    </>
                ))}</Text>
                <Text><Styled.BoldText>Language: </Styled.BoldText>{props.country[0].languages.map((languages) => (
                    <>
                        {` ${languages.name} `}
                    </>
                ))}</Text>
            </Styled.Boxes>
            <Styled.BorderBoxes>
                <Styled.BoldText>Border Countries: </Styled.BoldText>
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