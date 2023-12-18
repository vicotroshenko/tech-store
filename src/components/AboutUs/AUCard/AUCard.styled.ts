import styled from "styled-components";
import { IAboutUsCardProps } from "../../../types";


export const AdvInContainer = styled.div<Pick<IAboutUsCardProps, "placement">>`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  padding: 20px;
  min-height: 421px;
  background-color: ${({ theme, placement }) => placement === "right" ? theme.common.bg_second : theme.common.bg_primary};
	color: ${({ theme, placement }) => placement === "left" || "left-main" ? theme.common.text_secondary : theme.common.bg_primary};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.media.tablet}){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    min-height: 381px;
	}
	@media (min-width: ${({ theme }) => theme.media.desctop}){
    min-height: 681px;
	}
`;
