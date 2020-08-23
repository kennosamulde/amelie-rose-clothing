import React from "react"
import "./header.styles.scss"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
    <Link className="logo-container" to="/">
      <h1 className="logo">Amelie Rose</h1>
    </Link>
    <div className="options">
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
)

export default Header
