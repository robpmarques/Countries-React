import styled from 'styled-components';

export const Header = styled.div`

    background-color: ${props => props.theme.primary};
    box-shadow: 0px -4px 8px 0px ${props => props.theme.text};
    width: 100%;
    padding: 20px 0;
`;

export const TitleContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;

export const LinkColorMode = styled.div`
    cursor: pointer;
`;

export const Title = styled.h1`
    margin: 0;
    color: ${props => props.theme.text}
`;

export const Text = styled.p`

    color: ${props => props.theme.text}

`;