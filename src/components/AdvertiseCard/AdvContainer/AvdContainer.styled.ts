import styled from "styled-components";
import ui from "../../../ui";

const { colors } = ui;

interface IAdvInContainerProps {
  placement?: string;
};

const getBgColor = (type: string) => {
  switch (type) {
    case "left":
      return colors.bg_primary;
    case "right":
      return colors.white_text;
    case "left-product":
      return colors.bg_primary;
    default:
      return colors.bg_primary;
  }
};

export const AdvInContainer = styled.div<IAdvInContainerProps>`
  max-width: 1920px;
  background: ${({ placement }) => getBgColor(placement || colors.bg_primary)};
	color: ${({ placement }) => placement === "left" ? colors.white_text : colors.bg_primary};
	border: 1px solid red;
`;
