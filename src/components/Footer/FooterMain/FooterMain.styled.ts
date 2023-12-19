import styled from "styled-components";


export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.common.bg_primary};
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: ${({ theme }) => theme.media.mobile};
	padding-top: 47px;

	@media (min-width: ${({ theme }) => theme.media.tablet}){
		max-width: ${({ theme }) => theme.media.tablet};
	}

	@media (min-width: ${({ theme }) => theme.media.desctop}){
		max-width: ${({ theme }) => theme.media.desctop};
	}
`;

export const SubscribeTitle = styled.div`
  display: block;
  width: 100%;

	@media (min-width: ${({ theme }) => theme.media.desctop}){
		display: flex;
		justify-content: space-between;
		max-width: ${({ theme }) => theme.media.desctop};
	}
`;

export const FooterLinkBox = styled.div`
	display: flex;
  margin-top: 45px;
  justify-content: space-evenly;

	@media (min-width: ${({ theme }) => theme.media.desctop}){
		justify-content: space-between;
		max-width: ${({ theme }) => theme.media.desctop};
	}
`;