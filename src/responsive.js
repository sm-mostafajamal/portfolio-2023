import { css } from "styled-components";

const devices = {
  mobile: (props) => {
    return css`
      @media only screen and (max-width: 600px) {
        ${props}
      }
    `;
  },
  tablet: (props) => {
    return css`
      @media only screen and (min-width: 601px) {
        ${props}
      }
    `;
  },
  pc: (props) => {
    return css`
      @media only screen and (min-width: 992px) {
        ${props}
      }
    `;
  },
  largePC: (props) => {
    return css`
      @media only screen and (min-width: 1200px) {
        ${props}
      }
    `;
  },
};

export default devices;
