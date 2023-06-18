import styled from 'styled-components'

export const ProductCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${props => props.theme.colors['base-button']};
  border-radius: 6px;
  margin-right: 0.5rem;

  transition: all 0.2s;

  span {
    font-size: ${props => props.theme.typography.text.m};
    line-height: 130%;
    text-align: center;
    color: ${props => props.theme.colors['base-title']};
  }

  svg:hover {
    fill: ${props => props.theme.colors['purple-dark']}
  }
`
