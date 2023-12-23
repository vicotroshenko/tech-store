import styled from "styled-components";
import { ItemWrapper } from "../../ProductCard/CardItem/CardItem.styled";


export const CategoryList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(208px, 235px));
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
	overflow: hidden;
	margin-top: 25px;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	@media (min-width: ${({ theme }) => theme.media.tablet}){
		justify-content: space-between;
	}
	@media (min-width: ${({ theme }) => theme.media.desctop}){
		& > ${ItemWrapper}:nth-child(n+6) {
			display: none;
		}
	}
`