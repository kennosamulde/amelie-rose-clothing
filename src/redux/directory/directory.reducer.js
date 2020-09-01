const INITIAL_STATE = {
  sections: [
    {
      title: "jackets",
      imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/saint_ape-mood-1.jpg",
      id: 1,
      linkUrl: "shop/jackets",
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
      linkUrl: "shop/mouthmasks",
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
      imageUrl: "https://shop.saint-ape.com/pub/media/wysiwyg/saint_ape-leather_jackets-mood-1.jpg",
      size: "large",
      id: 6,
      linkUrl: "shop/mens",
    },
  ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
