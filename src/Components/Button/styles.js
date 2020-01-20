import styled from 'styled-components';

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