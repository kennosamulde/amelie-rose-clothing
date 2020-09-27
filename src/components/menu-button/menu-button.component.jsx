import React, { useState } from "react"
import { MenuButtonContainer } from "./menu-button.styles"

import { connect } from "react-redux"
import { toggleIsMenuOpen } from "../../redux/header/header.action"
import { selectHeaderIsMenuOpen } from "../../redux/header/header.selector"
import { createStructuredSelector } from "reselect"

const MenuButton = ({ toggleIsMenuOpen, isMenuOpen }) => {
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    toggleIsMenuOpen()
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1000)
  }

  return (
    <MenuButtonContainer isMenuOpen={isMenuOpen} onClick={handleClick} disabled={disabled}>
      <div className="menu-bars" />
      <div className="menu-bars" />
    </MenuButtonContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  isMenuOpen: selectHeaderIsMenuOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleIsMenuOpen: () => dispatch(toggleIsMenuOpen()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton)
