import { styled } from "styled-components";
import backgroundImage from "../../assets/pokemonBackground.jpg";
import theme from "../../styles/thyme";

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    opacity: 0.8;
    z-index: -1;
  }
`;
