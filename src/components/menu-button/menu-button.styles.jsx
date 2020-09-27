import styled from "styled-components"

export const MenuButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 20px;
  justify-content: space-around;
  cursor: pointer;
  z-index: 4000;
  position: fixed;
  top: 20px;
  left: 58px;
  padding: 0;
  border: none;
  background: none;

  & > * {
    transform-origin: left;
  }

  @media (min-width: 795px) {
    display: none;
  }

  .menu-bars {
    display: block;
    height: 1px;
    width: 30px;
    background-color: black;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;

    &:nth-of-type(1) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? "rotate(45deg) translateY(-8px)" : "none")};
    }
    &:nth-of-type(2) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? "rotate(-45deg) translateY(8px)" : "none")};
    }
  }
`
