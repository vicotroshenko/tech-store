import styled from "styled-components";

export const Header = styled.header`
  & > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 25px;
  max-width: 1400px;
  min-height: 60px;
  margin: 0 auto;
  overflow: hidden;
  }
`;

export const NavStore = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const ButtonsStore = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
