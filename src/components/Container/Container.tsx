
import { Section } from "./Container.styled";
import { OnlyChildrenProps } from "../../types";



const Container:React.FC<OnlyChildrenProps> = ({ children }) => {
	return (
		<Section>
			<div>
				{children}
			</div>
		</Section>
	)
}

export default Container;