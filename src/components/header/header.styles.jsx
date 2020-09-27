import styled from "styled-components"
import { Link } from "react-router-dom"
import { ReactComponent as UserIcon } from "../../assets/user.svg"

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0px 28px;
  transition: background cubic-bezier(0.075, 0.82, 0.165, 1) 0.01s, box-shadow cubic-bezier(0.075, 0.82, 0.165, 1) 0.01s, transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 3.8s, opacity 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 3.8s;
  background: ${({ header }) => (header ? "white" : "transparent")};
  box-shadow: ${({ header }) => (header ? "10px 10px 40px 0px rgba(0, 0, 0, 0.10)" : "none")};

  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transform: translateY(${({ isLoading }) => (isLoading ? "-20px" : 0)});

  @media (max-width: 795px) {
    background: white;
  }
`

export const LogoContainer = styled(Link)`
  width: auto;
  justify-self: center;
  text-align: center;

  @media (max-width: 795px) {
    background: black;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0px 10px 10px;
  }
`
export const Logo = styled.h1`
  font-size: 26px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-family: "Vollkorn SC", serif;

  @media (max-width: 795px) {
    color: white;
    font-size: 25px;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;

  &:nth-of-type(2) {
    justify-self: flex-end;

    & > * {
      margin-right: 30px;
    }

    & > :last-child {
      margin-right: 0;
    }
  }
`
export const OptionLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 40px;
  }
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 14px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 2s;

  &:hover {
    color: lightgray;
  }

  @media (max-width: 795px) {
    display: none;
  }
`

export const LogIcon = styled(UserIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`
