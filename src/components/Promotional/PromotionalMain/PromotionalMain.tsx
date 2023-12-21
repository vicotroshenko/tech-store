import Container from "../../Container/Container";
import PromotionalItem from "../PromotionalItem/PromotionalItem";
import { ReactComponent as AccountPic } from "../../../images/PromotionalPics/accountPic.svg";
import { ReactComponent as SupportPic } from "../../../images/PromotionalPics/bx-support.svg";
import { ReactComponent as PricePic } from "../../../images/PromotionalPics/price-tag.svg";
import { PromInnerContainer } from "./PromotionalMain.styled";

const PromotionalMain = () => {
  return (
    <Container>
      <PromInnerContainer>
			<PromotionalItem
        title={"Product Support"}
        text={
          "Up to 3 years on-site warranty available for your peace of mind."
        }
      >
        <AccountPic />
      </PromotionalItem>

      <PromotionalItem
        title={"Personal Account"}
        text={
          "With big discounts, free delivery and a dedicated support specialist."
        }
      >
        <SupportPic />
      </PromotionalItem>

      <PromotionalItem
        title={"Amazing Savings"}
        text={"Up to 70% off new Products, you can be sure of the best price."}
      >
        <PricePic />
      </PromotionalItem>
			</PromInnerContainer>
    </Container>
  );
};

export default PromotionalMain;
