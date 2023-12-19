import styled from "styled-components";


export const PayIcons = styled.div`
	display: flex;
	column-gap: 10px;

		& > img {
			width: 33px;
			height: 21px;
		}
`;

export const BottomText = styled.p`
	font-size: 12px;
	font-weight: 500;
	line-height: 1.32;
	color: ${({ theme }) => theme.common.text_secondary};
`;

export const FooterBottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 36px;
	padding: 17px 0;
	border-top: 1px solid white;
`;