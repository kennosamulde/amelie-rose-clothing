import styled from "styled-components"

export const CartDropDownContainer = styled.div`
  position: fixed;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 58px;
  right: 60px;
  z-index: 5;
`
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 20px;

  &::-webkit-scrollbar-track {
    background-color: #eeecec;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f8f8f8;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
  }
`
export const CartArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid black;
  position: absolute;
  top: -8px;
  right: 20px;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    position: absolute;
    right: -8px;
    top: 1px;
  }
`
export const EmptyMessage = styled.span`
  margin: 50px auto;
`
