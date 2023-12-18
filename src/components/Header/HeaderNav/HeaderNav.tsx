import { ISearchActiveProps } from "../../../types";
import { NavContainer, NavLink, NavList } from "./HeaderNav.styled";

const HeaderNav: React.FC<ISearchActiveProps> = ({ searchActive = false }) => {
  return (
    <NavContainer searchActive={searchActive}>
      <NavList>
        <li>
          <NavLink href="/">Laptops</NavLink>
        </li>
        <li>
          <NavLink href="/">Desktop PCs</NavLink>
        </li>
        <li>
          <NavLink href="/">Networking Devices</NavLink>
        </li>
        <li>
          <NavLink href="/">Printers & Scanners</NavLink>
        </li>
        <li>
          <NavLink href="/">PC Parts</NavLink>
        </li>
        <li>
          <NavLink href="/">All Other Products</NavLink>
        </li>
        <li>
          <NavLink href="/">Repairs</NavLink>
        </li>
        <li data-name="deals">
          <NavLink href="/">Our Deals</NavLink>
        </li>
      </NavList>
    </NavContainer>
  );
};

export default HeaderNav;
