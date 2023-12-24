import styled from "styled-components";
import { ISearchActiveProps } from "../../../types";

export const SearchLabel = styled.label<ISearchActiveProps>`
  position: relative;
  height: 40px;
  width: 100%;
  display: ${({ searchActive }) => (!searchActive ? "none" : "block")};
  animation: wilder 250ms ease;

  @keyframes wilder {
    0% {
      width: 10%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 20px 0 30px;
  border: none;
  border-radius: 31px;
  background-color: ${({ theme }) => theme.input.bg_color};

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.common.review_color};
`;

export const SearchButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;
