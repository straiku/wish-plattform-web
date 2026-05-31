import HeroRemixes from './HeroRemixes'
import HowItWorks from './HowItWorks'

export default function RemixesSection() {
  return (
    <section id="remixes" className="bg-primary mx-auto flex h-auto max-w-7xl flex-wrap justify-between px-6 py-36 max-[970px]:px-3 max-[970px]:py-14 max-[870px]:justify-center">
      <HeroRemixes />
      <HowItWorks />
    </section>
  )
}
