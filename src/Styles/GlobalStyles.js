import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');
  :root{
    --black: #000000;
    --white : #ffffff;
    --purple : #C8B6EA;
  }
  body{
    background-color: var(--black) ;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
  }

  .logo a{
        color: var(--purple);
        cursor: pointer;
        font-size: 1.5rem;
    }
`

export default GlobalStyles;