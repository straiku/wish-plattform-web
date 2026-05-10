import type { WishItemsRemixesProps } from '../types/WishItemsRemixes'
import WishItemsRemixes from './WishItemsRemixes'

export default function HowItWorks(){

  const Items:WishItemsRemixesProps[]=[
    {
      index:1,
      title: 'Capas de realidad',
      content:'  Superpón tus pensamientos sobre el lienzo de otros'
    },
    {
      index:2,
      title: 'Difusión colaborativa',
      content:' Observa cómo tu deseo evoluciona a través de la lente de la comunidad '
    }
  ]  

  return (
    <section className='w-3/7  h-auto pt-12  max-[720px]:w-full max-[780px]:px-4 max-[560px]:text-justify max-[870px]:w-5/7 '>
      <div className='flex flex-col justify-center w-full   gap-6 text-neutral'>
      
        <p className='text-5xl text-black font-secondary max-[560px]:text-2xl max-[780px]:text-4xl'>
          La magia del Remix
        </p>
        <p className=' text-lg max-[470px]:text-sm'>
          Ninguna intención está sola. En WishFactory, 
          los deseos colisionan y se transforman. 
          El 'Remix' no es solo edición; es la transmutación 
          colectiva de una idea base en una obra maestra coral.
        </p>

        {Items.map((item, index)=><WishItemsRemixes key={index} {...item}/>)}
      </div>
    </section>
    )
}