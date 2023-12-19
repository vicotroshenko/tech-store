import styled from "styled-components";


export const TitileContainer = styled.div`
	display: inline-block;
	line-height: 1.32;
	color: ${({ theme }) => theme.common.text_secondary};

	& > h2 {
		font-size: 38px;
		font-weight: 500;
	}

	& > p {
		margin-top: 9px;
		font-size: 16px;
		font-weight: 300;
	}

`;