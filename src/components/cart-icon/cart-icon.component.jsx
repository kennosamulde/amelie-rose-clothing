import React from "react"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItemsCount } from "../../redux/cart/cart.selector"

import { CartIconContainer, ItemCount, ShopIcon } from "./cart-icon.styles"

const CartIcon = ({ itemCount, dispatch }) => (
  <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
    <ShopIcon />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
)

const mapToStateProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

export default connect(mapToStateProps)(CartIcon)
