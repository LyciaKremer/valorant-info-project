import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Card = styled.div`
  display: flex;
  padding: 1.75rem;
  gap: 2.938rem;
  border-radius: 1rem;
  border-style: solid;
  border-width: 0.063rem;
  border-color: ${({ theme }) => theme.colors.grayLight2};
  background: ${({ theme }) => theme.colors.background};
  max-width: 23.813rem;
  margin-top: 20px;
  flex-direction: column;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TitleBox = styled.div`
  display: flex;
  text-align: center;
  gap: 1.75rem;
`
export const Name = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.fullBlack};
  font-size: ${({ theme }) => theme.typography.big};
`
export const Description = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grayLight4};
  font-size: ${({ theme }) => theme.typography.small};
  text-align: start;
  margin-top: 1rem;
`
export const Abilities = styled.div`
  color: #765222;
  font-size: 0.875rem;
  text-align: center;
`
