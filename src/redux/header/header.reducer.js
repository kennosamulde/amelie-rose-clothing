import { HeaderActionTypes } from "./header.types"

const INITIAL_STATE = {
  setHeader: false,
  isMobile: false,
  isUserHidden: true,
  isMenuOpen: false,
  isSearchOpen: false,
}

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.SET_HEADER:
      return {
        ...state,
        setHeader: !state.setHeader,
      }
    case HeaderActionTypes.IS_MOBILE:
      return {
        ...state,
        isMobile: !state.isMobile,
      }
    case HeaderActionTypes.IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    case HeaderActionTypes.IS_USER_HIDDEN:
      return {
        ...state,
        isUserHidden: !state.isUserHidden,
      }
    case HeaderActionTypes.IS_SEARCH_OPEN:
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      }
    default:
      return state
  }
}

export default headerReducer
