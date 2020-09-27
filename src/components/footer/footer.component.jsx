import React from "react"
import { FooterContainer, Option, Copyright, Subscribe } from "./footer.styles"
import CustomButton from "../custom-button/custom-button.component"

const Footer = () => (
  <FooterContainer>
    <div className="options">
      <Option to="/shop">SHOP</Option>
      <Option to="/contact">CONTACT</Option>
    </div>
    <Subscribe>
      <input type="text" placeholder="NAME @EMAIL.COM" />
      <CustomButton>SUBSCRIBE</CustomButton>
    </Subscribe>
    <Copyright>Copyright © 2020 Amelie Rose. All rights reserved.</Copyright>
  </FooterContainer>
)

export default Footer
