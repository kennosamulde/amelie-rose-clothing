import React from "react"
import { Result } from "./search-result.styles"
import { connect } from "react-redux"
import { toggleSearch } from "../../redux/header/header.action"

const SearchResult = ({ result, toggleSearch }) => {
  return (
    <Result to={`/shop/${result.category}/${result.id}`} onClick={() => toggleSearch()}>
      <div className="container">
        <img src={result.imageUrl} alt="" />
      </div>
      <div className="description">
        <span>{result.name}</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, non?</p>
      </div>
    </Result>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => dispatch(toggleSearch()),
})

export default connect(null, mapDispatchToProps)(SearchResult)
