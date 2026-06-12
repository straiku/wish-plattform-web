'use client'

import { Button } from '@heroui/react'

export default function PreFooterSection() {
  return (
    <section className=" mx-auto w-full py-20 text-center bg-primary ">
      <div className="font-secondary mx-auto flex max-w-7xl flex-col flex-wrap items-center gap-4 px-6 max-[870px]:p-0">
        <p className="w-8/12 text-6xl max-[870px]:text-5xl max-[675px]:w-10/12 max-[530px]:w-full max-[530px]:text-4xl">
          ¿Estás listo para forjar tu&nbsp;
          <span className="decoration-secondary italic underline">propia realidad</span>?
        </p>
        <p className="font-primary w-10/12 text-sm max-[530px]:text-xs">
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
