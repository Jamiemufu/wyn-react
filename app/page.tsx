import Nav from './components/nav/nav'
import Regulated from './components/regulated/regulated'
import Hero from './components/hero/hero'
import ReviewCards from './components/reviews/reviews'
import Contact from './components/contact/contact'
import Intro from './components/services/services'
import Faq from './components/faq/faq'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <main className='bg-white md:pt-24 sm:pt-36'>
      <Hero />
      <Regulated />
      <Intro />
      <Contact />
      <ReviewCards />
      <Faq />
      <Footer />
    </main>
  )
}
