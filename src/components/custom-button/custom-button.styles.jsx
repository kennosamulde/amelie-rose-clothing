import styled, { css } from "styled-components"

const buttonStyles = css`
  background-color: black;
  color: white;
  border: solid 1px transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedStyles = css`
  background-color: #f8f5f0;
  color: black;
  border: 1px solid rgb(218, 218, 218);

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`

const transparentStyles = css`
  background-color: transparent;
  color: black;
  border: 1px solid black;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
  }

  &:hover {
    color: white;

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: solid 1px transparent;

  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }

  if (props.transparent) {
    return transparentStyles
  }

  return props.inverted ? invertedStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 1px;
  padding: 0 35px 0 35px;
  font-family: "Poppins";
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;

  img {
    height: 20px;
    width: auto;
    margin-right: 5px;
  }

  ${getButtonStyles}
`
