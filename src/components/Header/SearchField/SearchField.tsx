import { ISearchActiveProps } from "../../../types";
import SearchButton from "../SearchButton/SearchButton";
import { SearchInput, SearchLabel, SearchButtonOverlay } from "./SearchField.styled";

const SearchField: React.FC<ISearchActiveProps> = ({ searchActive=false }) => {
	return (
		<SearchLabel searchActive={searchActive}>
			<SearchInput type="text" placeholder="Search entiere store here..."/>
			<SearchButtonOverlay>
				<SearchButton/>
			</SearchButtonOverlay>
		</SearchLabel>
	)
}

export default SearchField;