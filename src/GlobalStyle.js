import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
}

/* ----------------------------- media */
/* ----------------------------- 1 */
@media screen and (max-width:576px){
    html{
      font-size: 13px;
    }
  }
  
  /* ----------------------------- 2 */
  @media screen and (min-width:576px) and (max-width:769px){
    html{
      font-size: 15px;
    }
  }
  /* ----------------------------- 3 */
  @media screen and (min-width:769px){
    html{
      font-size: 16px;
    }
  }
`