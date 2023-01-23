import { createGlobalStyle } from 'styled-components'

import { breakpoints, sizes } from './breakpoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-weight: 400;
  }
  section,header,article,footer {
    width: 100%;
  }
  header,section,footer {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    padding: 0 14vw;
    @media ${breakpoints.lessThan(sizes.widescreen)} {
      padding: 0 8vw;
    }
  }
  section{
    padding-bottom: 3rem;
  }
  form{
    display: flex;
    gap: 28px;
    @media ${breakpoints.lessThan(sizes.tablet)} {
    flex-direction: column;
    }
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
      transform-origin: center;
    }

    100% {
      transform: rotate(360deg);
      transform-origin: center;
    }
  }
  @keyframes scaleShadow {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      transform: scale(1);
    }

    100% {
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      transform: scale(1.1);
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    :hover {
      color: ${({ theme }) => theme.colors.secundary};
    }
  }
  button {
    border: 0;
    background: transparent;
  }
  li {
    list-style-type: none;
  }
  h1 {
    font-size: ${props => props.theme.typography.bigger};
    color: ${props => props.theme.colors.black};
    font-weight: 500;
  }
  h2 {
    font-size: ${props => props.theme.typography.normal};
    color: ${props => props.theme.colors.black};
  }
  label {
    font-size: ${props => props.theme.typography.small};
    color: ${props => props.theme.colors.gray};
  }
  select[multiple] {
    height: 9rem;
    resize: vertical;
  }

  select,
  textarea,
  input {
    background-color: #fff;
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0 1.125rem;
    outline: 0;
    border: 1px solid ${props => props.theme.colors.grayLight};
    border-radius: 0.5rem;
    &:hover {
      border: 1px solid ${props => props.theme.colors.gray};
    }
    &:disabled {
      background-color: ${props => props.theme.colors.grayLight};
      cursor: not-allowed;
      opacity: .8;
    }
    &:focus {
      border: 2px solid ${props => props.theme.colors.grayDark};
    }
  }
  input[type='radio'],
  input[type='checkbox'] {
    width: 0.8rem;
    height: 1rem;
  }
  input[type="submit"],input[type="color"] {
    padding: 0;
  }
  input[type="color"] {
    padding: 0.5rem;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type="number"] {
      -moz-appearance: textfield;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    box-shadow: 0 0 0 35px white inset !important;
}
textarea {
  height: 9rem;
  padding: 1rem;
}
`
