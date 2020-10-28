import { createSelector } from "reselect"

const selectLoader = (state) => state.loader

export const selectLoaderLoading = createSelector([selectLoader], (loader) => loader.isLoading)
