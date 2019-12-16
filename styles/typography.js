import css from "styled-jsx/css";

import { fontFamily, colors } from "./theme";

const typography = css.global`
  @font-face {
    font-family: "Avenir Next";
    font-weight: 400;
    src: url("/fonts/avenir-next/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix");
    src: url("/fonts/avenir-next/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix")
        format("eot"),
      url("/fonts/avenir-next/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2")
        format("woff2"),
      url("/fonts/avenir-next/1e9892c0-6927-4412-9874-1b82801ba47a.woff")
        format("woff"),
      url("/fonts/avenir-next/46cf1067-688d-4aab-b0f7-bd942af6efd8.ttf")
        format("truetype"),
      url("/fonts/avenir-next/52a192b1-bea5-4b48-879f-107f009b666f.svg#52a192b1-bea5-4b48-879f-107f009b666f")
        format("svg");
  }

  @font-face {
    font-family: "Avenir Next";
    font-weight: 600;
    src: url("/fonts/avenir-next/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?#iefix");
    src: url("/fonts/avenir-next/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?#iefix")
        format("eot"),
      url("/fonts/avenir-next/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2")
        format("woff2"),
      url("/fonts/avenir-next/91b50bbb-9aa1-4d54-9159-ec6f19d14a7c.woff")
        format("woff"),
      url("/fonts/avenir-next/a0f4c2f9-8a42-4786-ad00-fce42b57b148.ttf")
        format("truetype"),
      url("/fonts/avenir-next/99affa9a-a5e9-4559-bd07-20cf0071852d.svg#99affa9a-a5e9-4559-bd07-20cf0071852d")
        format("svg");
  }

  @font-face {
    font-family: "Avenir Next";
    font-weight: bold;
    src: url("/fonts/avenir-next/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix");
    src: url("/fonts/avenir-next/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix")
        format("eot"),
      url("/fonts/avenir-next/14c73713-e4df-4dba-933b-057feeac8dd1.woff2")
        format("woff2"),
      url("/fonts/avenir-next/b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff")
        format("woff"),
      url("/fonts/avenir-next/890bd988-5306-43ff-bd4b-922bc5ebdeb4.ttf")
        format("truetype"),
      url("/fonts/avenir-next/ed104d8c-7f39-4e8b-90a9-4076be06b857.svg#ed104d8c-7f39-4e8b-90a9-4076be06b857")
        format("svg");
  }

  @font-face {
    font-family: "ImperialURW";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/imperial-urw/imperialurw-reg-webfont.woff2")
        format("woff2"),
      url("/fonts/imperial-urw/imperialurw-reg-webfont.woff") format("woff");
  }

  @font-face {
    font-family: "ImperialURW";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/imperial-urw/imperialurw-med-webfont.woff2")
        format("woff2"),
      url("/fonts/imperial-urw/imperialurw-med-webfont.woff") format("woff");
  }

  @font-face {
    font-family: "ImperialURW";
    font-weight: bold;
    font-style: normal;
    src: url("/fonts/imperial-urw/imperialurw-bol-webfont.woff2")
        format("woff2"),
      url("/fonts/imperial-urw/imperialurw-bol-webfont.woff") format("woff");
  }

  * {
    font-family: ${fontFamily.avenirNext};
    color: ${colors.darkGrey};
  }

  h1,
  h1 span,
  h2,
  h2 span,
  h3,
  h3 span,
  h4,
  h4 span,
  h5,
  h5 span {
    font-family: ${fontFamily.imperialURW};
    font-weight: normal;
  }
`;

export default typography;
