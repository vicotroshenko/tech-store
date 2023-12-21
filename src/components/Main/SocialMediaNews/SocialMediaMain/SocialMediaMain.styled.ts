import styled from "styled-components";


export const MediaList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(235px, 235px));
	width: 100%;
	justify-content: center;
	column-gap: 4px;
	row-gap: 20px;
	list-style-type: none;
	& > li {
		margin: 0 auto;
	}
`;