import { ImageContainer } from './AUImage.styled';

type AUImageProps = {
	image: string;
	alt: string;
}

const AUImage:React.FC<AUImageProps> = ({image, alt}) => {
	return (
		<ImageContainer>
			<img src={image} alt={alt} />
		</ImageContainer>
	)
}

export default AUImage;