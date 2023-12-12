
import { Section } from "./Container.styled";
import { OnlyChildrenProps } from "../../types";



const Container:React.FC<OnlyChildrenProps> = ({ children }) => {
	return (
		<Section>
			{children}
		</Section>
	)
}

export default Container;