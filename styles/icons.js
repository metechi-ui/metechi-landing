import css from "styled-jsx/css";

const icons = css.global`
  @font-face {
    font-family: "icomoon";
    src: url("/fonts/icons/icomoon.eot?hz5gdh");
    src: url("/fonts/icons/icomoon.eot?hz5gdh#iefix")
        format("embedded-opentype"),
      url("/fonts/icons/icomoon.ttf?hz5gdh") format("truetype"),
      url("/fonts/icons/icomoon.woff?hz5gdh") format("woff"),
      url("/fonts/icons/icomoon.svg?hz5gdh#icomoon") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"],
  [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-facebook:before {
    content: "\e900";
  }
  .icon-linkedin:before {
    content: "\e901";
  }
  .icon-twitter:before {
    content: "\e902";
  }
`;

export default icons;
