import styled from "styled-components";

export const CartButton = styled.button`
  width: 25px;
  height: 25px;
  position: relative;

  border: none;
  background-color: inherit;
  padding: 0;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;
    transition: transform 250ms ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const ShowAmount = styled.span`
  display: block;
  position: absolute;
  top: -7px;
  right: -7px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttons.primery};
  font-size: 10px;
  line-height: 1.6;
  font-weight: 700;
  color: ${({ theme }) => theme.common.text_secondary};
  text-align: center;
`;
