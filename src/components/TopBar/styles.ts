import { styled } from "styled-components";

export const TopBarContainer = styled.nav`
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .infos-wrapper {
    display: flex;
    gap: 1rem;
  }
`

export const LocationInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 4px;

  background: ${props => props.theme.colors["purple-light"]};
  border-radius: 6px;

  p {
    font-weight: 400;
    font-size: ${props => props.theme.typography.text.s}
    line-height: 130%;
    color: ${props => props.theme.colors["purple-dark"]};

    @media (max-width: ${props => props.theme.breakpoints.mobile.small}) {
      display: none;
    }
  }
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 4px;
  background: ${props => props.theme.colors["yellow-light"]};
  border-radius: 6px;
`