import styled from "styled-components";
import { ISearchActiveProps } from "../../../types";


export const SearchBtn = styled.button<ISearchActiveProps>`
	width: 19px;
	height: 19px;
	border: none;
	border-radius: 50%;
	background-color: inherit;
	padding: 0;
	cursor: pointer;
	display: ${({ searchActive }) => searchActive ? "none" : "block"};
	animation: showButton 250ms ease;
	
	& > svg {
		transition: transform 250ms ease;
	}
	&:hover svg {
		transform: scale(1.1);
	}
	&:focus svg {
		transform: scale(1.1);
	}

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