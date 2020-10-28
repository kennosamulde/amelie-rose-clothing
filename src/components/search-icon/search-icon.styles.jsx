import styled from "styled-components"
import { ReactComponent as Search } from "../../assets/search.svg"
import { ReactComponent as Close } from "../../assets/cancel.svg"

export const SearchIconContainer = styled.button`
  cursor: pointer;
  height: 20px;
  width: 20px;
  border: none;
  background: none;
`

export const SearchSvg = styled(Search)`
  height: 20px;
  width: 20px;
`
export const CloseSearch = styled(Close)`
  height: 18px;
  width: 18px;
`
