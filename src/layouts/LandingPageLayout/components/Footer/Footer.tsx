import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-around px-6">
        <div className="w-96 flex-col justify-start gap-4">
          <h6 className="font-secondary text-2xl italic max-[850px]:-mb-2 max-[850px]:ml-6 max-[850px]:text-lg">
            WishFactory
          </h6>
          <p className="text-sm">
            Un experimento en intención digital y arquitectura del deseo. Propiedad intelectual de
            los alquimistas.
          </p>
        </div>
        <div className="flex flex-row justify-around gap-20">
          <div className="font-primary flex flex-col flex-wrap justify-between gap-3 text-sm">
            <p className="text-secondary mb-3">PLATAFORMA</p>
            <Link to="/">WishFactory</Link>
            <Link to="/mixwish">MixWish</Link>
            <Link to="/terms">Términos de uso y condiciones</Link>
          </div>
          <div className="flex flex-col flex-wrap justify-between gap-3 text-sm">
            <p className="text-secondary mb-3">CONECTAR</p>
            <a href="https://instagram.com/straiku" target="_blank">
              Instagram
            </a>
            <Link to="mailto:straiku.official@gmail.com">Correo</Link>
            <a href="https://github.com/straiku" target="_blank">
              Github - STRAiKU
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
