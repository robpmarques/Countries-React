import styled from 'styled-components';

export const InputContainer = styled.div`

    width: 300px;
    position: relative;
        
    @media (max-width: 767px) {
        width: calc(100% - 50px);
        margin-bottom: 10px;
    }
`
;

export const Input = styled.input`
    border: 0;
    width: 100%;
    color: ${props => props.theme.text};
    padding: 15px 0px 15px 50px;
    box-shadow: 1px 1px 2px -2px ${props => props.theme.text};
    background-color: ${props => props.theme.primary};
    
    &::placeholder {
        color: ${props => props.theme.text};
    }
`;

export const Select = styled.select`

    width: 100%;
    height: 100%;
    padding: 15px 20px;
    border: 0;
    -moz-appearance:none;
    -webkit-appearance:none;
    color: ${props => props.theme.text};
    appearance:none;
    background-color: ${props => props.theme.primary};

`;

export const Main = styled.div`
    background-color: ${props => props.theme.background};
    height: 100%;
`;


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
    box-shadow: 1px 1px 2px -2px ${props => props.theme.text};
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
