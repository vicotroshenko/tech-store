import { OnlyChildrenProp } from "../../../types";
import { Footer } from "./FooterMain.styled";

const FooterMain: React.FC<OnlyChildrenProp> = ({children}) => {
	return (
		<Footer>
			{children}
		</Footer>
	)
}

export default FooterMain;