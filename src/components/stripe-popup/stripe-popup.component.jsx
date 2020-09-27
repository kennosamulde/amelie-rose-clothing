import React from "react"
import { PopupOverlay, PopupContainer, SuccessIcon } from "./stripe-popup.styles"
import CustomButton from "../custom-button/custom-button.component"
import { withRouter } from "react-router-dom"

const StripePopUp = ({ total, history, togglePaymentSuccess, paymentSuccess }) => {
  return (
    <PopupOverlay paymentSuccess={paymentSuccess}>
      <PopupContainer>
        <SuccessIcon />
        <h3>Payment Successful</h3>
        <p>
          Your payment of <span>${total}.00</span> was successfully completed.{" "}
        </p>
        <CustomButton onClick={togglePaymentSuccess}>Continue Shopping</CustomButton>
      </PopupContainer>
    </PopupOverlay>
  )
}

export default withRouter(StripePopUp)
