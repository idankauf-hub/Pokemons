import { styled } from "styled-components";
import theme from "../../styles/thyme";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  width: 250px;
  min-height: 40px;
  padding: ${theme.spacing.md};
  border-radius: ${theme.spacing.sm};
  background-color: ${theme.colors.white};
  box-shadow: 2px ${theme.spacing.xs} 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
