import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  background: ${props => props.theme.colors['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;

  img {
    margin-top: -1rem;
    margin-bottom: 0.75rem;
  }

  .chips {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 1rem;
    
    .chip {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem 0.5rem;
      background: ${props => props.theme.colors['yellow-light']};
      border-radius: 100px;
      
      span {
        font-weight: 700;
        font-size: ${props => props.theme.typography.chip};
        line-height: 130%;
        text-transform: uppercase;
        color: ${props => props.theme.colors['yellow-dark']}
      }
    }
  }

  .product-name {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: ${props => props.theme.typography.title.s};
    line-height: 130%;
    color: ${props => props.theme.colors['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  .product-description {
    font-size: ${props => props.theme.typography.text.s};
    line-height: 130%;
    text-align: center;
    color: ${props => props.theme.colors['base-label']};
    max-width: 13.75rem;
    margin-bottom: 2rem;
  }

  .footer-actions {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 13.75rem;

    .product-price {
      flex: 1;
      font-size: ${props => props.theme.typography.title.m};
      font-weight: bold;
      line-height: 130%;
      /* text-align: right; */
      color: ${props => props.theme.colors['base-text']};
    }

    .product-counter {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      background: ${props => props.theme.colors['base-button']};
      border-radius: 6px;
      margin-right: 0.5rem;

      span {
        font-size: ${props => props.theme.typography.text.m};
        line-height: 130%;
        text-align: center;
        color: ${props => props.theme.colors['base-title']};
      }
    }

    .cart-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${props => props.theme.colors['purple-dark']}
    }
  }
`