import React from "react"
import MenuItem from "../menu-item/menu-item.component"
import "./directory.styles.scss"

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: "jackets",
          imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/saint_ape-leather_jackets-mood-1.jpg",
          id: 1,
          linkUrl: "jackets",
        },
        {
          title: "hats",
          imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/saint_ape-men-collection.jpg",
          id: 2,
          linkUrl: "shop/hats",
        },
        {
          title: "jeans",
          imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/saint_ape-denim-mood-2_square.jpg",
          id: 3,
          linkUrl: "shop/jeans",
        },
        {
          title: "mouth masks",
          imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/Mouth_masks_copy-min.jpg",
          id: 4,
          linkUrl: "shop/mouth masks",
        },
        {
          title: "womens",
          imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/saint_ape-women-collection.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/st_ape_brand_men.jpg",
          size: "large",
          id: 6,
          linkUrl: "shop/mens",
        },
      ],
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory
