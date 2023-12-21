import styled from "styled-components";

export const ReviewConainer = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.common.bg_third};
  padding: 49px 119px 56px 119px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.media.desctop}){
    max-width: 1160px;
  }

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
  align-items: center;
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
