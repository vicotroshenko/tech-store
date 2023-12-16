import styled from "styled-components";

type TextProps = {
	available: boolean;
}
export const AvailableTextColor = styled.div<TextProps>`
	display: flex;
	column-gap: 6px;
	align-items: center;

	font-size: 10px;
	font-weight: 400;
	line-height: 2.1; 
	color: ${({theme, available}) => available ? theme.store.available : theme.store.none};
	& > svg {
		width: 10px;
		height: 10px;
	}
`;