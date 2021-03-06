import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0 10rem;
        box-sizing: inherit;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.3s ease-out;
    }

    @media only screen and (max-width: 75em) {
        body {
            padding: 0 5rem;
        }
	}

    @media only screen and (max-width: 62.5em) {
        body {
            padding: 0 3rem;
        }
	}
`;
