import { Link } from "react-router-dom";
import { styled } from "styled-components";
import theme from "../../styles/thyme";

export const NavContainer = styled.nav`
  background-color: ${theme.colors.blue};
  height: ${theme.size.navBar};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.lg};
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  font-size: 18px;
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  height: 50px;
`;
