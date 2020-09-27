import { HeaderActionTypes } from "./header.types"

export const setHeader = () => ({
  type: HeaderActionTypes.SET_HEADER,
})

export const isMobile = () => ({
  type: HeaderActionTypes.IS_MOBILE,
})

export const toggleIsMenuOpen = () => ({
  type: HeaderActionTypes.IS_MENU_OPEN,
})

export const toggleIsUserHidden = () => ({
  type: HeaderActionTypes.IS_USER_HIDDEN,
})

export const toggleSearch = () => ({
  type: HeaderActionTypes.IS_SEARCH_OPEN,
})
