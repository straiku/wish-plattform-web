import HeroSection from '@/features/landing/components/HeroSection'
import MixWishSection from '@/features/landing/components/MixWishSection'
import PreFooterSection from '@/features/landing/components/PreFooterSection'
import PreviewSection from '@/features/landing/components/PreviewSection'
import RemixesSection from '@/features/landing/components/RemixesSection'
import LandingHeader from '@/features/landing/components/LandingHeader/LandingHeader'
import Footer from '@/components/Footer/Footer'

export default function LandingPage() {
  return (
    <div className="bg-primary min-h-screen">
      <LandingHeader />
      <HeroSection />
      <PreviewSection />
      <RemixesSection />
      <MixWishSection />
      <PreFooterSection />
      <Footer />
    </div>
  )
}
