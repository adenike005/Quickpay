import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  :root{
    --black: #000000;
    --white : #ffffff;
    --purple : #C8B6EA;
  }
  body{
    background-color: var(--black) ;
  }
`

export default GlobalStyles;