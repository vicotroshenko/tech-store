import styled from "styled-components";

export const ItemWrapper = styled.li`
  position: relative;
  max-width: 235px;
  height: 346px;
  border-radius: 12px;
  list-style-type: none;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms ease;

  & > div {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 346px;
    padding: 0 25px 0 25px;
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding-top: 200px;
  }
  &:focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;

export const Subtitle = styled.h3`
    font-size: 13px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  margin: 0 auto;
  overflow: hidden;
  transition: all 250ms ease;
  ${ItemWrapper}:hover & {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    max-height: 60%;
    z-index: 4;
  }
  ${ItemWrapper}:focus & {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    max-height: 50%;
    z-index: 4;
  }
`;

export const ReviewsLink = styled.a`
  margin-left: 9px;
  font-size: 12px;
  font-weight: 400;
  line-height: 2.1;
  color: ${({ theme }) => theme.common.review_color};
  text-decoration: none;
  vertical-align: bottom;

  transition: all 250ms ease;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
`;

export const PriceBox = styled.div`
  width: 100vw;
  max-height: 75px;
  height: 100vh;
  padding-top: 15px;

  & > p:first-child {
    font-size: 14px;
    line-height: 1.4;
    font-weight: 400;
    text-decoration-line: line-through;
    color: ${({ theme }) => theme.common.text_price};
    & + p {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
