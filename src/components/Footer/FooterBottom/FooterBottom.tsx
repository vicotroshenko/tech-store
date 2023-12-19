import { ReactComponent as FacebookIcon } from "../../../images/facebook-icon.svg";
import { ReactComponent as InsagramIcon } from "../../../images/instagram-icon.svg";
import Paypal from "../../../images/paypal.png";
import Visa from "../../../images/visa.png";
import Maestro from "../../../images/maestro.png";
import Discover from "../../../images/discover.png";
import AmericanExpress from "../../../images/american-express.png";
import { BottomText, FooterBottomContainer, PayIcons } from "./FooterBottom.styled";
import { useBreakpoints } from "../../../hooks/useBreakpoints";


const FooterBottom = () => {
	const { isLaptop } = useBreakpoints();
	return (
		<FooterBottomContainer>
			<PayIcons>
				<FacebookIcon/>
				<InsagramIcon/>
			</PayIcons>
			{isLaptop && <PayIcons>
				<img src={Paypal} alt="paypal"/>
				<img src={Visa} alt="visa"/>
				<img src={Maestro} alt="maestro"/>
				<img src={Discover} alt="discover"/>
				<img src={AmericanExpress} alt="american express"/>
			</PayIcons>}
			<div>
				<BottomText>Copyright © 2020 Shop Pty. Ltd.</BottomText>
			</div>
		</FooterBottomContainer>
	)
}
export default FooterBottom;