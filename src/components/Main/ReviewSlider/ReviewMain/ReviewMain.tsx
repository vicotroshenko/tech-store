import { useState } from "react";
import {
  CustomRadioInput,
  ReviewConainer,
  SliderMenu,
  Switcher,
} from "./ReviewMain.styled";
import Container from "../../../Container/Container";
import { useBreakpoints } from "../../../../hooks/useBreakpoints";
import ReviewSliderList from "../ReviewSliderList/ReviewSliderList";

const ReviewMain: React.FC = () => {
  const [checked, setChecked] = useState<string | undefined>("1");
  const { isTablet, isLaptop } = useBreakpoints();

  const handleSlider = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setChecked(event.target.dataset.number);
  };

  const checkedNum = Number(checked) - 1;

  return (
    <>
      {(isTablet || isLaptop) && (
        <Container>
          <ReviewConainer>
            <p>"</p>
            <ReviewSliderList slide={checkedNum} />
            <SliderMenu>
              <a href="/">Leave Us A Review</a>
              <Switcher>
                <label>
                  <input
                    type="radio"
                    onChange={handleSlider}
                    name="slider"
                    data-number="1"
                    checked={"1" === checked}
                  />
                  <CustomRadioInput></CustomRadioInput>
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={handleSlider}
                    name="slider"
                    data-number="2"
                    checked={"2" === checked}
                  />
                  <CustomRadioInput></CustomRadioInput>
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={handleSlider}
                    name="slider"
                    data-number="3"
                    checked={"3" === checked}
                  />
                  <CustomRadioInput></CustomRadioInput>
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={handleSlider}
                    name="slider"
                    data-number="4"
                    checked={"4" === checked}
                  />
                  <CustomRadioInput></CustomRadioInput>
                </label>
              </Switcher>
            </SliderMenu>
          </ReviewConainer>
        </Container>
      )}
    </>
  );
};
export default ReviewMain;
