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
