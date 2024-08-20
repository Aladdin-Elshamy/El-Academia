
import Navbar from './components/BurgerNav'
import FeatureSection from './components/Feature'
import HeroSection from './components/Hero'
import IntroductionSection from './components/Introduction'
import PracticalAdviceSection from './components/PracticalAdvice'
import TeamSection from './components/Team'
import TestimonialsSection from './components/Testimonials'
import NewsletterSection from './components/Newsletter'
import './index.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header className='font-display bg-red-50 pb-8'>
        <div className="container">
          <Navbar />
          <HeroSection />
        </div>
      </header>
      <main className='font-display'>
        <div className="container">
          <IntroductionSection />
          <FeatureSection />
          <PracticalAdviceSection />
          <TestimonialsSection />
          <TeamSection />
        </div>
        <NewsletterSection  />
        <Footer />
      </main>
    </>
  )
}

export default App
