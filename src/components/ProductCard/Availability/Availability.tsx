import {ReactComponent as ItemAvailable} from "../../../images/itemAvailable.svg";
import {ReactComponent as ItemNeedCheck} from "../../../images/itemNeedCheck.svg";
import { IAvailabilityProps } from "../../../types";
import { AvailableTextColor } from "./Availability.styled";


const Availability: React.FC<IAvailabilityProps> = ({ available }) => {

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