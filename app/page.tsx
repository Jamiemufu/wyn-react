import Nav from './components/nav/nav'
import Regulated from './components/regulated/regulated'
import Hero from './components/hero/hero'
import Reviews from './components/reviews/reviews'

export default function Home() {
  return (
    <main>
      <Hero />
      <Regulated />
      <Reviews />
    </main>
  )
}
