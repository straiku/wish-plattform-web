
import Link from "next/link"

export default function LoginFooter(){

  return(

    <footer className="w-full flex flex-wrap text-zinc-400 justify-between items-center h-auto px-15 py-12 bg-primary max-[350px]:justify-center max-[550px]:gap-0.5 max-[550px]:py-4 max-[550px]:px-4 max-[850px]:gap-4 ">
      <p className="text-[1.35rem] italic font-secondary max-[600px]:w-full max-[600px]:text-center ">WishFactory</p>
    
      <div className="w-auto flex justify-between gap-13 text-[0.75rem] tracking-widest font-light h-min  max-[550px]:gap-1  max-[850px]:text-[0.5rem] max-[850px]:gap-10   ">
        <Link href="/">
          PRIVACIDAD
        </Link>
        <Link href="/">
          TÉRMINOS
        </Link>
        <a href="mailto:straiku.official@gmail.com">
          CONTACTO
        </a>
      </div>

      <p className="text-[0.75rem] w-auto tracking-widest max-[850px]:text-[0.5rem]">@ 2026 THE DIGITAL ALCHEMIST</p>
  </footer>
  )
}