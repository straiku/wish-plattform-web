import { Sparkles } from '@gravity-ui/icons' 

export default function HeroRemixes(){
  
  return (
    <section className='w-3/7 max-[780px]:w-full'>
      <div className='flex text-neutral h-full flex-col px-[10%]  py-[15%] gap-14 justify-start w-full bg-amber-50  max-[470px]:gap-8  '>
        
        <div className='flex h-auto flex-col gap-6 '>
          <div className='font-primary gap-2  flex flex-nowrap text-xs'>
          <Sparkles/>
            MODO REMIX ACTIVO
          </div>  
          <p className='font-secondary text-black text-2xl max-[470px]:text-xl'>
          "Una app que conecte personas con ideas similares..."
          </p>
        </div>

        <div className='flex gap-4  h-25 items-stretch bg-stone-100 max-[470px]:h-20'>
          <div className='w-1 h-full  bg-secondary '/>   
        
          <div className='flex flex-col gap-2 my-3 py-3 justify-center '>
            <p className='font-primary text-amber-800 text-[0.5rem]'>
              REMIX POR  @AURELIUS 
            </p>
            <p className='text-md'>
              ' ... para crear ideas similares'
            </p>
          </div>
        </div>

      </div>
    </section>
  ) 
}
