import React from "react"
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItemsCount } from "../../redux/cart/cart.selector"

const CartIcon = ({ itemCount, dispatch }) => (
  <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapToStateProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

export default connect(mapToStateProps)(CartIcon)
