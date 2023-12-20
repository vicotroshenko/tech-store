import { useState } from "react";
import {
  CustomRadioInput,
  ReviewConainer,
  Slider,
  SliderMenu,
  Switcher,
} from "./ReviewItem.styled";

const ReviewItem = () => {
  const [checked, setChecked] = useState<string | undefined>("1");

  const handleSlider = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setChecked(event.target.dataset.number);
  };

  const checkedNum = Number(checked) - 1;

  return (
    <ReviewConainer>
      <p>"</p>
      <Slider slide={checkedNum}>
        <ul>
          <li>
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
            <p>- Tama Brown</p>
          </li>
          <li>
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
            <p>- Tama Brown</p>
          </li>
          <li>
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
            <p>- Tama Brown</p>
          </li>
          <li>
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
            <p>- Tama Brown</p>
          </li>
        </ul>
      </Slider>
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
  );
};
export default ReviewItem;
