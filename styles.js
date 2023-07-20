import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 1em 0 0 0;
    font-family: system-ui;
  }
  ul {
    margin-left: 0;
    padding-left: 0;
    margin-top: 0;
  }
  figure {
    margin: 0
  }
`;
