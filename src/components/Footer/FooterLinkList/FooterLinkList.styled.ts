import styled from "styled-components";


export const ListContainer = styled.div`
	color: ${({ theme }) => theme.common.text_secondary};
	max-width: 230px;
	width: 100%;

	& > h3 {
		color: ${({ theme }) => theme.common.text_footer_subtitle};
		font-size: 14px;
		font-weight: 700;
		line-height: 1;
	}

	& > ul {
		list-style-type: none;
		font-size: 13px;
		font-weight: 400;
		line-height: 1.4;
		padding: 0;
		margin: 14px 0 0 0;

		& a {
			color: inherit;
			text-decoration: none;
			transition: all 1050ms ease;

			&:hover {
				text-decoration: underline;
			}
			&:focus {
				text-decoration: underline;
			}
		}
	}
`