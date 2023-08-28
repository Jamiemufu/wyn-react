import Nav from './components/nav/nav'
import Regulated from './components/regulated/regulated'
import Hero from './components/hero/hero'
import ReviewCards from './components/reviewsCards/reviews'
import Contact from './components/contact/contact'

export default function Home() {
  return (
    <main className='bg-white'>
      <Hero />
      <Regulated />
      <Contact />
      <ReviewCards />
    </main>
  )
}
