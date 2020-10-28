import styled from "styled-components"
import { Link } from "react-router-dom"

export const Result = styled(Link)`
  margin: 20px;
  flex: 0 1 400px;
  cursor: pointer;
  display: flex;

  .container {
    height: 100px;
    width: 100px;
    margin-right: 20px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
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
