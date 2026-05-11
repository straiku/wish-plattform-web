import HeroSection from './components/HeroSection'

import PreviewSection from './components/PreviewSection'
import MixWishSection from './components/MixWishSection'
import PreFooterSection from './components/PreFooterSection'
import RemixesSection from './components/RemixesSection'

export default function LandingPage() {
  return (
    <div className="bg-primary min-h-screen">
      <HeroSection />
      <PreviewSection />
      <RemixesSection />
      <MixWishSection />
      <PreFooterSection />
    </div>
  )
}
