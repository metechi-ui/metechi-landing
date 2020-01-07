import css from "styled-jsx/css";

import { colors } from "./theme";

const button = css.global`
  .button {
    cursor: pointer;
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-weight: 500;
    overflow: hidden;
    border: none;
    padding: 15px 40px;
    border-radius: 3px;
  }
  .button:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: transform 0.35s;
    transform: scaleY(0) skewY(20deg);
    transform-origin: top right;
    background-color: ${colors.lightBlue};
  }

  .button .label {
    position: relative;
    color: transparent;
    white-space: nowrap;
    font-size: 1.6rem;
  }

  .button .label:before,
  .button .label:after {
    content: attr(data-attr);
    position: absolute;
    left: 0;
    transition: all 0.35s;
    transform-origin: top right;
  }

  .button .label:before {
    top: 0;
  }
  .button .label:after {
    opacity: 0;
    top: 10px;
    transform: translateY(20px) skewY(10deg);
  }

  .button:hover:before {
    transform-origin: bottom left;
    transform: scaleY(1) skewY(0deg);
  }
  .button:hover .label:before {
    opacity: 0;
    transform: translateY(-20px) skewY(10deg);
  }
  .button:hover .label:after {
    opacity: 1;
    transform: translateY(-10px) skewY(0deg);
  }

  .button.small {
    padding: 12px 30px;
  }
  .button.small .label {
    font-size: 1.5rem;
  }

  .button.primary {
    background-color: ${colors.blue};
  }
  .button.primary .label:before,
  .button.primary .label:after {
    color: white;
  }

  .button.secondary {
    background-color: white;
    color: ${colors.grey};
    box-shadow: inset 0 0 0 1px ${colors.lightGrey};
  }
  .button.secondary:before {
    background-color: ${colors.smoke};
  }
  .button.secondary .label:before {
    color: ${colors.grey};
  }
  .button.secondary .label:after {
    color: ${colors.darkGrey};
  }
`;

export default button;
