import { IImageProps } from "../../../types";
import { BusinessCard } from "./CategorBusinessCard.styled";

interface CategorBusinessCardProps extends IImageProps {
  title: string;
  link: string;
}

const CategorBusinessCard: React.FC<CategorBusinessCardProps> = ({
  image,
  title,
  link = "/",
}) => {
  return (
    <BusinessCard image={image} href={link}>
      <p>{title}</p>
      <p>See All Products</p>
    </BusinessCard>
  );
};

export default CategorBusinessCard;
