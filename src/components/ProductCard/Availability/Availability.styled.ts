import styled from "styled-components";
import { IAvailabilityProps } from "../../../types";


export const AvailableTextColor = styled.div<IAvailabilityProps>`
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