import { Logo, NavContainer, NavItem, NavList, StyledLink } from "./styles";
import logo from "../../assets/logo.png";

export const NavBar = () => {
  return (
    <NavContainer>
      <Logo src={logo} alt="logo" />
      <NavList>
        <NavItem>
          <StyledLink to="/">All Pokemons</StyledLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};
