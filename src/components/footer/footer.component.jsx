import React from "react"
import "./footer.styles.scss"
import { Link } from "react-router-dom"

const Footer = () => (
  <div className="footer">
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/signIn">
        SIGN IN
      </Link>
    </div>
    <p className="copyright">Copyright © 2020 Amelie Rose. All rights reserved.</p>
  </div>
)

export default Footer
