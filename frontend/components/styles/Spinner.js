import React from "react";
import styled from "styled-components";

const Spinner = () => (
  <SpinnerContainer>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="25"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
    <p className="title">loading</p>
  </SpinnerContainer>
);

const SpinnerContainer = styled.div`
  display: flex;
  color: ${props => props.theme.yellow};
  font-family: stylish;
  font-style: italic;
  font-size: 1.1rem;
  letter-spacing: 1px;
  .title {
    animation: opacity 1.5s ease-out infinite;
    margin: 7px 0 0 -45px;
  }
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -8px 0 0 5px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: ${props => props.theme.yellow};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
