import styled from 'styled-components';
import Icon from '../Icon';

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

export const Select = styled.select`

width: 100%;
height: 100%;
padding: 15px 20px;
border-radius: 5px;
border: 0;
-moz-appearance:none;
-webkit-appearance:none;
color: ${props => props.theme.text};
appearance:none;
background-color: ${props => props.theme.primary};

`;


export const Input = styled.input`
border: 0;
width: 100%;
border-radius: 5px;
color: ${props => props.theme.text};
padding: 15px 0px 15px 50px;
box-shadow: 0px 0px 3px -2px ${props => props.theme.text};
background-color: ${props => props.theme.primary};

&::placeholder {
    color: ${props => props.theme.text};
}
`;

export const Option = styled.option`
    width: 50px;
    padding: 15px;
    border-radius: 50px;
`;


export const searchIcon = styled(Icon)`
    left: 20px;
`;