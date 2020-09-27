import React, { useState } from "react"

import { SearchIconContainer, SearchSvg, CloseSearch } from "./search-icon.styles"
import { connect } from "react-redux"
import { toggleSearch } from "../../redux/header/header.action"
import { createStructuredSelector } from "reselect"
import { selectHeaderIsSearchOpen } from "../../redux/header/header.selector"

const SearchIcon = ({ toggleSearch, isSearchOpen }) => {
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    toggleSearch()
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <SearchIconContainer onClick={handleClick} disabled={disabled}>
      {isSearchOpen ? <CloseSearch /> : <SearchSvg />}
    </SearchIconContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  isSearchOpen: selectHeaderIsSearchOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => dispatch(toggleSearch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchIcon)
