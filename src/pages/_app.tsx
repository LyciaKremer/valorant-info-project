import React from 'react'
// import { Toaster } from 'react-hot-toast'

// eslint-disable-next-line import-helpers/order-imports
// import { SSRProvider } from '@react-aria/ssr'

// import { SessionProvider } from 'next-auth/react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
// import { ModalProvider } from 'styled-react-modal'

import '../styles/fontface.css'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <ModalProvider> */}
        <Component {...pageProps} />
        <GlobalStyle />
        {/* <Toaster /> */}
        {/* </ModalProvider> */}
      </ThemeProvider>
    </>
  )
}

export default MyApp
