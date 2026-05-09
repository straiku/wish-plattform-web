import Hero from './components/Hero'

import Preview from './components/Preview'
import MixWish from './components/MixWish'
import PreFooter from './components/PreFooter'
import Remixes from './components/Remixes/Remixes'

export default function LandingPage() {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <Preview/>
      <Remixes/>
      <MixWish />
      <PreFooter />
    </div>
  )
}
