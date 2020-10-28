import React, { useEffect } from "react"
import { createStructuredSelector } from "reselect"

import Directory from "../../components/directory/directory.component"
import Hero from "../../components/hero/hero.component"
import { selectLoaderLoading } from "../../redux/loader/loader.selector"
import { HomePageContainer } from "../homepage/homepage.styles"
import { connect } from "react-redux"

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
  isLoading: selectLoaderLoading,
})

export default connect(mapStateToProps)(HomePage)
