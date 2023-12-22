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
    dispatch(prodOperations.getAllProducts());
  }, [dispatch]);

  return (
    <Container>
      <CategoryList>
        <CategorBusinessCard image={BC_10} title={""} />
        {tops && tops?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_2} title={"Smartphones"} />
        {smartphones &&
          smartphones?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_3} title={"Laptops"} />
        {laptops &&
          laptops?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_9} title={"Fragrances"} />
        {fragrances &&
          fragrances?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_5} title={"Skincare"} />
        {skincare &&
          skincare?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_6} title={"Groceries"} />
        {groceries &&
          groceries?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_7} title={"Furniture"} />
        {furniture &&
          furniture?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
      <CategoryList>
        <CategorBusinessCard image={BC_8} title={"Sunglasses"} />
        {sunglasses &&
          sunglasses?.map((item) => <CardItem key={item.id} items={item} />)}
      </CategoryList>
    </Container>
  );
};

export default TopProducts;
