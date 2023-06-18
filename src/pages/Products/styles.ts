import styled from 'styled-components'

export const ProductsContainer = styled.div`
  margin-bottom: 6.25rem;

  .coffess-title {
    margin-bottom: 3.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: ${props => props.theme.typography.title.l};
    line-height: 130%;
    color: ${props => props.theme.colors['base-subtitle']};
  }
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
  opacity: 0.6;
  mix-blend-mode: multiply;
  z-index: -1;
`;

export const IntroSectionContainer = styled.section`
  width: 100%;
  padding: 3.75rem 0;
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  .image-container  {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      max-width: 476px;
    }
  }
  

  @media (max-width: ${props => props.theme.breakpoints.desk.medium}) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile.medium}) {
    padding: 3rem 0rem;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.desk.medium}}) {
    align-items: center;
  }

  .titles {
    margin-bottom: 4.125rem;
    max-width: 37.5rem;

    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: ${props => props.theme.typography.title.xl};
      line-height: 130%;
      color: ${props => props.theme.colors['base-title']};
      margin-bottom: 1rem;
    
      @media (max-width: ${props => props.theme.breakpoints.mobile.medium}) {
        font-size: ${props => props.theme.typography.title.l};
      }
    }

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: ${props => props.theme.typography.text.l};
      line-height: 130%;
      color: ${props => props.theme.colors['base-subtitle']};
      font-stretch: 100;
    }
  }
`

export const IntroInfosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: fit-content;

  @media (max-width: ${props => props.theme.breakpoints.tablet.medium}) {
    grid-template-columns: 1fr;
  }

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

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.desk.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.desk.small}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet.medium}) {
    grid-template-columns:  1fr;
  }
`