import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_51HMBwaIrKjnOpju5W0vdm0lm2WqOTlUWmyhIIF9HjPVNaoD342xQbUr9V4aRgehKOZjgJ5cTtMLZ1UqCAQPb8WVI00hWwCNGHQ"

  const onToken = (token) => {
    console.log(token)
    alert("Payment Successful")
  }

  return <StripeCheckout label="Pay Now" name="Amelie Rose Clothing Ltd." billingAddress shippingAddress image="https://svgshare.com/i/PBm.svg" description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />
}

export default StripeCheckoutButton
