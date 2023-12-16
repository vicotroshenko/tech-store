import {ReactComponent as ItemAvailable} from "../../../images/itemAvailable.svg";
import {ReactComponent as ItemNeedCheck} from "../../../images/itemNeedCheck.svg";
import { AvailableTextColor } from "./Availability.styled";

type AvailabilityProps = {
	available: boolean;
}

const Availability: React.FC<AvailabilityProps> = ({ available }) => {

	if(available) {
		return (
			<AvailableTextColor available={available}>
				<ItemAvailable/>
				<p>in stock</p>
			</AvailableTextColor>
		)
	} else {
		return (
			<AvailableTextColor available={available}>
				<ItemNeedCheck/>
				<p>check availability</p>
			</AvailableTextColor>
		)
	}
}

export default Availability;