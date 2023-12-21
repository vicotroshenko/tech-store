import styled from "styled-components";
import { ISlide } from "../../../../types";

export const Slider = styled.div<ISlide>`
  display: inline-block;
  width: 550px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.media.desctop}){
      width: 850px;
  }

  & ul {
    display: flex;
    justify-content: center;
    overflow: hidden;
    list-style-type: none;
    transition: all 300ms linear;

    @media (min-width: ${({ theme }) => theme.media.tablet}){
      width: calc(4 * 550px);
      transform: translateX(-${(props) => props.slide * 550}px);
    }
    @media (min-width: ${({ theme }) => theme.media.desctop}){
      width: calc(4 * 850px);
      transform: translateX(-${(props) => props.slide * 850}px);
    }
  }

  & > li {
    width: 550px;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    @media (min-width: ${({ theme }) => theme.media.desctop}){
      width: 850px;
    }
  }
  & p:last-child {
    text-align: right;
    margin-top: 7px;
    line-height: 2;
  }
`;