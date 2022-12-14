import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    background: ${props => props.theme.colors.creme};
    color: ${props => props.theme.colors.blue};
  }

  p {
    line-height: 1.3;
  }

  a {
    all: unset;
  }

  img {
    max-width: 100%;
  }
`