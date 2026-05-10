import HeroRemixes from './HeroRemixes'
import HowItWorks from './HowItWorks'

export default function Remixes(){

  return (
    <section className=' mx-auto max-w-7xl py-36 px-6 bg-primary  h-auto flex justify-between flex-wrap max-[970px]:px-3 max-[970px]:py-14 max-[870px]:justify-center '>
      <HeroRemixes/>
      <HowItWorks/>
    </section>
  )

}