import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        height: 100%;
        background-color: ${props => props.theme.background};
    }

    p, h1, strong, a, span {
        color: ${props => props.theme.text};
        margin: 0;
    }
`;