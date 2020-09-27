import React from "react"
import { auth } from "../../firebase/firebase.utils"

import { UserDropDownContainer, OptionLink } from "./user-dropdown.styles"

import { connect } from "react-redux"
import { toggleIsUserHidden } from "../../redux/header/header.action"
import { CartArrow } from "../cart-dropdown/cart-dropdown.styles"

const UserDropDown = ({ currentUser, toggleIsUserHidden }) => (
  <UserDropDownContainer>
    <CartArrow />
    {currentUser ? (
      <OptionLink
        as="div"
        onClick={() => {
          auth.signOut()
          toggleIsUserHidden()
        }}
      >
        SIGN OUT
      </OptionLink>
    ) : (
      <OptionLink
        to="/signIn"
        onClick={() => {
          toggleIsUserHidden()
        }}
      >
        SIGN IN
      </OptionLink>
    )}
  </UserDropDownContainer>
)

const mapDispatchToProps = (dispatch) => ({
  toggleIsUserHidden: () => dispatch(toggleIsUserHidden()),
})

export default connect(null, mapDispatchToProps)(UserDropDown)
