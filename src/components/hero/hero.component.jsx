import React from "react"
import { withRouter } from "react-router-dom"

import "./hero.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import Video from "../../assets/SHORT_HOME-_1_.webm"

const Hero = ({ history, isLoading }) => (
  <div className={isLoading ? "hero" : "hero show"}>
    <div className="video-bg">
      <div className="video-text">
        <h1>
          Time to Switch
          <br />
          Things up!
        </h1>
        <p>
          Up to 85% Off on sale items +
          <br />
          Free Shipping until sale ends.
        </p>
        <CustomButton
          inverted
          onClick={() => {
            history.push("/shop")
          }}
        >
          SHOP NOW
        </CustomButton>
      </div>

      <video className="video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>

    <div className="content">
      <p className="hero-p">Amelie Rose, a contemporary brand for men and women with an exciting range of luxury leather, denim and ready-to-wear products.</p>
      <div>
        <CustomButton
          onClick={() => {
            history.push("/shop")
          }}
        >
          SHOP NOW
        </CustomButton>
      </div>
    </div>
  </div>
)

export default withRouter(Hero)
