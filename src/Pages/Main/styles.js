import styled from 'styled-components';
import Icon from '../../Components/Icon';

export const InputContainer = styled.div`

    width: 300px;
    position: relative;
        
    @media (max-width: 767px) {
        width: calc(100% - 50px);
        margin-bottom: 10px;
    }
`
;

export const FilterContainer = styled.div`
    display: flex;
    position: relative;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const Container = styled.div`
    width: 90%;
    margin: 60px auto;
    position: relative;
    height: 100%;
`;

export const Option = styled.option`
    width: 50px;
    padding: 15px;
    border-radius: 50px;
`;

export const SelectDiv = styled.div`

    position: relative;
    width: 180px;
    box-shadow: 0px 0px 3px -2px ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    border-radius: 5px; 

    @media (max-width: 767px) {
        width: 100%;
    }

    &:after {
        content: '';
        background-color: ${props => props.theme.text};
        width: 7px;
        height: 2px;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        position: absolute;
        transform: rotate(45deg);
    }

    &:before {
        content: '';
        background-color: ${props => props.theme.text};
        width: 7px;
        height: 2px;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        position: absolute;
        transform: rotate(135deg);
    }
`;

export const Footer = styled.div`
    width: 100%;
`;

export const searchIcon = styled(Icon)`
    left: 20px;
`;