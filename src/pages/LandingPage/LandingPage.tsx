import Hero from './components/Hero'
import MixWish from './components/MixWish'
import PreFooter from './components/PreFooter'

export default function LandingPage() {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <MixWish />
      <PreFooter />
    </div>
  )
}
