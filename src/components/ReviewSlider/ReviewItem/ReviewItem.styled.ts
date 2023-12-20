import styled from "styled-components";

type SliderProps = {
  slide: number;
};

export const ReviewConainer = styled.div`
  width: 100%;
  max-width: 1160px;
  background-color: ${({ theme }) => theme.common.bg_third};
  padding: 49px 119px 56px 119px;
  overflow: hidden;

  & > p {
    font-size: 96px;
    line-height: 1;
    display: inline-block;
    vertical-align: top;
    margin-right: 26px;
  }
`;

export const SliderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  & > a {
    display: inline-block;
    padding: 8px 26px;
    border-radius: 50px;
    border: 2px solid ${({ theme }) => theme.buttons.primery};
    color: ${({ theme }) => theme.buttons.primery};
    text-decoration: none;

    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
    transition: all 250ms ease;

    &:hover {
      outline: 2px solid ${({ theme }) => theme.buttons.primery};
    }
    &:focus {
      outline: 2px solid ${({ theme }) => theme.buttons.primery};
    }
  }
`;

export const Slider = styled.div<SliderProps>`
  display: inline-block;
  width: 850px;
  overflow: hidden;

  & ul {
    display: flex;
    justify-content: center;
    width: calc(4 * 850px);
    overflow: hidden;
    list-style-type: none;
    transition: all 300ms linear;
    transform: translateX(-${(props) => props.slide * 850}px);
  }

  & > li {
    width: 850px;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
  }
  & p:last-child {
    text-align: right;
    margin-top: 7px;
    line-height: 2;
  }
`;

export const CustomRadioInput = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #cacdd8;
  cursor: pointer;
`;

export const Switcher = styled.div`
  display: flex;
  column-gap: 10px;
  & input {
    position: absolute;
    visibility: hidden;
    opacity: 0;

    &:checked + ${CustomRadioInput} {
      background-color: #0156ff;
    }
  }
`;
