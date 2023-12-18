import { ButtonWrapper } from "./CloseButton.styled";
import { ReactComponent as CloseIcon } from "../../images/close-icon.svg";
import { ISearchActiveProps } from "../../types";

interface ICloseButtonProps extends ISearchActiveProps {
	handleClick?: (e: any) => void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({ handleClick, searchActive=false }) => {
	return (
		<ButtonWrapper type="button" onClick={handleClick} searchActive={searchActive}>
			<CloseIcon/>
		</ButtonWrapper>
	)
}

export default CloseButton;