import { IAboutUsCardProps } from "../../../../types";
import { NewsItem } from "./SocialMediaItem.styled";

interface SocialMediaItemPros extends Pick<IAboutUsCardProps, "image" | "alt"> {
  text: string;
  data: string;
}

const SocialMediaItem: React.FC<SocialMediaItemPros> = ({
  image,
  alt = "",
  text = "",
  data = "",
}) => {
  return (
    <NewsItem>
      <div>
        <img src={image} alt={alt} loading="lazy" />
      </div>
      <div>
        <p>{text}</p>
        <span>{data}</span>
      </div>
    </NewsItem>
  );
};

export default SocialMediaItem;
