import React, { useEffect } from "react"
import CollectionItem from "../../components/collection-item/collection-item.component"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import "./collection.styles.scss"
import { selectCollection } from "../../redux/shop/shop.selector"

const CollectionPage = ({ collection }) => {
  const { title, items, routeName } = collection

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="collection-page">
      <div className="navigator">
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <Link to={`/shop/${routeName}`}>{title}</Link>
      </div>
      <div className="intro">
        <p>Our selection is defined by directional design and exceptional finishing. Cult favorite shapes, offered in an array of signature colors, make modern statements incorporating bold hardware, metallic finishes, and trademark detailing. Embellished clutches and zip pouches showcase exotic leathers, quilting, and studded accents, while go-to shoulder bags and duffles take a minimalist approach. Messenger bags, satchels, and document cases constructed from durable high-grade leathers similarly answer the demand for functionality by pairing expert craftsmanship with a refined aesthetic. Familiar styles balance practicality with unexpected detailing: Tote bags, backpacks, and bucket bags in unexpected textures feature playful appliqués and miniature logo charms.</p>
      </div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
