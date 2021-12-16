import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    max-width: 1020px;
    padding: 0 10px;
    margin: 0 auto;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  a,
  button {
    text-decoration: none;
    color: inherit;
  }
`;