import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"

import { selectCartItems } from "../../redux/cart/cart.selector"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

import { CartDropDownContainer, CartItemsContainer, CartArrow, EmptyMessage } from "./cart-dropdown.styles"

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const CartDropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (CartDropdownRef && !CartDropdownRef.current.contains(e.target)) {
        dispatch(toggleCartHidden())
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  })

  return (
    <CartDropDownContainer ref={CartDropdownRef}>
      <CartArrow />
      <CartItemsContainer>{cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />) : <EmptyMessage className="empty-message">Your cart is empty.</EmptyMessage>}</CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout")
          dispatch(toggleCartHidden())
        }}
      >
        Checkout
      </CustomButton>
    </CartDropDownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
