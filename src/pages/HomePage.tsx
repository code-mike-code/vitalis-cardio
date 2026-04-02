import PageLayout from '@components/layout/PageLayout/PageLayout'
import Hero from '@components/sections/Hero/Hero'
import About from '@components/sections/About/About'
import Features from '@components/sections/Features/Features'
import Offer from '@components/sections/Offer/Offer'
import Team from '@components/sections/Team/Team'
import SocialProof from '@components/sections/SocialProof/SocialProof'
import EUFunding from '@components/sections/EUFunding/EUFunding'
import FinalCTA from '@components/sections/FinalCTA/FinalCTA'

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Features />
      <Offer />
      <Team />
      <SocialProof />
      <EUFunding />
      <FinalCTA />
    </PageLayout>
  )
}

export default HomePage
