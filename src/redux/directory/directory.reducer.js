const INITIAL_STATE = {
  sections: [
    {
      title: "women",
      imageUrl: "https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/1/7/2040x_co_ar_tr_95/1750_les_creoles_carrees_beige_002_1.jpg",
      size: "medium",
      id: 1,
      linkUrl: "shop/women",
    },
    {
      title: "men",
      imageUrl: "https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/x/x/1695x1137_co_ar_tr_95/xxx_le_collier_gourmette_gold_005.jpg",
      size: "medium",
      id: 2,
      linkUrl: "shop/men",
    },
    {
      title: "accessories",
      imageUrl: "https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/4/1/2040x_co_ar_tr_95/410_les_lunettes_soleil_red_0011_2.jpg",
      size: "large",
      id: 3,
      linkUrl: "shop/accessories",
    },
    {
      title: "jackets",
      imageUrl: "https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/4/2/2040x_co_ar_tr_95/420_la_veste_albi_lightbrown_020.jpg",
      id: 4,
      size: "small",
      linkUrl: "shop/jackets",
    },
    {
      title: "hats",
      imageUrl: "https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/6/2/2040x_co_ar_tr_95/620_le_bob_jacquemus_darknavy_002.jpg",
      id: 5,
      size: "small",
      linkUrl: "shop/hats",
    },
    {
      title: "jeans",
      imageUrl: "https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/9/1/2040x_co_ar_tr_95/910_le_de_nimes_dark_blue_1040_1.jpg",
      size: "small",
      id: 6,
      linkUrl: "shop/jeans",
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
