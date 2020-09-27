import React from "react"
import { withRouter } from "react-router-dom"

import { connect } from "react-redux"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import UserDropDown from "../user-dropdown/user-dropdown.component"
import SearchIcon from "../search-icon/search-icon.component"

import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "../../redux/user/user.selector"
import { selectCartHidden } from "../../redux/cart/cart.selector"
import { selectHeaderIsUserHidden } from "../../redux/header/header.selector"

import { toggleIsUserHidden } from "../../redux/header/header.action"
import { HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink, LogIcon } from "./header.styles"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      setHeader: false,
      isMobile: false,
    }

    this.handleIsMobile = this.handleIsMobile.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    if (window.scrollY >= 60) {
      this.setState({ setHeader: true })
    } else {
      this.setState({ setHeader: false })
    }
  }

  handleIsMobile() {
    if (window.innerWidth < 796) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleIsMobile)
    this.handleIsMobile()
  }

  render() {
    const { hidden, currentUser, isUserHidden, dispatch, isLoading } = this.props
    const { setHeader, isMobile } = this.state

    return (
      <HeaderContainer header={setHeader} isLoading={isLoading}>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>
        </OptionsContainer>
        <LogoContainer to="/">
          <Logo>{isMobile ? "ar" : "amelie rose"}</Logo>
        </LogoContainer>
        <OptionsContainer>
          <SearchIcon />
          <CartIcon />
          <LogIcon onClick={() => dispatch(toggleIsUserHidden())} />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
        {!isUserHidden ? <UserDropDown currentUser={currentUser} /> : null}
      </HeaderContainer>
    )
  }
}

// allows us to access the state being our root-reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  isUserHidden: selectHeaderIsUserHidden,
})

// connects our reducers/state to this component
export default withRouter(connect(mapStateToProps)(Header))
