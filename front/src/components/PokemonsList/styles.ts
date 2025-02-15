import { styled } from "styled-components";
import theme from "../../styles/thyme";

export const ListContainer = styled.div`
  height: 70vh;
  width: 40vw;
  margin: auto;
  padding: ${theme.spacing.md};
  border-radius: ${theme.spacing.md};
  background-color: ${theme.colors.glassWhite};
  box-shadow: 2px ${theme.spacing.xs} 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
`;
