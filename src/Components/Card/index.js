import React from 'react';
import * as Styled from './styles';
import { Link } from "react-router-dom";
import Text from '../Text';

const Card = ({ filter }) => (
    <Styled.CardContainer>
        {filter.map((value) => (
            <Styled.Card key={value.key}>
                <Link to={{
                    pathname: '/Detail/' + value.alpha2Code
                }}>
                    <Styled.FlagImage src={value.flag} />
                    <Styled.CardBody>
                        <Styled.CardTitle>{value.name}</Styled.CardTitle>
                        <Text><Styled.TextBold>Population: </Styled.TextBold>{value.population.toLocaleString()}</Text>
                        <Text><Styled.TextBold>Region: </Styled.TextBold>{value.region}</Text>
                        <Text><Styled.TextBold>Capital: </Styled.TextBold>{value.capital}</Text>
                    </Styled.CardBody>
                </Link>
            </Styled.Card>
        ))}
    </Styled.CardContainer>
)

export default Card;