import Container from "../../Container/Container";
import AUImage from "../AUImage/AUImage";
import AUText from "../AUText/AUText";
import { AdvInContainer } from './AUCard.styled';
import { IAboutUsCardProps } from "../../../types";


const AUCard: React.FC<IAboutUsCardProps> = ({ image, alt, placement, children }) => {
	return (
		<>
			<Container>
				<AdvInContainer placement={placement}>
					<AUText>
						{children}
					</AUText>
						<AUImage image={image} alt={alt}/>
				</AdvInContainer>
			</Container>
		</>
	)
}

export default AUCard;