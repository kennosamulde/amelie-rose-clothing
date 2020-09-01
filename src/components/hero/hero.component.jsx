import React from "react"
import { withRouter } from "react-router-dom"

import "./hero.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

const Hero = ({ history }) => (
  <div className="hero">
    <h1>The Collection</h1>
    <p>
      Amelie Rose, a contemporary brand for men and women with an exciting range of luxury leather, denim and ready-to-wear products.
      <br />
      <br />
      <span>Shop now</span>
    </p>
    <div>
      <CustomButton
        onClick={() => {
          history.push("/shop/mens")
        }}
      >
        men
      </CustomButton>
      <CustomButton
        inverted
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
