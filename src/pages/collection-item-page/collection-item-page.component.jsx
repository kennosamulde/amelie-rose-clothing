import React from "react"
import { connect } from "react-redux"

import { CollectionItemPageContainer, Navigator, ProductContainer, ImageContainer, InfoContainer } from "./collection-item-page.styles"
import { Link } from "react-router-dom"
import { selectCollection } from "../../redux/shop/shop.selector"
import { addItem } from "../../redux/cart/cart.actions"
import CustomButton from "../../components/custom-button/custom-button.component"

const CollectionItemPage = ({ collection, match, history, dispatch }) => {
  const item = collection.items.find((item) => item.id === parseInt(match.params.collectionItemId))
  const { name, imageUrl, price } = item
  const { routeName, title } = collection

  return (
    <CollectionItemPageContainer>
      <ProductContainer>
        <ImageContainer>
          <img src={imageUrl} alt="item" />
        </ImageContainer>
        <InfoContainer>
          <Navigator>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <Link to={`/shop/${routeName}`}>{title}</Link>
            <span>/</span>
            <Link to={`${match.url}`}>{name}</Link>
          </Navigator>

          <h2>{name}</h2>
          <h3>${price}.00 USD</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis, similique maxime quas incidunt natus hic repellat nulla dolorum eius. Et eaque tempora quos nemo! Sunt suscipit reiciendis voluptate veritatis.</p>
          <CustomButton
            onClick={() => {
              dispatch(addItem(item))
              history.push("/checkout")
            }}
          >
            Buy now
          </CustomButton>
        </InfoContainer>
      </ProductContainer>
    </CollectionItemPageContainer>
  )
}

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionItemPage)
