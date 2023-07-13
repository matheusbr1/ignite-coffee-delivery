import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 3rem 0;

  @media(max-width: ${props => props.theme.breakpoints.desk.small}) {
    flex-direction: column;
  }

  .title {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: ${props => props.theme.typography.title.xs};
    line-height: 130%;
    color: ${props => props.theme.colors['base-title']};
    margin-bottom: 1rem
  }
`

export const CompleteYourOrder = styled.section`
  flex: 4;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    background: ${props => props.theme.colors['base-card']};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 2rem;
  }

  .titles {
    display: flex;
    gap: 0.5rem;
    width: 100%;

    .complete-order-title {
      color: ${props => props.theme.colors['base-subtitle']};
      font-size: ${props => props.theme.typography.text.m};
      font-weight: 400;
      line-height: 130%
    }

    .complete-order-subtitle {
      color: ${props => props.theme.colors['base-text']};
      font-size: ${props => props.theme.typography.text.s};
      font-weight: 400;
      line-height: 130%;
    }
  }
`

export const OrderAddress = styled.section`
  form {
    width: 100%;

    .full {
      width: 100%;
    }

    .w60 {
      width: 60px;
      @media(max-width: ${props => props.theme.breakpoints.tablet.medium}) {
        width: 100%;
      }
    }

    div {
      margin-bottom: 1rem;
      display: flex;
      gap: 1rem;

      @media(max-width: ${props => props.theme.breakpoints.tablet.medium}) {
        flex-direction: column;
      }
    }

    input {
      padding: 12px;
      border-radius: 4px;
      border: 1px solid ${props => props.theme.colors['base-button']};
      background:${props => props.theme.colors['base-input']};
    }
  }
`

export const OrderPayment = styled.section`
  .payment-methods {
    display: flex;
    gap: 1rem;
    width: 100%;

    @media(max-width: ${props => props.theme.breakpoints.tablet.medium}) {
      flex-direction: column;
    }

    button {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 1rem;
      border-radius: 6px;
      background: ${props => props.theme.colors['base-button']};
      span {
        color: ${props => props.theme.colors['base-text']};
        font-size: ${props => props.theme.typography.button.m};
        line-height: 160%;
        text-transform: uppercase;
        margin-left: 0.75rem;
      }
    }
  }
`

export const SelectedCoffees = styled.section`
  flex: 3;

  .card {
    background: ${props => props.theme.colors['base-card']};
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .info, .value {
      font-weight: 400;
      line-height: 130%;
      color: ${props => props.theme.colors['base-text']};
    }

    .info {
      font-size: ${props => props.theme.typography.text.s};
    }

    .value {
      font-size: ${props => props.theme.typography.text.m};
    }

    .total {
      font-weight: 700;
      font-size: ${props => props.theme.typography.text.l};
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${props => props.theme.colors['base-button']};
  margin: 1.5rem 0;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  background: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.white};
  border-radius: 6px;

  font-weight: 700;
  font-size: ${props => props.theme.typography.button.g};
  line-height: 160%;
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors['yellow-dark']};
  }
`