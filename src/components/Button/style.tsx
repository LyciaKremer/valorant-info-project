import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const ButtonLink = styled.div`
  display: inline;
  cursor: pointer;

  .primary,
  .secundary,
  .white,
  .whiteOutline,
  .blueOutline,
  .green,
  .success {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.313rem;
    max-width: max-content;
    text-decoration: none !important;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.typography.normal};
    transition: ${({ theme }) => theme.effects.transition};
    &:hover {
      filter: contrast(140%);
    }
    @media ${breakpoints.lessThan(sizes.tablet)} {
      max-width: 100%;
    }
  }
  .primary {
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  .secundary {
    background-color: ${({ theme }) => theme.colors.secundary};
  }
  .green {
    background-color: ${({ theme }) => theme.colors.greenHot};
  }
  .white {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }
  .whiteOutline {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0.063rem solid ${({ theme }) => theme.colors.background};
  }
  .blueOutline {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    border: 0.063rem solid ${({ theme }) => theme.colors.primary};
    max-width: 100%;
  }
  .success {
    background-color: ${({ theme }) => theme.colors.success};
  }
  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    color: inherit;
  }

  .small {
    padding: 0 0.5rem;
    border-radius: 0.3rem;
    height: 1.4rem;
    font-size: ${({ theme }) => theme.typography.smaller};
  }
  .medium {
    padding: 0 1.1rem;
    border-radius: 0.313rem;
    height: 2.3rem;
    width: 10rem;
    font-size: ${({ theme }) => theme.typography.small};
  }
  .large {
    padding: 0 3.125rem;
    height: 3rem;
    width: 13.813rem;
  }
  .full {
    padding: 0 3.125rem;
    min-width: 100%;
    height: 3rem;
  }
`

export const ButtonSubmit = styled.label`
  display: inline-block;
  cursor: pointer;

  .primary,
  .secundary,
  .black,
  .success {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: max-content;
    border-radius: 0.5rem;
    text-decoration: none !important;
    white-space: nowrap;
    color: white;
    font-size: ${({ theme }) => theme.typography.normal};
    transition: ${({ theme }) => theme.effects.transition};
    &:hover {
      filter: contrast(140%);
    }
  }
  .primary {
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  .secundary {
    background-color: ${({ theme }) => theme.colors.secundary};
  }
  .black {
    background-color: ${({ theme }) => theme.colors.grayDark};
  }
  .success {
    background-color: ${({ theme }) => theme.colors.success};
  }

  .small {
    padding: 0 0.5rem;
    border-radius: 0.3rem;
    height: 1.4rem;
    font-size: ${({ theme }) => theme.typography.smaller};
  }
  .medium {
    padding: 0 1.1rem;
    border-radius: 0.4rem;
    height: 2.5rem;
    font-size: ${({ theme }) => theme.typography.small};
  }
  .large {
    padding: 0 1.5rem;
    height: 3rem;
  }
  .full {
    padding: 0 3.125rem;
    min-width: 100%;
    height: 3rem;
  }
`
export const ButtonNormal = styled.div`
  display: inline-block;
  cursor: pointer;

  .primary,
  .secundary,
  .black,
  .success {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: max-content;
    border-radius: 0.5rem;
    text-decoration: none !important;
    white-space: nowrap;
    color: white;
    font-size: ${({ theme }) => theme.typography.normal};
    transition: ${({ theme }) => theme.effects.transition};
    &:hover {
      filter: contrast(140%);
    }
    /* &:disabled {
      background-color: green !important;
    } */
  }
  .primary {
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  .secundary {
    background-color: ${({ theme }) => theme.colors.secundary};
  }
  .black {
    background-color: ${({ theme }) => theme.colors.grayDark};
  }
  .success {
    background-color: ${({ theme }) => theme.colors.success};
  }
  .icon {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    color: inherit;
  }

  .small {
    padding: 0 0.5rem;
    border-radius: 0.3rem;
    height: 1.4rem;
    font-size: ${({ theme }) => theme.typography.smaller};
  }
  .medium {
    padding: 0 1.1rem;
    border-radius: 0.4rem;
    height: 2.5rem;
    font-size: ${({ theme }) => theme.typography.small};
  }
  .large {
    padding: 0 1.5rem;
    height: 3rem;
  }
  .full {
    padding: 0 3.125rem;
    min-width: 100%;
    height: 3rem;
  }
`

export const Icon = styled.div`
  & * {
    font-size: 1.5rem;
  }
`
export const WppButtonFloat = styled.a`
  z-index: 5000;
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.whatsapp};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  width: 3.438rem;
  height: 3.438rem;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 1);
  transform: scale(1);
  animation: pulse 4s infinite;
  transition: all ease-in-out 0.2s;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    width: 3.125rem;
    height: 3.125rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.whatsapp2};
    transform: scale(1.1);
    animation: none;
    transition: all ease-in-out 0.2s;
  }

  &:focus,
  :active,
  :hover {
    color: ${({ theme }) => theme.colors.background};
  }

  .icon {
    width: 2rem;
    height: 2rem;
    @media ${breakpoints.lessThan(sizes.desktop)} {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 0.625rem rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`
