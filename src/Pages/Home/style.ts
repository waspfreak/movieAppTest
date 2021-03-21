import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
}
html {
    background-color: #111;
  font-size: 100%;
  @media screen and (max-width: 1601px) {
    font-size: 100%;
  }
  @media screen and (max-width: 1023px) {
    font-size: 80%;
  }
}
body {
  font-family: "Titillium Web", sans-serif;  
  background-color: #111;
  box-sizing: border-box;
  color: white;
}`;
