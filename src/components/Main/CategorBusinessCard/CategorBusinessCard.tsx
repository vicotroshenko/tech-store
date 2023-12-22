import { IImageProps } from "../../../types";
import { BusinessCard } from "./CategorBusinessCard.styled";

interface CategorBusinessCardProps extends IImageProps {
  title: string;
}

const CategorBusinessCard: React.FC<CategorBusinessCardProps> = ({
  image,
  title,
}) => {
  return (
    <BusinessCard image={image}>
      <p>{title}</p>
    </BusinessCard>
  );
};

export default CategorBusinessCard;
