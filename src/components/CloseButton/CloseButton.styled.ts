import styled from "styled-components";
import { ISearchActiveProps } from "../../types";

export const ButtonWrapper = styled.button<ISearchActiveProps>`
	width: 19px;
	height: 19px;
	border: none;
	background-color: inherit;
	padding: 0;
	cursor: pointer;
	display: ${({ searchActive }) => !searchActive ? "none" : "block"};
	animation: showButton 250ms ease;

	@keyframes showButton {
		0% {
			display: none;
			transform: scale(0);
			opacity: 0;
		}
		100% {
			display: block;
			transform: scale(1);
			opacity: 1;
		}
	}
`;