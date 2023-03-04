import { createGlobalStyle } from 'styled-components'
//rezetando o estilo global da aplicação que era feito com -> *{}

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
`
export default GlobalStyle
