import styled from "styled-components";
import { Theme } from "../../types";

type ContainerProps = {
	theme: Theme;
}

export const Section = styled.section<ContainerProps>`
	width: 100%;

	& > div {
		margin: 0 auto;
		max-width: 1400px;
	}
`