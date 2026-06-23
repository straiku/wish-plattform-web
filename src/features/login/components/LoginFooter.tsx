
import Link from "next/link"

export default function LoginFooter(){

  return(

    <div className="w-full flex flex-wrap text-zinc-400  justify-between items-center h-[20vh] px-15 bg-primary max-[850px]:px-5 max-[850px]:gap-8 ">
      <p className=" text-[1.35rem] italic font-secondary ">WishFactory</p>
    
      <div className="w-auto gap-10 text-[0.75rem]  flex tracking-widest justify-between items-center font-light max-[850px]:w-auto max-[900px]:gap-4">
        <Link  className="max-[850px]:text-xs" href="/">
          PRIVACIDAD
        </Link>
        <Link className="max-[850px]:text-xs" href="/">
          TÉRMINOS
        </Link>
        <a className="max-[850px]:text-xs" href="mailto:straiku.official@gmail.com">
        CONTACTO
        </a>
      </div>

      <p className="text-[0.75rem] block  tracking-widest">@ 2026 THE DIGITAL ALCHEMIST</p>
  </div>
  )
}