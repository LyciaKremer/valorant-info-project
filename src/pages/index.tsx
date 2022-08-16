import React from 'react'

import { NextSeo } from 'next-seo'

import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <NextSeo title="Valorant" />
      <Header />
      <FirstSection />
      <Footer />
    </>
  )
}

export default Home
