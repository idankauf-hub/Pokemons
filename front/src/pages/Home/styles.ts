import { styled } from "styled-components";
import theme from "../../styles/thyme";

export const Container = styled.div`
  height: 100%;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;
