import styled from "styled-components";
import { ISearchActiveProps } from "../../../types";

export const NavContainer = styled.nav<ISearchActiveProps>`
  display: ${({ searchActive }) => (searchActive ? "none" : "block")};

  animation: turn_up 250ms ease;

  @keyframes turn_up {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  padding: 0;
  list-style-type: none;
  font-size: 10px;
  color: #000;
  font-weight: 600;
  line-height: normal;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(8, auto);
    grid-template-rows: 1fr;
  }
  @media (min-width: ${({ theme }) => theme.media.desctop}) {
    font-size: 14px;
    gap: 25px;
  }
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 24px;
    border-radius: 50px;
    line-height: 1.5;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover {
      color: ${({ theme }) => theme.buttons.primery};
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }

  & > li[data-name="deals"] {
    max-width: 121px;
    border: 2px solid ${({ theme }) => theme.buttons.primery};

    & > a {
      color: ${({ theme }) => theme.buttons.primery};
    }
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
