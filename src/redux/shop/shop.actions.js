import ShopActionTypes from "./shop.types"

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
})

export const toggleIsLoading = () => ({
  type: ShopActionTypes.IS_LOADING,
})
