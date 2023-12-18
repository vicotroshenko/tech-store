import styled from "styled-components";


export const UserIconButton = styled.button`
	display: block;
	width: 36px;
	height: 36px;
	border: none;
	border-radius: 50%;
	background-color: inherit;
	padding: 0;
	cursor: pointer;

	& > img {
		transition: all 250ms ease;
	}
	&:hover img{
		transform: scale(1.1);
	}
`;