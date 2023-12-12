import Container from "../../Container/Container";
import AdvText from "../AdvText/AdvText";
import { AdvInContainer } from "./AvdContainer.styled";

const AdvContainer = () => {
	return (
		<>
			<Container>
				<AdvInContainer placement="left">
					<AdvText 
						subtitle="A Family That Keeps On Growing" 
						text1="We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store."/>
				</AdvInContainer>
			</Container>
		</>
	)
}

export default AdvContainer;