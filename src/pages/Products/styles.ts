import styled from 'styled-components'

export const ProductsContainer = styled.div`
`

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('introBackground.svg');
  background-size: cover;
  background-position: center;
  opacity: 0.85;
  mix-blend-mode: multiply;
  z-index: -1;
`;

export const IntroSectionContainer = styled.section`
  width: 100%;
  padding: 5.375rem 0rem;
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 800;
    font-size: ${props => props.theme.typography.title.xl};
    line-height: 130%;
    color: ${props => props.theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.theme.typography.text.l};
    line-height: 130%;
    color: ${props => props.theme.colors['base-subtitle']};
    font-stretch: 100;
    margin-bottom: 4.125rem;
  }
`

export const IntroInfosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: fit-content;

  .intro-infos-grid-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    p {
      font-weight: 400;
      font-size: ${props => props.theme.typography.text.m};
      line-height: 130%;
      color: ${props => props.theme.colors['base-text']};
    }
  }
`

interface IconBackgroundCircleProps {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const IconBackgroundCircle = styled.div<IconBackgroundCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${props => props.theme.colors[props.color]};
  border-radius: 1000px;
  height: 2rem;
  width: 2rem;
`