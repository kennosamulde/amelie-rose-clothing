import React from "react"
import "./homepage.styles.scss"
import Directory from "../../components/directory/directory.component"
import Hero from "../../components/hero/hero.component"

const HomePage = () => (
  <div className="homepage">
    <Hero />
    <Directory />
  </div>
)

export default HomePage
