import React from "react"
import "./cart-item.styles.scss"

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
    <div className="cart-item">
      <div className="item-image">
        <img src={imageUrl} alt="item" />
      </div>

      <div className="item-details">
        <span className="name">{limitTitle(name)}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
