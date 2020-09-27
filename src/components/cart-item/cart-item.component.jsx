import React from "react"

import { CartItemContainer, ItemDetails, ItemImage, ItemImageContainer, ItemName } from "./cart-item.styles"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const limitTitle = (title, limit = 17) => {
    let newTitle = []
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur)
        }
        return acc + cur.length
      }, 0)
      return `${newTitle.join(" ")} ...`
    }
    return title
  }

  return (
    <CartItemContainer>
      <ItemImageContainer>
        <ItemImage src={imageUrl} alt="item" />
      </ItemImageContainer>

      <ItemDetails className="item-details">
        <ItemName className="name">{limitTitle(name)}</ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
