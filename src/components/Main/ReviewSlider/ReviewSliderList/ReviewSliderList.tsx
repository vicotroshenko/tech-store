import { ISlide } from "../../../../types";
import { Slider } from "./ReviewSliderList.styled";


const ReviewSliderList: React.FC<ISlide> = ({ slide }) => {
	return (
		<Slider slide={slide}>
		<ul>
			<li>
				<p>
					My first order arrived today in perfect condition. From the time
					I sent a question about the item to making the purchase, to the
					shipping and now the delivery, your company, Tecs, has stayed in
					touch. Such great service. I look forward to shopping on your
					site in the future and would highly recommend it.
				</p>
				<p>- Tama Brown</p>
			</li>
			<li>
				<p>
					My first order arrived today in perfect condition. From the time
					I sent a question about the item to making the purchase, to the
					shipping and now the delivery, your company, Tecs, has stayed in
					touch. Such great service. I look forward to shopping on your
					site in the future and would highly recommend it.
				</p>
				<p>- Tama Brown</p>
			</li>
			<li>
				<p>
					My first order arrived today in perfect condition. From the time
					I sent a question about the item to making the purchase, to the
					shipping and now the delivery, your company, Tecs, has stayed in
					touch. Such great service. I look forward to shopping on your
					site in the future and would highly recommend it.
				</p>
				<p>- Tama Brown</p>
			</li>
			<li>
				<p>
					My first order arrived today in perfect condition. From the time
					I sent a question about the item to making the purchase, to the
					shipping and now the delivery, your company, Tecs, has stayed in
					touch. Such great service. I look forward to shopping on your
					site in the future and would highly recommend it.
				</p>
				<p>- Tama Brown</p>
			</li>
		</ul>
	</Slider>
	)
}


export default ReviewSliderList