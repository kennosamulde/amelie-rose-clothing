import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterContainer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 30px 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`

export const Option = styled(Link)`
  margin: 10px;
  color: white;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: darkgray;
  }
`

export const Subscribe = styled.div`
  display: flex;
  margin: 30px 0;

  @media (max-width: 795px) {
    flex-direction: column;
  }

  button {
    border: solid 1px white;

    &:hover {
      border: solid 1px white;
      background: #f8f8f8;
    }
  }

  input[type="text"] {
    min-width: 300px;
    padding: 5px 10px;
    font-family: "Poppins";
    border: none;
    border: solid 1px white;
    border-right: none;

    &::placeholder {
      color: black;
    }
  }
`

export const Copyright = styled.p`
  color: darkgray;
`
