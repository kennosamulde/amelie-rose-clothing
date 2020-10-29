import React from "react"
import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cart.actions"
import { withRouter } from "react-router-dom"

const CollectionItem = ({ item, addItem, history, match, routeName }) => {
  const { name, price, imageUrl, id } = item

  function addRoute() {
    if (!("collectionId" in match.params)) {
      return `/${routeName}`
    } else {
      return ""
    }
  }

  return (
    <div className="collection-item">
      <div className="image" onClick={() => history.push(`${match.url}${addRoute()}/${id}`)}>
        <img src={imageUrl} alt="" />
        <div className="circle">
          <span>view</span>
        </div>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price} USD</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem))
