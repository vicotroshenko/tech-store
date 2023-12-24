import styled from "styled-components";
import heroBgImage from "../../../images/hero.jpg";
import heroBgImage2 from "../../../images/hero2.jpg";
import heroBgImage3 from "../../../images/hero3.jpg";
import { ISlide } from "../../../types";

export const HeroSlider = styled.div<ISlide>`
  position: relative;
  width: 100%;
  min-height: 328px;
	overflow: hidden;

  & > button {
    position: absolute;
    top: 50%;
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
		z-index: 3;
		transition: all 250ms linear;
		&:hover {
			transform: translateY(-50%) scale(1.1);
		}
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
    transform: translateY(-50%);
  }
  & > div {
		display: flex;
    width: calc(3 * 1400px);
		min-height: 328px;
		transition: all 500ms linear;
		transform: translateX(-${({ slide }) => slide * 1400}px);

    & > div {
      width: 1400px;
      min-height: 328px;
			background-size: cover;
			
    }

    & > div:nth-child(1) {
      background-image: url(${heroBgImage});
    }
    & > div:nth-child(2) {
      background-image: url(${heroBgImage2});
			background-size: contain;
			background-position: center;
    }
    & > div:nth-child(3) {
      background-image: url(${heroBgImage3});
			background-position: 100% 100%;
    }
  }
`;
