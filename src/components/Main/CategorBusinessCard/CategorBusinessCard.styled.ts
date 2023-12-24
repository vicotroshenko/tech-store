import styled from "styled-components";
import { IImageProps } from "../../../types";

export const BusinessCard = styled.div<IImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 233px;
  height: 346px;
  margin: 0 auto;
  padding-top: 160px;
  padding-bottom: 31px;
  background-image: url(${({ image }) => image});
  background-position: top;
  background-repeat: no-repeat;
  animation: bg_move 90s infinite ease;

  &:hover {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url(${({ image }) => image});
  }

  & > p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.common.text_secondary};
  }


  @keyframes bg_move {
    0% {
      background-position: center;
      background-size: 120%;
    }
    25% {
      background-position: top;
      background-size: 100%;
    }
    50% {
      background-position: center;
      background-size: 100%;
    }
    75% {
      background-position: bottom;
      background-size: 140%;
    }
    100% {
      background-position: center;
      background-size: 100%;
    }
  }
`;
