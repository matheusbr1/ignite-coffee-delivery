import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  @media(max-width: ${props => props.theme.breakpoints.desk.small}) {
    flex-direction: column;

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      img {
        display: none;
      }
    }
  }

  .titles {
    margin-bottom: 2.5rem;

    .title {
      color: ${props => props.theme.colors['yellow-dark']};
      font-family: Baloo 2;
      font-size: ${props => props.theme.typography.title.l};
      font-weight: 800;
      line-height: 130%;
    }
  
    .subtitle {
      color: ${props => props.theme.colors['base-subtitle']};
      font-size: ${props => props.theme.typography.text.l};
      font-weight: 400;
      line-height: 130%;
    }
  }
`

export const OrderInfoContainer = styled.main`
  border-radius: 6px 36px;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  background: 
    linear-gradient(white, white) padding-box, 
    linear-gradient(to right, #DBAC2C, #8047F8) border-box;
	border: 1px solid transparent;
	position: relative;
	display: inline-flex;

  .order-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .info-title {
    color: ${props => props.theme.colors['base-text']};
    font-size: 1rem;
    line-height: 130%;
  }
  
  .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50px;
  }

  .order-address .icon-circle {
    background: ${props => props.theme.colors.purple};
  }
  .order-forecast .icon-circle {
    background: ${props => props.theme.colors.yellow};
  }
  .order-payment .icon-circle {
    background: ${props => props.theme.colors['yellow-dark']};
  }
`