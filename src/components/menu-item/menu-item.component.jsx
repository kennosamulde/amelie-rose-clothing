import React from "react"
import { withRouter } from "react-router-dom"
import "./menu-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image">
      <img src={imageUrl} alt="" />
    </div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <p>Modern life has become a bombardment of toxins. From the chemicals in our foods and the ones we pump into the atmosphere, to the stress of our busy lives. That's why, as Dr. Simone Laubscher PhD puts it "our bodies have to work overtime, all the time."</p>
      <CustomButton transparent>SHOP NOW</CustomButton>
    </div>
  </div>
)

export default withRouter(MenuItem)
