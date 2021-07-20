import { createGlobalStyle } from 'styled-components'; // this is the only import you need in this file

export const GlobalStyle = createGlobalStyle`
:root {                               //  these are the css variables that will be used in the rest of the app
    --maxWidth: 1280px;
    --white: #fff;                // white background
    --ligthGrey: #eee;               // black background
    --medGrey: #353535;              // dark grey background
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}

* {
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

body {
    margin: 0;
    padding: 0;

    
    h1 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
    }

    h3 {
        font-size: 1.1rem;
        font-weight: bold;
    }

    p {
        font-size: 1rem;  
        color: var(--white);
    }
}

`;
