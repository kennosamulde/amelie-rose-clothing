import styled from "styled-components"
import { ReactComponent as Search } from "../../assets/search.svg"
import { ReactComponent as Close } from "../../assets/close.svg"

export const SearchIconContainer = styled.button`
  cursor: pointer;
  height: 22px;
  width: 22px;
  border: none;
  background: none;
`

export const SearchSvg = styled(Search)`
  width: 100%;
  height: 100%;
`
export const CloseSearch = styled(Close)`
  width: 100%;
  height: 100%;
`
