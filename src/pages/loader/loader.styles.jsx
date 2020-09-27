import styled from "styled-components"

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: ${({ isLoading }) => (isLoading ? 6000 : "-1")};
  padding: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.01s cubic-bezier(0.075, 0.82, 0.165, 1) 3.1s;
`

export const LoaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transform: translateY(${({ isLoading }) => (isLoading ? 0 : "-100%")});
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 2s;

  h1 {
    color: black;
    transform: translateY(-40px);
    font-family: "Vollkorn SC";
    font-weight: normal;
    opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    font-size: 40px;

    span {
      font-family: "Poppins";
      font-size: 12px;
    }
  }
`
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e0e0e0;
  transform: translateY(${({ isLoading }) => (isLoading ? 0 : "-100%")});
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 3s;
`
