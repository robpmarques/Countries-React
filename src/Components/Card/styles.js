import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
`;

export const CardBody = styled.div`
    padding: 0 0 15px 15px;
    width: 295px;
    margin: 0 auto;

    @media (max-width: 690px) {
        text-align: center;
    }
`;

export const FlagImage = styled.div`
    width: 310px;
    height: 200px;
    background-image: url('${props => props.src}');
    background-size: cover;
    background-position: center center;

    @media (max-width: 690px) {
        width: 100%;
    }
`;

export const Card = styled.div`
    cursor: pointer;
    background-color: ${props => props.theme.primary};
    margin-bottom: 50px;

    @media (max-width: 690px) {
        width: 100%;
    }
`;