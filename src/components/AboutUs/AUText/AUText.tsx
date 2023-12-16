import { TextContainer } from "./AUText.styled";
import { OnlyChildrenProps } from "../../../types";


const AUText: React.FC<OnlyChildrenProps> = ({children}) => {
	return (
		<TextContainer>
			{children}
		</TextContainer>
	)
}

export default AUText;