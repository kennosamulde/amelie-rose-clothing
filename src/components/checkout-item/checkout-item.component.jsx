import React from "react"
import { connect } from "react-redux"
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions"

import { CheckoutItemContainer, ImageContainer, Quantity, RemoveButton } from "./checkout-item.styles"

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <span className="name">{name}</span>
      <Quantity>
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </Quantity>
      <span className="price">${price}.00</span>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
