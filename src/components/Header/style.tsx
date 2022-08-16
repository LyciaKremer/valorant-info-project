import Link from 'next/link'
import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  height: auto;
  z-index: 10;
`

export const Nav = styled.nav`
  display: block;
`
export const LinkMenu = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background};

  :hover {
    color: ${({ theme }) => theme.colors.darkRed};
  }
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  gap: 1.5vw;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: none;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  .button {
    background: none;
    border: none;
    cursor: pointer;

    @media ${breakpoints.lessThan(sizes.desktop)} {
      display: none;
    }
  }

  .menuApps {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.background};

    @media ${breakpoints.greaterThan(sizes.desktop)} {
      display: none;
    }
  }
`
export const MenuMobile = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  top: 5rem;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  padding: 2rem 8vw;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  @media ${breakpoints.greaterThan(sizes.desktop)} {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: ${({ theme }) => theme.typography.big};
    padding: 0;
    max-width: fit-content;
  }
`
