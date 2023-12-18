import React from "react";
import { ReactComponent as Cart } from "../../../images/shopingCart.svg";
import { CartButton, ShowAmount } from "./ShopingCart.styled";
import { IAmountGoodsProps } from "../../../types";


const ShopingCart: React.FC<IAmountGoodsProps> = ({ amount = 0 }) => {
  return (
    <CartButton type="button">
      <Cart />
      <ShowAmount>{amount}</ShowAmount>
    </CartButton>
  );
};

export default ShopingCart;
