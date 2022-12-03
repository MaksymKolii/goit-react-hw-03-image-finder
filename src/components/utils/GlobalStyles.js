import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* h1,
h2,
h3,
p{
    margin-top: 0px;
    margin-bottom: 0px;
}
ul,
ol{
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
    list-style: none;
}
img{
    display: block;
    max-width: 100%;
    height: auto;
}

a{
    text-decoration: none;
} */


html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

  
`;
