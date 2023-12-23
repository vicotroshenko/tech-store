import { ISearchActiveProps } from "../../../types";
import { NavContainer, NavLink, NavList } from "./HeaderNav.styled";

const HeaderNav: React.FC<ISearchActiveProps> = ({ searchActive = false }) => {
  return (
    <NavContainer searchActive={searchActive}>
      <NavList>
        <li>
          <NavLink href="/">Products</NavLink>
        </li>
        <li>
          <NavLink href="/">Shopping Cart</NavLink>
        </li>
        <li data-name="deals">
          <NavLink href="/">Our Deals</NavLink>
        </li>
      </NavList>
    </NavContainer>
  );
};

export default HeaderNav;
