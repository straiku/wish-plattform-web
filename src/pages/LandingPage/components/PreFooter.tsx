import { Button } from '@heroui/react'

export default function PreFooter() {
  return (
    <section className="mx-auto w-full text-center">
      <div className="font-secondary flex flex-col flex-wrap items-center gap-4 text-8xl max-[530px]:text-5xl">
        <p>
          ¿Estás listo para forjar tu
          <span className="decoration-secondary underline"> propia realidad</span>?
        </p>
        <p className="font-primary text-sm">
          La entrada a WishFactory no es para todos. Solo para quienes entienden que soñar es el
          primer paso para crear.
        </p>
        <Button size="lg" className="text-primary rounded-lg bg-black max-[530px]:max-w-min">
          ENTRAR EN WISHFACTORY
        </Button>
      </div>
    </section>
  )
}
