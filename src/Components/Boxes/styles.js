import styled from 'styled-components';
import Button from '../Button';

export const CountryDetails = styled.div`
width: 50%;
margin: 40px auto;
position: relative;
display: flex;
flex-flow: row wrap;

@media (max-width: 1024px) {
    margin: 40px 5px;
}

@media (max-width: 500px) {
    width: 100%;
}
`;

export const Boxes = styled.div`
    width: 270px;
    margin-bottom: 20px;
`;

export const BorderBoxes = styled(Boxes)`
    width: 100%;

    @media (max-width: 500px) {
        p {
            width: 100%;
            margin-right: 10px;
        }
    }
`;

export const BorderButton = styled(Button)`
    padding: 5px 0px;
    margin: 0 5px 10px 5px;
    color: ${props => props.theme.text};
    box-shadow: 0px 0px 3px 0 ${props => props.theme.text};
    border-radius: 5px;
    background-color: ${props => props.theme.primary};
    display: inline-block;

    @media (max-width: 768px) {
        width: 25%;
        margin-bottom: 10px;
    }
`;


export const TitleDiv = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;