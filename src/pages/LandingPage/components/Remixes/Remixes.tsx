
import HeroRemixes from './components/HeroRemixes'
import HowItWorks from './components/HowItWorks'
export default function Remixes(){


  return (
    <section className=' p-15 w-full bg-primary  h-auto flex justify-between flex-wrap max-[970px]:p-10'>
      <HeroRemixes/>
      <HowItWorks/>
    </section>
  )

}