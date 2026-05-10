import {SparklesFill} from '@gravity-ui/icons'; 
 
export default function HeroRemixes(){
 
  return  (
      <section className='w-3/7 max-[720px]:w-full max-[870px]:w-5/7'>
        <div className='flex text-neutral h-full flex-col px-[10%]  py-[10%] gap-14 justify-start w-full bg-amber-50  max-[470px]:gap-8 max-[890px]:justify-center'>
          
          <div className='flex h-auto flex-col gap-8 '>
            <div className='font-primary gap-3 flex flex-nowrap text-xs'>
            <SparklesFill className='text-amber-900'/>
              MODO REMIX ACTIVO
            </div>  
            <p className='font-secondary text-black text-3xl max-[470px]:text-xl'>
            "Una app que conecte personas con ideas similares..."
            </p>
          </div>

          <div className='flex gap-4  h-25 items-stretch bg-lime-500/8  smax-[470px]:h-20'>
            <div className='w-[2.5px] h-full  bg-amber-800/70'/>   
          
            <div className='flex flex-col gap-2 my-3 py-3 justify-center '>
              <p className='font-primary text-amber-800/80 text-[0.6rem]'>
                REMIX POR  @AURELIUS 
              </p>
              <p className='text-md max-[470px]:text-sm'>
                " ... para crear ideas similares"
              </p>
            </div>
          </div>

        </div>
      </section>
    ) 
  }
