import { ReactNode } from "react";
import { ITextProps } from "../../../types";
import { PromItem } from "./PromotionalItem.styled";

interface PromotionalItemsProps extends ITextProps {
  children: ReactNode;
}

const PromotionalItem: React.FC<PromotionalItemsProps> = ({
	children,
  title,
  text,
}) => {
  return (
    <PromItem>
      <div>
				{ children }
				</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </PromItem>
  );
};

export default PromotionalItem;
