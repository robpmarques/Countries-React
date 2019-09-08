import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        height: 100%;
        background-color: ${props => props.theme.background};
    }
`;