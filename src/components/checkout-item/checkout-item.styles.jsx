import styled from "styled-components"

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid #dadada;
  padding: 20px 0;
  font-size: 16px;
  align-items: center;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 30px;
  }

  span {
    width: 23%;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  span:nth-child(2) {
    font-weight: bold;
  }
`
export const ImageContainer = styled.div`
  width: 23%;
  height: 150px;

  @media (max-width: 1000px) {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    width: 100%;

    img {
      width: 100% !important;
      object-fit: cover;
    }
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: contain;
  }
`

export const Quantity = styled.span`
  display: flex;

  @media (max-width: 1000px) {
    margin: 0 auto;
    width: auto !important;
  }

  .arrow {
    color: darkgrey;
    cursor: pointer;
  }

  .value {
    margin: 0 20px;
  }
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 1000px) {
    padding-left: 0;
    justify-self: center;
  }
`
