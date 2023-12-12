import styled from "styled-components";

type TextContainerProps = {
	abouttype: string;
}

export const TextContainer = styled.div<TextContainerProps>`
	max-width: ${({ abouttype }) => abouttype === "product" ? '436px' : '565px'};
`;


export const Subtitle = styled.h2`
	font-size: 44px;
	font-weight: 500;
	line-height: 1.325;
`;

export const UnderSubtitleText = styled.p`
	font-size: 18px;
	font-weight: 300;
	line-height: 1.44;
`;