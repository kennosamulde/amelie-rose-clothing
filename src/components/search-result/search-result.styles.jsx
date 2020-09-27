import styled from "styled-components"
import { Link } from "react-router-dom"

export const Result = styled(Link)`
  display: flex;
  margin: 20px;
  flex: 30%;
  cursor: pointer;

  .container {
    height: 100px;
    width: 100px;

    margin-right: 20px;
    display: block;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .description {
    align-self: center;

    span {
      font-weight: bold;
      color: black;
    }

    p {
      font-size: 14px;
      color: darkgray;
      font-weight: normal;
    }
  }
`
