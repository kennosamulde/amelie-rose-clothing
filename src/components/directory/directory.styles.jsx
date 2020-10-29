import styled from "styled-components"

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transform-origin: top;
  transform: scaleY(${({ isLoading }) => (isLoading ? 1.5 : 1)});
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 3.8s;
  padding: 0 40px;

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`
