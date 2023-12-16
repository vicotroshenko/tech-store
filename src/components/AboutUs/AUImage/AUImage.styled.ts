import styled from "styled-components";


export const ImageContainer = styled.div`
	height: auto; 
	width: 60%; 
	margin: 0 auto;
	padding-top: 20px;
	@media (min-width: ${({ theme }) => theme.media.tablet}){
		padding-top: 0;
		margin: auto;
	}
`;