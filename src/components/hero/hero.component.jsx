import React from "react"
import { withRouter } from "react-router-dom"

import "./hero.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

const Hero = ({ history, isLoading }) => (
  <div className={isLoading ? "hero" : "hero show"}>
    <h1>The Collection</h1>
    <p className="hero-p">Amelie Rose, a contemporary brand for men and women with an exciting range of luxury leather, denim and ready-to-wear products.</p>
    <span>Shop now</span>
    <div>
      <CustomButton
        transparent
        onClick={() => {
          history.push("/shop/mens")
        }}
      >
        men
      </CustomButton>
      <CustomButton
        transparent
        onClick={() => {
          history.push("/shop/womens")
        }}
      >
        women
      </CustomButton>
    </div>
  </div>
)

export default withRouter(Hero)
