import React from 'react';
import * as Styled from './styles';
import { Link } from "react-router-dom";
import numeral from 'numeral';
import Text from '../Text';
import Title from '../Title';

const Card = ({ numberOfCards, region, ...props }) => {

    return (
        <Styled.CardContainer cardJustify={props.cardJustify}>
                {props.getRecordsByName().map((value, index) => (
                    <Styled.Card>
                    <Link to={{
                        pathname: '/Detail/' + value.alpha2Code
                    }}>
                        <Styled.FlagImage src={value.flag} />
                        <Styled.CardBody>
                            <Title margin="10px 0">{value.name}</Title>
                            <Text><strong>Population: </strong>{numeral(value.population).format('0,00,000')}</Text>
                            <Text><strong>Region: </strong>{value.region}</Text>
                            <Text><strong>Capital: </strong>{value.capital}</Text>
                        </Styled.CardBody>
                        </Link>
                    </Styled.Card>
                ))}
        </Styled.CardContainer>
    )
};

export default Card;