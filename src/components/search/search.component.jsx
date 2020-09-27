import React, { useEffect } from "react"

import { SearchOverlay, SearchField, SearchResultsContainer, SearchBody } from "./search.styles"

import { selectHeaderIsSearchOpen } from "../../redux/header/header.selector.js"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toggleSearch } from "../../redux/header/header.action"

import { useImmer } from "use-immer"
import { selectCollections } from "../../redux/shop/shop.selector"
import { useRef } from "react"

import SearchResult from "../search-result/search-result.component"

const Search = ({ isSearchOpen, toggleSearch, collections }) => {
  const [state, setState] = useImmer({
    searchTerm: "",
    results: [],
    isLoading: true,
  })

  const inputField = useRef(null)

  const getItems = (term) => {
    // get all items
    const keys = Object.keys(collections)
    const items = keys.map((key) => {
      const arr = collections[key].items
      arr.forEach((item) => {
        item.category = key
      })

      return arr
    })

    // combine in one array
    const allItems = [].concat.apply([], items)

    // get filtered by search term
    const filteredItems = allItems.filter((item) => {
      return item.name.toLowerCase().includes(term.toLocaleLowerCase())
    })
    setState((draft) => {
      draft.results = filteredItems
    })
  }

  useEffect(() => {
    const searchKeyPressHandler = (e) => {
      if (e.keyCode === 27 && isSearchOpen) {
        toggleSearch()
      }
    }
    setTimeout(() => inputField.current.focus(), 1000)

    document.addEventListener("keyup", searchKeyPressHandler)
    return () => document.removeEventListener("keyup", searchKeyPressHandler)
  })

  const handleInput = (e) => {
    const value = e.target.value
    setState((draft) => {
      draft.searchTerm = value
    })
    getItems(state.searchTerm)
  }

  useEffect(() => {
    document.body.style.overflow = `${isSearchOpen ? "hidden" : "auto"}`
  })

  return (
    <SearchOverlay isSearchOpen={isSearchOpen}>
      <SearchField isSearchOpen={isSearchOpen}>
        <input onChange={handleInput} autoFocus type="text" autoComplete="off" placeholder="search here..." ref={inputField} />
        <h4>{state.results.length + " " + (state.results.length > 1 ? "items found" : "item found")}</h4>
      </SearchField>
      <SearchBody isSearchOpen={isSearchOpen}>
        <SearchResultsContainer>
          {state.results.length
            ? state.results.map((result) => {
                return <SearchResult key={result.id} result={result} />
              })
            : null}
        </SearchResultsContainer>
      </SearchBody>
    </SearchOverlay>
  )
}

const mapStateToProps = createStructuredSelector({
  isSearchOpen: selectHeaderIsSearchOpen,
  collections: selectCollections,
})

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => dispatch(toggleSearch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
