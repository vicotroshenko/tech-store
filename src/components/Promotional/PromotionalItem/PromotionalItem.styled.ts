import styled from "styled-components";

export const PromItem = styled.div`
	width: 100%;
	max-width: 265px;
	& > div:first-child {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 65px;
		height: 65px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.buttons.primery};
	}

	& > div:last-child {
		& > h3 {
			margin-top: 24px;
			font-size: 18px;
			font-weight: 700;
			line-height: 1.32;
			text-align: center;
		}
		& > p {
			margin-top: 13px;
			font-size: 14px;
			font-weight: 400;
			line-height: 1.4; 
			text-align: center;
		}
	}
`;