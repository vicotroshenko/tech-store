import styled from "styled-components";


export const NewsItem = styled.div`
	width: 100%;
	max-width: 235px;
	height: auto;

	& > div:first-child {
		width: 100%;
		height: auto;
	}

	& > div:last-child {
		width: 100%;
		text-align: center;
		padding: 10px 25px;

		font-size: 12px;
		font-weight: 400;
		line-height: 1.5;
		
		& > p {
			padding-bottom: 10px;
		}
		& > span {
			font-size: 10px;
			color: ${({ theme }) => theme.common.text_third_socialmedia}
		}
	}

`;