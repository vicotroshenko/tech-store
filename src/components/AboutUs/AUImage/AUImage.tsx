import { IAboutUsCardProps } from '../../../types';
import { ImageContainer } from './AUImage.styled';


const AUImage:React.FC<Pick<IAboutUsCardProps, "image" | "alt">> = ({image, alt}) => {
	return (
		<ImageContainer>
			<img src={image} alt={alt} />
		</ImageContainer>
	)
}

export default AUImage;