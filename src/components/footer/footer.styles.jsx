import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #f3eee8;
  text-align: center;
  padding: 100px 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  border-top: solid 1px #ece5dc;
`

export const Option = styled(Link)`
  margin: 10px;
  color: black;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: darkgray;
  }
`

export const Subscribe = styled.div`
  display: flex;
  margin: 50px 0;

  @media (max-width: 795px) {
    flex-direction: column;
  }

  button {
    background: black;
    color: white;

    &:hover {
      border: solid 1px white;
      background: #f8f5f0;
    }
  }

  input[type="text"] {
    min-width: 300px;
    padding: 5px 10px;
    font-family: "Poppins";
    border: none;
    border: solid 1px lightgray;

    background: none;

    &::placeholder {
      color: black;
    }
  }
`

export const Copyright = styled.p`
  color: black;
`
