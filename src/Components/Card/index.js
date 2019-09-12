import React from 'react';
import * as Styled from './styles';
import { Link } from "react-router-dom";
import Text from '../Text';

const Card = ({ ...props }) => {

    return (
        <Styled.CardContainer numberOfCards={props.getRecordsByName().length}>
            {props.getRecordsByName().map((value) => (
                <Styled.Card>
                    <Link to={{
                        pathname: '/Detail/' + value.alpha2Code
                    }}>
                        <Styled.FlagImage src={value.flag} />
                        <Styled.CardBody>
                            <Styled.CardTitle>{value.name}</Styled.CardTitle>
                            <Text><strong>Population: </strong>{value.population.toLocaleString()}</Text>
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