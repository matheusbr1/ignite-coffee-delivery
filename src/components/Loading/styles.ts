import styled from 'styled-components'

export const LoadingBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #000;
  opacity: 0.15;

  z-index: 9; 
`

export const LoadingSpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex; 
  align-items: center;
  justify-content: center;

  z-index: 10; 
`