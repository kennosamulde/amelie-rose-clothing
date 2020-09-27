import styled from "styled-components"
import { Link } from "react-router-dom"

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 3000;
  background: black;
  padding: 0;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  transform: scaleX(${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)});
  transform-origin: ${({ isMenuOpen }) => (isMenuOpen ? "left" : "right")};
  transition: transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);

  @media (min-width: 797px) {
    display: none;
  }
`

export const Drawer = styled.div`
  height: 100%;
  width: 60%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 58px 0 58px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 50px;
  transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? 0 : "20%")});
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s, opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`

export const OptionLink = styled(Link)`
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 16px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
  margin-bottom: 30px;

  &:hover {
    color: lightgray;
  }
`

export const Background = styled.div`
  height: 100%;
  width: 40%;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? 0 : "-100%")});
    transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s, opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`
export const About = styled.div`
  h4 {
    margin-bottom: 20px;
    transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? 0 : "120%")});
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s, opacity 0.01s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  p {
    font-size: 14px;
    transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? 0 : "20%")});
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s, opacity 0.01s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`
