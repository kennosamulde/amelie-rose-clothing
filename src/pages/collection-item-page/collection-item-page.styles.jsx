import styled from "styled-components"

export const CollectionItemPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Navigator = styled.div`
  margin-bottom: 80px;

  span {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: darkgray;
    font-size: 14px;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      color: black;
    }
  }
`

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 30px;
  }
`

export const ImageContainer = styled.div`
  max-width: 400px;
  height: 400px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border: solid 1px lightgray;
  }
`

export const InfoContainer = styled.div`
  max-width: 400px;

  & > * {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 40px;
  }
`
