import React from "react"

import { LoaderContainer, LoaderContent, Overlay } from "./loader.styles"
import { selectLoading } from "../../redux/shop/shop.selector"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const Loader = ({ isLoading }) => {
  return (
    <LoaderContainer isLoading={isLoading}>
      <Overlay isLoading={isLoading} />
      <LoaderContent isLoading={isLoading}>
        <h1>
          amelie rose <span>TM</span>
        </h1>
      </LoaderContent>
    </LoaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
})

export default connect(mapStateToProps)(Loader)
