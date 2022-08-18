import React from 'react'

import { NextSeo } from 'next-seo'

import AgentSection from '../components/AgentSection'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <NextSeo title="Valorant" />
      <Header />
      <FirstSection />
      <AgentSection />
      <Footer />
    </>
  )
}

export default Home
