import styled from "styled-components";
import heroBgImage from "../../../images/hero.jpg";
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
      background-image: url(${heroBgImage});
    }
    & > div:nth-child(3) {
      background-image: url(${heroBgImage});
    }
  }

	/* @keyframes autoSlider {
		0% {
			transform: translateX(calc(0 * 1400px));
		}
		5% {
			transform: translateX(calc(-1 * 1400px));
		}
		25% {
			transform: translateX(calc(-1 * 1400px));
		}
		30% {
			transform: translateX(calc(-2 * 1400px));
		}
		50% {
			transform: translateX(calc(-2 * 1400px));
		}
		55% {
			transform: translateX(calc(-1 * 1400px));
		}
		75% {
			transform: translateX(calc(-1 * 1400px));
		}
		95% {
			transform: translateX(calc(0 * 1400px));
		}
		100% {
			transform: translateX(calc(0 * 1400px));
		}
	} */
`;
