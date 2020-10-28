import styled from "styled-components"
import { Link } from "react-router-dom"

export const UserDropDownContainer = styled.div`
  border: solid 1 px black;
  position: absolute;
  top: 50px;
  right: 20px;
  border: solid 1px black;
  z-index: 500;
  padding: 10px;
  background: #f8f5f0;

  @media (max-width: 500px) {
    right: 0;
  }
`
export const OptionLink = styled(Link)`
  color: black;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`
