import React, { useEffect } from "react"
import { Route } from "react-router-dom"

import "./shop.styles.scss"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"

import WithSpinner from "../../components/with-spinner/with-spinner.component"
import CollectionItemPage from "../collection-item-page/collection-item-page.component"

import { selectCollectionsFetching } from "../../redux/shop/shop.selector"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)
const CollectionItemPageWithSpinner = WithSpinner(CollectionItemPage)

const ShopPage = ({ match, isLoading }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
      <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={isLoading} {...props} />} />
      <Route path={`${match.path}/:collectionId/:collectionItemId`} render={(props) => <CollectionItemPageWithSpinner isLoading={isLoading} {...props} />} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsFetching,
})

export default connect(mapStateToProps)(ShopPage)
