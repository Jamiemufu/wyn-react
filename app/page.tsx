import Nav from './components/nav/nav'
import Regulated from './components/regulated/regulated'
import Hero from './components/hero/hero'
import ReviewCards from './components/reviewsCards/reviews'
import Contact from './components/contact/contact'
import Intro from './components/intro/intro'
import Faq from './components/faq/faq'

export default function Home() {
  return (
    <main className='bg-white md:pt-24 sm:pt-36 pt-24'>
      <Hero />
      <Intro />
      <Contact />
      <ReviewCards />
      <Faq />
    </main>
  )
}
