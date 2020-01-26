import React, { useEffect } from 'react';
import * as Styled from './styles';
import { Link } from "react-router-dom";

const Card = ({ filter }) => {

    useEffect(filter => {
        console.log(filter);
    }, [])

    return (
        <Styled.CardContainer>
            {filter.map((value) => (
                <Styled.Card key={value.key}>
                    <Link to={{
                        pathname: '/Detail/' + value.alpha2Code
                    }}>
                        <Styled.FlagImage src={value.flag} />
                        <Styled.CardBody>
                            <Styled.CardTitle>{value.name}</Styled.CardTitle> {/* era classe card title */}
                            <p><strong>Population: </strong>{value.population.toLocaleString()}</p>
                            <p><strong>Region: </strong>{value.region}</p>
                            <p><strong>Capital: </strong>{value.capital}</p>
                        </Styled.CardBody>
                    </Link>
                </Styled.Card>
            ))}
        </Styled.CardContainer>
    )
}

export default Card;