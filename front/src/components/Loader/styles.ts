import { keyframes, styled } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.img`
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
`;

export const LoaderContainer = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
`;
