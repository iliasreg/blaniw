import Description from '@/components/shared/Description'
import EventsDisplay from '@/components/shared/EventsDisplay'
import Faq from '@/components/shared/Faq'
import Hero from '@/components/shared/Hero'
import React from 'react'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <EventsDisplay />
      <Description />
      <Faq />
    </>
  )
}

export default LandingPage