import { styled } from "styled-components";
import theme from "../../styles/thyme";

export const Container = styled.div`
  height: 30px;
  padding: ${theme.spacing.sm};
  width: fit-content;
  border-radius: ${theme.spacing.sm};
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;
