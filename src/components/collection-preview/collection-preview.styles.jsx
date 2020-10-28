import styled from "styled-components"

import { ReactComponent as RightArrow } from "../../assets/right.svg"
import { Link } from "react-router-dom"

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
`
export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 5px;
`
export const RightIcon = styled(RightArrow)`
  margin-left: 10px;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const SeeMore = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    svg {
      transform: translateX(10px);
    }
  }
`
export const Title = styled.h1`
  font-size: 20px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Vollkorn";
`
export const Preview = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5vh;
  flex-wrap: wrap;
`
