import ShopActionTypes from "./shop.types"

const INITIAL_STATE = {
  collections: null,
  isLoading: true,
}
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    case ShopActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    default:
      return state
  }
}

export default shopReducer
