import styled from 'styled-components';
import Icon from '../../Components/Icon';
import Text from '../../Components/Text';

export const Main = styled.div`
    background-color: ${props => props.theme.background};
    height: 100%;
`;

export const Container = styled.div`
    width: 90%;
    margin: 60px auto;
    position: relative;
`;

export const TitleDiv = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const Button = styled.div`
    width: 120px;
    text-align: center;
    margin-bottom: 50px;
    position: relative;

    & a {
        padding: 5px 30px;
        text-align: right;
        box-shadow: 0px 0px 6px 0px hsl(0,0%,52%);
        border-radius: 5px;
        display: block;
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

export const ImageDiv = styled.div`
    width: 500px;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const CountryDetailContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

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

export const BoldText = styled(Text)`
    font-weight: bold;
    display: inline-block;
`;

export const Boxes = styled.div`
    width: 270px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        margin-bottom: ${props => props.mobileMargin ? '20px' : ''};
    }
`;

export const BorderBoxes = styled(Boxes)`
    width: 100%;
    
    @media (max-width: 500px) {
        ${BoldText} {
            width: 100%;
        }
    }
`;

export const ArrowIcon = styled(Icon)`
    left: 25px;
`;
