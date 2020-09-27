import React, { useEffect } from "react"

import Directory from "../../components/directory/directory.component"
import Hero from "../../components/hero/hero.component"

import { HomePageContainer } from "../homepage/homepage.styles"

import { selectLoading } from "../../redux/shop/shop.selector"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const HomePage = ({ isLoading }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <HomePageContainer>
      <Hero isLoading={isLoading} />
      <Directory isLoading={isLoading} />
    </HomePageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
})

export default connect(mapStateToProps)(HomePage)
