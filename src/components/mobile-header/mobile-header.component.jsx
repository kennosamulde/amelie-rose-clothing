import React from "react"

import { Overlay, OptionsContainer, Drawer, OptionLink, Background, About } from "./mobile-header.styles"
import { connect } from "react-redux"

import { toggleIsMenuOpen } from "../../redux/header/header.action"
import { selectHeaderIsMenuOpen } from "../../redux/header/header.selector"
import { createStructuredSelector } from "reselect"
import NavImage from "../../assets/st_ape_brand_women.jpg"

const MobileHeader = ({ isMenuOpen, toggleIsMenuOpen }) => {
  return (
    <Overlay isMenuOpen={isMenuOpen}>
      <Drawer>
        <OptionsContainer isMenuOpen={isMenuOpen}>
          <OptionLink to="/shop" onClick={() => toggleIsMenuOpen()}>
            SHOP
          </OptionLink>
          <OptionLink to="/contact" onClick={() => toggleIsMenuOpen()}>
            CONTACT
          </OptionLink>
        </OptionsContainer>
        <About isMenuOpen={isMenuOpen}>
          <h4>About the site</h4>
          <p>This website is part of my portfolio and for showcase purpose only. I do not own the images used in this site. Copyright goes to the owners.</p>
        </About>
      </Drawer>
      <Background isMenuOpen={isMenuOpen}>
        <img src={NavImage} alt="nav" />
      </Background>
    </Overlay>
  )
}

const mapStateToProps = createStructuredSelector({
  isMenuOpen: selectHeaderIsMenuOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleIsMenuOpen: () => dispatch(toggleIsMenuOpen()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader)
