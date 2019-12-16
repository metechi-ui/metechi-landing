import css from "styled-jsx/css";

import { colors, breakpoints } from "./theme";

const utils = css.global`
  .overflow-hidden {
    overflow: hidden;
  }

  .full-abs,
  .full-abs-before:before,
  .full-abs-after:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .full-abs-before:before,
  .full-abs-after:after {
    content: "";
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-center {
    display: flex;
    justify-content: center;
  }

  .justify-space-between {
    display: flex;
    justify-content: space-between;
  }

  .justify-end {
    display: flex;
    justify-content: flex-end;
  }

  .align-center {
    display: flex;
    align-items: center;
  }

  .align-end {
    display: flex;
    align-items: flex-end;
  }

  .apear-from-top {
    animation: apearFromTop 0.5s backwards;
  }
  .apear-from-bottom {
    animation: apearFromBottom 0.5s backwards;
  }

  .stagger-in {
    transform-origin: top left;
    animation: textStagger 0.5s backwards;
  }
  .stagger-in.second {
    animation-delay: 0.2s;
  }
  .stagger-in.third {
    animation-delay: 0.4s;
  }

  .triangle {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid ${colors.darkGrey};
  }
  .triangle.white {
    border-left-color: white;
  }
  .triangle.blueyGrey {
    border-left-color: ${colors.blueyGrey};
  }
  .triangle.blue {
    border-left-color: ${colors.lightBlue};
  }

  @keyframes textStagger {
    from {
      opacity: 0;
      transform: skewY(-3deg) translateY(-20px);
    }

    to {
      opacity: 1;
      transform: skewY(0deg) translateY(0);
    }
  }

  @keyframes apearFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes apearFromTop {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (${breakpoints.downMd}) {
    .hide-sm {
      display: none !important;
    }
  }

  @media (${breakpoints.md}) {
    .hide-md {
      display: none !important;
    }

    .flex-md {
      display: flex;
    }

    .flex-column-md {
      flex-direction: column;
    }

    .justify-center-md {
      display: flex;
      justify-content: center;
    }

    .justify-space-between-md {
      display: flex;
      justify-content: space-between;
    }

    .justify-start-md {
      display: flex;
      justify-content: flex-start;
    }

    .align-center-md {
      display: flex;
      align-items: center;
    }
  }
`;

export default utils;
