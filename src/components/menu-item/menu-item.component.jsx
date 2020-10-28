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
      <p>
        Coveted classics from our premiere collection, <br></br>La Dolce Vita, have returned at a stellar price.
      </p>
      <CustomButton inverted>SHOP NOW</CustomButton>
    </div>
  </div>
)

export default withRouter(MenuItem)
