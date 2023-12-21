import Container from "../../Container/Container";
import { ReactComponent as LeftArrow } from "../../../images/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../images/arrow-right.svg";
import { HeroSlider } from "./Hero.styled";
import { useState } from "react";

const Hero = () => {
	const [counter, setCounter] = useState<number>(0)

	const getSlideNumber = (event:React.MouseEvent<HTMLButtonElement>) => {
		const { name } = event.currentTarget;
		if(name === "left" && counter > 0){
			setCounter(counter - 1)
		}
		if(name === "right" && counter < 2){
			setCounter(counter + 1)
		}
	}

	console.log(counter);
  return (
    <Container>
      <HeroSlider slide={counter}>
        <button type="button" name="left" onClick={getSlideNumber}>
          <LeftArrow />
        </button>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button type="button" name="right" onClick={getSlideNumber}>
          <RightArrow />
        </button>
      </HeroSlider>
    </Container>
  );
};

export default Hero;
