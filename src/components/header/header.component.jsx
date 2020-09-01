import React from "react"
import "./header.styles.scss"
import { Link } from "react-router-dom"
// lets our component have access to reducers/redux
import { connect } from "react-redux"

import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "../../redux/user/user.selector"
import { selectCartHidden } from "../../redux/cart/cart.selector"

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
      <Link className="logo-container" to="/">
        <h1 className="logo">amelie rose</h1>
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

// allows us to access the state being our root-reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

// connects our reducers/state to this component
export default connect(mapStateToProps)(Header)
