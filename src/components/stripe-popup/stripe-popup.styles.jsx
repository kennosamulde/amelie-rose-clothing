import { ReactComponent as CheckIcon } from "../../assets/check.svg"
import styled, { css } from "styled-components"

const PopupOverlayStyles = css`
  z-index: 300;
  opacity: 1;

  & > div:first-of-type {
    transform: translateY(-50px);
    opacity: 1;
  }
`

const SuccessStyles = (props) => {
  if (props.paymentSuccess) {
    return PopupOverlayStyles
  }
}

export const PopupOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), z-index 0.01s cubic-bezier(0.215, 0.61, 0.355, 1);
  ${SuccessStyles}
`

export const PopupContainer = styled.div`
  background: white;
  border: 1px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  transform: translateY(50px);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s, opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

  h3 {
    font-family: "Vollkorn";
    text-transform: titlecase;
  }

  & > * {
    margin-bottom: 20px;
  }

  span {
    font-weight: 600;
  }

  button {
    margin-top: 20px;
  }
`

export const SuccessIcon = styled(CheckIcon)`
  height: 70px;
  border-radius: 50%;
  border: solid 2px darkgray;
  padding: 10px;
  fill: darkgray;
`
