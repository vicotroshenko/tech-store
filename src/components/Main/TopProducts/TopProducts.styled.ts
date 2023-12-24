import styled from "styled-components";
import { ItemWrapper } from "../../ProductCard/CardItem/CardItem.styled";


export const CategoryList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	gap: 10px;
	width: 100%;
	margin-top: 25px;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	@media (min-width: ${({ theme }) => theme.media.tablet}){
		grid-template-columns: 208px 1fr;
		justify-content: space-between;
	}
	/* @media (min-width: ${({ theme }) => theme.media.desctop}){
		& > ${ItemWrapper}:nth-child(n+6) {
			display: none;
		}
	} */

	& > div:first-child {
		@media (min-width: ${({ theme }) => theme.media.tablet}){
			position: sticky;
			top: 10px;
	}
	}

	& > div:last-child {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(235px, 235px));
	}
`