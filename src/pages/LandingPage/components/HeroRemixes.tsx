import { SparklesFill } from '@gravity-ui/icons'

export default function HeroRemixes() {
  return (
    <section className="w-3/7 max-[870px]:w-5/7 max-[720px]:w-full">
      <div className="text-neutral flex h-full w-full flex-col justify-start gap-14 bg-amber-50 px-[10%] py-[10%] max-[890px]:justify-center max-[470px]:gap-8">
        <div className="flex h-auto flex-col gap-8">
          <div className="font-primary flex flex-nowrap gap-3 text-xs">
            <SparklesFill className="text-amber-900" />
            MODO REMIX ACTIVO
          </div>
          <p className="font-secondary text-3xl text-black max-[470px]:text-xl">
            "Una app que conecte personas con ideas similares..."
          </p>
        </div>

        <div className="smax-[470px]:h-20 flex h-25 items-stretch gap-4 bg-lime-500/8">
          <div className="h-full w-[2.5px] bg-amber-800/70" />

          <div className="my-3 flex flex-col justify-center gap-2 py-3">
            <p className="font-primary text-[0.6rem] text-amber-800/80">REMIX POR @AURELIUS</p>
            <p className="text-md max-[470px]:text-sm">" ... para crear ideas similares"</p>
          </div>
        </div>
      </div>
    </section>
  )
}
