import styled from "styled-components";

export const ItemWrapper = styled.li`
  max-width: 235px;
  height: 346px;
  border-radius: 12px;
  list-style-type: none;

  & > div {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 346px;
    padding: 0 25px 0 25px;
    text-decoration: none;
    color: inherit;
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
