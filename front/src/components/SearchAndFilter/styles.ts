import { styled } from "styled-components";
import theme from "../../styles/thyme";

export const SearchFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.lg};
  gap: ${theme.spacing.lg};
`;
