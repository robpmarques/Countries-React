import styled from 'styled-components';
import Icon from '../../Components/Icon';

export const Container = styled.div`
    width: 90%;
    margin: 60px auto;
    position: relative;
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

export const ArrowIcon = styled(Icon)`
    left: 25px;
`;
