import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Footer = styled.footer`
  display: flex;
  position: static;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  height: auto;
  color: ${props => props.theme.colors.background};
  padding: 5rem 14vw;
  gap: 100%;
  background: ${props => props.theme.colors.black};
  border-top: 1px solid #181818;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 1.25rem;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    gap: 0.625rem;
    flex-direction: column;
    align-items: center;
  }
`
export const Item = styled.div`
  display: flex;
  gap: 1rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    flex-direction: column;
  }
`
export const FooterImage = styled.div`
  margin-top: 0.1rem;
  min-width: 2.813rem;
  min-height: 2.813rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Details = styled.p`
  text-align: left;
  max-width: 49.625rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.typography.normal};

  @media ${breakpoints.lessThan(sizes.tablet)} {
    font-size: ${({ theme }) => theme.typography.normal};
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`
export const ReactRotate = styled.div`
  -webkit-animation: rotate 5s linear 0s infinite normal both;
  animation: rotate 5s linear 0s infinite normal both;
`
