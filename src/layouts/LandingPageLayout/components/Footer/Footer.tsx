import { Link } from 'react-router-dom'
import WaterMark from '../../../../components/WaterMark/WaterMark'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl pt-20 pb-12 max-[850px]:pt-12">
      <div className="flex justify-around gap-2 px-6 max-[850px]:flex-wrap">
        <div className="w-96 flex-col justify-start gap-5 max-[850px]:mx-2 max-[850px]:w-full">
          <h6 className="font-secondary text-left text-2xl italic max-[850px]:text-center max-[850px]:text-xl">
            WishFactory
          </h6>
          <p className="text-sm max-[850px]:mt-2 max-[850px]:text-center max-[850px]:text-xs">
            Un experimento en intención digital y arquitectura del deseo. Propiedad intelectual de
            los alquimistas.
          </p>
        </div>
        <div className="flex flex-row justify-around gap-20 max-[850px]:mt-5 max-[850px]:gap-5">
          <div className="font-primary flex flex-col flex-wrap justify-between gap-3 text-sm">
            <p className="text-contrast mb-3">PLATAFORMA</p>
            <Link className="max-[850px]:text-xs" to="/">
              WishFactory
            </Link>
            <Link className="max-[850px]:text-xs" to="/mixwish">
              MixWish
            </Link>
            <Link className="max-[850px]:text-xs" to="/terms">
              Términos de uso y condiciones
            </Link>
          </div>
          <div className="flex flex-col flex-wrap justify-between gap-3 text-sm">
            <p className="text-contrast mb-3">CONECTAR</p>
            <a className="max-[850px]:text-xs" href="https://instagram.com/straiku" target="_blank">
              Instagram
            </a>
            <Link className="max-[850px]:text-xs" to="mailto:straiku.official@gmail.com">
              Correo
            </Link>
            <a className="max-[850px]:text-xs" href="https://github.com/straiku" target="_blank">
              Github - STRAiKU
            </a>
          </div>
        </div>
      </div>
      <WaterMark />
    </footer>
  )
}
