import { useEffect } from "react";
import CardItem from "../../ProductCard/CardItem/CardItem";
import prodOperations from "../../../redux/operations";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Container from "../../Container/Container";
import { CategoryList } from "./TopProducts.styled";
import CategorBusinessCard from "../CategorBusinessCard/CategorBusinessCard";
import BC_10 from "../../../images/bussinessCards/bussinesCard10.jpg";
import BC_2 from "../../../images/bussinessCards/bussinesCard2.jpg";
import BC_3 from "../../../images/bussinessCards/bussinesCard3.jpg";
import BC_9 from "../../../images/bussinessCards/bussinesCard9.jpg";
import BC_5 from "../../../images/bussinessCards/bussinesCard5.jpg";
import BC_6 from "../../../images/bussinessCards/bussinesCard6.jpg";
import BC_7 from "../../../images/bussinessCards/bussinesCard7.jpg";
import BC_8 from "../../../images/bussinessCards/bussinesCard8.jpg";
import { IData } from "../../../redux/productsSlice";


const TopProducts = () => {
  const dispatch = useAppDispatch();
  const {
    tops,
    smartphones,
    laptops,
    fragrances,
    skincare,
    groceries,
    furniture,
    sunglasses,
  } = useAppSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(prodOperations.getProductsByCategory("tops"));
    dispatch(prodOperations.getProductsByCategory("smartphones"));
    dispatch(prodOperations.getProductsByCategory("laptops"));
    dispatch(prodOperations.getProductsByCategory("fragrances"));
    dispatch(prodOperations.getProductsByCategory("skincare"));
    dispatch(prodOperations.getProductsByCategory("groceries"));
    dispatch(prodOperations.getProductsByCategory("furniture"));
    dispatch(prodOperations.getProductsByCategory("sunglasses"));
  }, [dispatch]);

  return (
    <Container>
      <CategoryList>
        <CategorBusinessCard image={BC_10} title={""} />
        <div>
        {tops && tops?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_2} title={"Smartphones"} />
        <div>
        {smartphones &&
          smartphones?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_3} title={"Laptops"} />
        <div>
          {laptops &&
          laptops?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_9} title={"Fragrances"} />
        <div>
          {fragrances &&
          fragrances?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_5} title={"Skincare"} />
        <div>
          {skincare &&
          skincare?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_6} title={"Groceries"} />
        <div>
          {groceries &&
          groceries?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_7} title={"Furniture"} />
        <div>
          {furniture &&
          furniture?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_8} title={"Sunglasses"} />
        <div>
          {sunglasses &&
          sunglasses?.map((item: IData) => <CardItem key={item.id} items={item} />)}
        </div>
      </CategoryList>
    </Container>
  );
};

export default TopProducts;
