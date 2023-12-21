import styled from "styled-components";


export const PromInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding-top: 61px;
	padding-bottom: 45px;
	@media (min-width: ${({ theme }) => theme.media.tablet}){
		flex-direction: row;
		justify-content: space-evenly;
	}
`