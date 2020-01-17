import styled, { keyframes } from "styled-components";
import { ISpinner } from "./ISpinner";

const load8 = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  
`;

const Spinner = styled.div<ISpinner>`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(238, 39, 119, 0.2);
  border-right: 1.1em solid rgba(238, 39, 119, 0.2);
  border-bottom: 1.1em solid rgba(238, 39, 119, 0.2);
  border-left: 1.1em solid #ee2777;
  transform: translateZ(0);
  animation: ${load8} 1.1s infinite linear;

  border-radius: 50%;
  width: ${({ size = 10 }) => size}em;
  height: ${({ size = 10 }) => size}em;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

export default Spinner;
