import React, { useState } from "react"
import "./header.styles.scss"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"
// lets our component have access to reducers/redux
import { connect } from "react-redux"

const Header = ({ currentUser }) => {
  const [header, setHeader] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <div className={header ? "header scrolled" : "header"}>
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
}

// allows us to access the state being our root-reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

// connects our reducers/state to this component
export default connect(mapStateToProps)(Header)
