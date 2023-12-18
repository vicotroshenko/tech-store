import { ReactComponent as SeachIcon } from "../../../images/searchBtn.svg"
import { ISearchActiveProps } from "../../../types";
import { SearchBtn } from "./SearchButton.styled";

interface ISearchButtonProps extends ISearchActiveProps {
	handleClick?: (e: any) => void;
}

const SearchButton: React.FC<ISearchButtonProps> = ({ handleClick, searchActive=false }) => {
	return (
		<SearchBtn type="button" onClick={handleClick} searchActive={searchActive}>
			<SeachIcon/>
		</SearchBtn>
	)
}

export default SearchButton;