import { ImageContainer, ItemWrapper, PriceBox, ReviewsLink, Subtitle } from "./CardItem.styled";
import { IData } from "../../../redux/productsSlice";
import Availability from "../Availability/Availability";
import StarsRating from "../StarsRating/StarsRating";


interface CardItemProps {
  items: IData;
}

const CardItem: React.FC<CardItemProps> = ({ items }) => {

  const availableStatus = items.stock > 0;
  const priceWithDiscount: string = (
    items.price -
    items.price * (items.discountPercentage / 100)
  ).toFixed(2);
	

  return (
    <ItemWrapper>
      <div>
        <Availability available={availableStatus} />
        <ImageContainer>
          <img src={items.thumbnail} alt={items.title} />
        </ImageContainer>
        <StarsRating rating={items.rating}/>
        <ReviewsLink href="/">
          Reviews<span>({4})</span>
        </ReviewsLink>
        <Subtitle>{items.title}</Subtitle>
        <PriceBox>
          <p>${items.price.toFixed(2)}</p>
          <p>${priceWithDiscount}</p>
        </PriceBox>
      </div>
    </ItemWrapper>
  );
};

export default CardItem;

