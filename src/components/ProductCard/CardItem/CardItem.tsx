import { CardItemElemtnts } from "../../../types/index";
import Availability from "../Availability/Availability";
import StarsRating from "../StarsRating/StarsRating";
import { ImageContainer, Item, PriceBox, ReviewsLink } from "./CardItem.styled";

const CardItem: React.FC = () => {
  const items: CardItemElemtnts = {
    id: 59,
    title: "Spring and summershoes",
    price: 20,
    quantity: 3,
    total: 60,
    discountPercentage: 8.71,
    discountedPrice: 55,
    thumbnail: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
  };

  const availableStatus = items.quantity > 0;
  const priceWithDiscount: string = (
    items.price -
    items.price * (items.discountPercentage / 100)
  ).toFixed(2);
	
  return (
    <Item>
      <a href="/">
        <Availability available={availableStatus} />
        <ImageContainer>
          <img src={items.thumbnail} alt={items.title} />
        </ImageContainer>
        <StarsRating />
        <ReviewsLink href="/">
          Reviews<span>({4})</span>
        </ReviewsLink>
        <h3>{items.title}</h3>
        <PriceBox>
          <p>${items.price.toFixed(2)}</p>
          <p>${priceWithDiscount}</p>
        </PriceBox>
      </a>
    </Item>
  );
};

export default CardItem;
