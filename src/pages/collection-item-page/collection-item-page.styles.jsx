import styled from "styled-components"

export const CollectionItemPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Navigator = styled.div`
  margin-bottom: 100px;

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

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`

export const ImageContainer = styled.div`
  width: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: left;
  padding-top: 70px;
  margin-bottom: 100px;

  p {
    margin: 40px 0;
    max-width: 500px;
  }
`
