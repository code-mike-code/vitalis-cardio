import PageLayout from '@components/layout/PageLayout/PageLayout'
import Hero from '@components/sections/Hero/Hero'
import About from '@components/sections/About/About'
import Features from '@components/sections/Features/Features'
import Offer from '@components/sections/Offer/Offer'
import Team from '@components/sections/Team/Team'
import SocialProof from '@components/sections/SocialProof/SocialProof'
import EUFunding from '@components/sections/EUFunding/EUFunding'
import FinalCTA from '@components/sections/FinalCTA/FinalCTA'

const LD_ORGANIZATION = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': ['MedicalOrganization', 'LocalBusiness'],
  '@id': 'https://vitalis-cardio.pl/#organization',
  name: 'Klinika Vitalis',
  alternateName: 'Vitalis Nowak i Żurakowski Sp. z o.o.',
  description:
    'Prywatna klinika medyczna w Trzebini oferująca kompleksową opiekę specjalistyczną: kardiologię, neurologię, ortopedię, rehabilitację, diagnostykę USG, ginekologię, endokrynologię, psychiatrię i medycynę estetyczną.',
  url: 'https://vitalis-cardio.pl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://vitalis-cardio.pl/logo.png',
    width: 300,
    height: 80,
  },
  image: 'https://vitalis-cardio.pl/og-image.png',
  telephone: ['+48322109866', '+48326200293', '+48322109855', '+48322109865', '+48733433494'],
  email: 'jnvitalis@wp.pl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Kopernika 25',
    addressLocality: 'Trzebinia',
    postalCode: '32-540',
    addressRegion: 'Małopolskie',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.1578,
    longitude: 19.4687,
  },
  areaServed: [
    { '@type': 'City', name: 'Trzebinia' },
    { '@type': 'City', name: 'Chrzanów' },
    { '@type': 'City', name: 'Jaworzno' },
    { '@type': 'City', name: 'Młoszowa' },
    { '@type': 'State', name: 'Małopolskie' },
    { '@type': 'Country', name: 'Polska' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Oferta Kliniki Vitalis',
    itemListElement: [
      { '@type': 'Offer', name: 'Kardiologia', description: 'Diagnostyka i leczenie chorób serca i układu krążenia.' },
      { '@type': 'Offer', name: 'Neurologia', description: 'Diagnostyka EEG, leczenie migren, padaczki i chorób neurodegeneracyjnych.' },
      { '@type': 'Offer', name: 'Ortopedia', description: 'Konsultacje ortopedyczne, iniekcje dostawowe, diagnostyka USG.' },
      { '@type': 'Offer', name: 'Rehabilitacja', description: 'Kompleksowa rehabilitacja lecznicza i fizjoterapia.' },
      { '@type': 'Offer', name: 'Diagnostyka USG', description: 'Badania ultrasonograficzne jamy brzusznej, tarczycy, piersi i naczyń.' },
      { '@type': 'Offer', name: 'Ginekologia i Położnictwo', description: 'Opieka ginekologiczna i położnicza, USG ciążowe.' },
      { '@type': 'Offer', name: 'Psychiatria', description: 'Diagnostyka i farmakoterapia zaburzeń psychicznych.' },
      { '@type': 'Offer', name: 'Medycyna Estetyczna', description: 'Botoks, kwas hialuronowy, mezoterapia i nici liftingujące.' },
    ],
  },
})

const LD_BREADCRUMB = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strona główna',
      item: 'https://vitalis-cardio.pl/',
    },
  ],
})

function HomePage() {
  return (
    <PageLayout stickyStack>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: LD_ORGANIZATION }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: LD_BREADCRUMB }} />
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
