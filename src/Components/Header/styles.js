import styled from 'styled-components';
import Icon from '../Icon/';

export const Header = styled.header`

    background-color: ${props => props.theme.primary};
    box-shadow: 0px -7px 9px 0px ${props => props.theme.text};
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

export const MoonIcon = styled(Icon)`
    right: 88px;
`;