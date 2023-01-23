import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Section = styled.section`
  padding: 2.8rem 0;
  background: ${({ theme }) => theme.colors.black};

  @media ${breakpoints.lessThan(sizes.widescreen)} {
    padding: 1rem 8vw;
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    flex-direction: column;
  }
`
export const Title = styled.h1`
  line-height: 112.61%;
  max-width: 34.375rem;
  font-weight: 500;
  font-size: 2.938rem;
  color: ${({ theme }) => theme.colors.background};
  line-height: 3.219rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    padding-top: 1.875rem;
    font-size: ${({ theme }) => theme.typography.big};
  }
`
export const Details = styled.p`
  text-align: left;
  max-width: 49.625rem;
  margin-top: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.typography.medium};

  @media ${breakpoints.lessThan(sizes.tablet)} {
    font-size: ${({ theme }) => theme.typography.normal};
    flex-direction: column;
  }
`
export const Button = styled.div`
  display: flex;
  max-width: 34.375rem;
  gap: 1.75rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    flex-direction: column;
    gap: 1.25rem;
  }
`
export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    margin-bottom: 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    margin-bottom: 3.75rem;
    flex-direction: column;
    gap: 1.25rem;
  }
`
export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  bottom: 0.813rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    position: relative;
    bottom: 2.313rem;
  }
`
