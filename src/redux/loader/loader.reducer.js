import { LoaderActionTypes } from "./loader.types"

const INITIAL_STATE = {
  isLoading: true,
}

const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoaderActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    default:
      return state
  }
}

export default loaderReducer
