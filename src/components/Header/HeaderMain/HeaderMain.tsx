import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../../images/logo.svg";
import CloseButton from "../../CloseButton/CloseButton";
import HeaderNav from "../HeaderNav/HeaderNav";
import SearchButton from "../SearchButton/SearchButton";
import SearchField from "../SearchField/SearchField";
import ShopingCart from "../ShopingCart/ShopingCart";
import UserIcon from "../UserIcon/UserIcon";
import { ButtonsStore, Header, NavStore } from "./HeaderMain.styled";
import prodOperations from "../../../redux/operations";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const HeaderMain = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(prodOperations.getAllProducts())
  }, [dispatch])
  

  const handleClickSearch = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    setSearchActive(!searchActive);
  };

  return (
    <Header>
      <div>
      <Logo />
      <NavStore>
        <SearchField searchActive={searchActive} />
        <HeaderNav searchActive={searchActive} />
      </NavStore>
      <ButtonsStore>
        <CloseButton
          handleClick={handleClickSearch}
          searchActive={searchActive}
        />
        <SearchButton
          handleClick={handleClickSearch}
          searchActive={searchActive}
        />
        <ShopingCart />
        <UserIcon />
      </ButtonsStore>
      </div>
    </Header>
  );
};

export default HeaderMain;
