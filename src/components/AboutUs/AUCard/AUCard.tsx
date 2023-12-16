import { ReactNode } from "react";
import Container from "../../Container/Container";
import AUImage from "../AUImage/AUImage";
import AUText from "../AUText/AUText";
import { AdvInContainer } from './AUCard.styled';

type AUCardProps = {
	placement: "left" | "right";
	image: string;
	alt: string;
	children: ReactNode;
}

const AUCard: React.FC<AUCardProps> = ({ image, alt, placement, children }) => {
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