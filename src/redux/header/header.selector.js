import { createSelector } from "reselect"

const selectHeader = (state) => state.header

export const selectHeaderSetHeader = createSelector([selectHeader], (header) => header.setHeader)
export const selectHeaderIsMobile = createSelector([selectHeader], (header) => header.isMobile)
export const selectHeaderIsMenuOpen = createSelector([selectHeader], (header) => header.isMenuOpen)
export const selectHeaderIsUserHidden = createSelector([selectHeader], (header) => header.isUserHidden)
export const selectHeaderIsSearchOpen = createSelector([selectHeader], (header) => header.isSearchOpen)
