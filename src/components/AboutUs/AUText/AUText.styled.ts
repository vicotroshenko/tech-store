import styled from "styled-components";
import { Theme } from "../../../types";

type TextContainerProps = {
	theme: Theme;
}

export const TextContainer = styled.div<TextContainerProps>`
	max-width: 565px;
	margin: 0 auto;
	h2 {
		font-size: 24px;
		font-weight: 500;
		line-height: 1.325;
	}

	p {
		margin-top: 30px;

		font-size: 14px;
		font-weight: 300;
		line-height: 1.44;
	}
	@media (min-width: ${({ theme }) => theme.media.desctop}){
		h2 {
		font-size: 34px;
	}

	p {
		margin-top: 60px;

		font-size: 18px;
	}
	}
`;

