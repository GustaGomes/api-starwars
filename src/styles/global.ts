import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        color: #FFF;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
