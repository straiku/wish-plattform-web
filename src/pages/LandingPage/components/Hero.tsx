import { Button } from '@heroui/react'

export default function Hero() {
  return (
    <section className="flex max-w-7xl py-32 max-[1280px]:mx-6 min-[1280px]:mx-auto">
      <div className="flex flex-col gap-4 text-left">
        <p className="font-primary text-neutral text-sm tracking-wider">
          EQUIPO DE WISHFACTORY NO. 1
        </p>
        <p className="font-secondary w-2/4 text-8xl max-[530px]:text-5xl">
          El Futuro se Construye con <span className="text-amber-800 italic">Intención</span>.
        </p>
        <div className="font-primary mt-3">
          <p className="text-neutral w-lg text-lg max-[530px]:w-auto">
            En el corazón de Wish Factory, cada palabra es un átomo.
            <br />
            Forjamos desde realidades digitales a través de la voluntad y el diseño abosluto.
          </p>
        </div>
        <div className="font-secondary mt-7 flex gap-6">
          <Button size="lg" className="text-primary rounded-lg bg-black max-[530px]:max-w-min">
            INICIAR
          </Button>
          <Button size="lg" variant="outline" className="rounded-lg max-[530px]:max-w-min">
            EXPLORAR WISHES
          </Button>
        </div>
      </div>
    </section>
  )
}
