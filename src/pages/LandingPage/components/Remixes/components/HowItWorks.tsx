export default function HowItWorks(){

  return (
    <section className='w-3/7  h-auto pt-12  max-[780px]:w-full max-[780px]:px-4 max-[560px]:text-justify '>
      <div className='flex flex-col justify-center w-full   gap-6 text-neutral'>
      
        <p className='text-4xl text-black font-secondary max-[560px]:text-2xl'>
        La magia del Remix
        </p>
        <p className=' text-md'>
          Ninguna intención está sola. En WishFactory, 
          los deseos colisionan y se transforman. 
          El 'Remix' no es solo edición; es la transmutación 
          colectiva de una idea base en una obra maestra coral.
        </p>

        <div >
          <p>
          <span className='text-xl font-secondary text-amber-700 italic '> 
            01.
            </span>
            <span className='text-md font-medium font-primary  text-black '> 
              Capas de realidad
            </span>
          </p>
          <p className='text-sm'>
            Superpón tus pensamientos sobre el lienzo de otros
          </p>
        </div>

        <div>
          <p>
            <span className='text-xl font-secondary text-amber-800 italic'> 
              02.
            </span>
            <span className='text-md font-primary font-medium text-black '> 
              Difusión colaborativa        
            </span>
          </p>
          <p className='text-sm'>
            Observa cómo tu deseo evoluciona a través de la lente de la comunidad     
          </p>
        </div>
      </div>
    </section>
    )
}