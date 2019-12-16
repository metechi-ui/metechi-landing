import css from "styled-jsx/css";

const reset = css.global`
  *,
  *:after,
  *:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  ul {
    list-style-type: none;
  }

  input,
  button,
  select,
  textarea {
    outline: none;
    background: none;
    border: none;
  }
  textarea {
    resize: none;
  }
`;

export default reset;
