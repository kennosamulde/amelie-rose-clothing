import styled from "styled-components"

export const SearchOverlay = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 20;
  transform: scaleY(${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)});
  transform-origin: ${({ isSearchOpen }) => (isSearchOpen ? "top" : "bottom")};
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  padding-top: 0;
`
export const SearchField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)};
  transform: translateY(${({ isSearchOpen }) => (isSearchOpen ? 0 : "20px")});

  h4 {
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
  }

  input[type="text"] {
    margin: 20px;
    border: none;

    font-size: 30px;
    font-family: "Poppins";
    width: 450px;
    background: none;
    color: black;

    @media (max-width: 795px) {
      width: 70vw;
    }

    &::placeholder {
      font-size: 30px;
      color: grey;
      opacity: 0.5;

      font-family: "Vollkorn";
    }
  }
`

export const SearchBody = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s, opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s;
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)};
  transform: translateY(${({ isSearchOpen }) => (isSearchOpen ? 0 : "20px")});
  scrollbar-color: #dddddd transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    background-color: #eeecec;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f8f8f8;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgrey;
  }
`

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const Result = styled.div`
  display: flex;
  margin: 20px;
  flex: 30%;

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
    }

    p {
      font-size: 14px;
    }
  }
`
