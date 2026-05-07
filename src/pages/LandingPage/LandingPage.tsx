import Hero from './components/Hero'
import Preview from './components/Preview'
import MixWish from './components/MixWish'
import PreFooter from './components/PreFooter'

export default function LandingPage() {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <Preview/>
      <MixWish />
      <PreFooter />
    </div>
  )
}
