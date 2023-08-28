import Nav from './components/nav/nav'
import Regulated from './components/regulated/regulated'
import Hero from './components/hero/hero'
import ReviewCards from './components/reviewsCards/reviews'
import ContactForm from './components/contact/contactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Regulated />
      <ReviewCards />
      <ContactForm />
    </main>
  )
}
