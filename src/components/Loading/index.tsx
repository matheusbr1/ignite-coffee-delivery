import React from 'react'
import ReactLoading from 'react-loading';
import { defaultTheme } from "../../styles/theme"
import { LoadingBackdrop, LoadingSpinnerContainer } from './styles';

export function Loading() {
  return (
    <React.Fragment>
      <LoadingBackdrop />
      <LoadingSpinnerContainer>
        <ReactLoading
          type='spin'
          color={defaultTheme.colors['purple-dark']}
          height={50}
          width={50}
        />
      </LoadingSpinnerContainer>
    </React.Fragment>
  )
}