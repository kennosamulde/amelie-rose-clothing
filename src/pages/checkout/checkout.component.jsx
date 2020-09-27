import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectCartItems, selectCartTotal, selectPaymentSuccess, selectCartItemsCount } from "../../redux/cart/cart.selector"
import { togglePaymentSuccess } from "../../redux/cart/cart.actions"
import "./checkout.styles.scss"

import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"
import StripePopUp from "../../components/stripe-popup/stripe-popup.component"

const CheckoutPage = ({ cartItems, total, paymentSuccess, togglePaymentSuccess, itemsCount }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-header__mobile">
        <h4>Your orders</h4>
        <h4>{itemsCount + " " + (itemsCount > 1 ? "items" : "item")}</h4>
      </div>
      {cartItems.length ? cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) : <div className="empty-message">You have no items.</div>}
      <div className="total">TOTAL: ${total}</div>
      <StripeCheckoutButton price={total} togglePaymentSuccess={togglePaymentSuccess} />
      <div className="test-warning">
        *Please use the following test credit card for Payments*
        <br />
        4242 4242 4242 4242 - Exp: any present date ex: 9/25 - CVV: 123
      </div>
      <StripePopUp total={total} paymentSuccess={paymentSuccess} togglePaymentSuccess={togglePaymentSuccess} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  paymentSuccess: selectPaymentSuccess,
  itemsCount: selectCartItemsCount,
})

const mapDispatchToProps = (dispatch) => ({
  togglePaymentSuccess: () => dispatch(togglePaymentSuccess()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
