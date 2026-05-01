import { Button } from '@heroui/react'

export default function Hero() {
  return (
    <>
      <div className="font-secondary flex size-5/12 flex-col text-left text-7xl">
        <p>
          El Futuro se Construye con <span className="text-amber-800 italic">Intención</span>.
        </p>
        <div className="font-primary mt-9 max-w-3xl text-sm">
          <p>En el corazón de Wish Factory, cada palabra es un átomo. </p>
          <p>Forjamos desde realidades digitales a través de la voluntad y el diseño abosluto.</p>
        </div>
      </div>
      <div className="font-secondary mt-8 flex gap-6">
        <Button className="bg-black text-gray-50">INICIAR</Button>
        <Button variant="outline">EXPLORAR WISHES</Button>
      </div>
    </>
  )
}
