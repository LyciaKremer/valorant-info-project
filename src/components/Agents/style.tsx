import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2.8rem 0;
  max-width: 1000px;

  @media ${breakpoints.lessThan(sizes.widescreen)} {
    padding: 1rem 8vw;
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    flex-direction: column;
  }
`
export const Carousel = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Buttons = styled.div`
  display: flex;
  border: none;
  justify-content: center;
  cursor: pointer;
  :first-child img {
    transform: rotate(180deg);
  }
`
export const Icon = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`
