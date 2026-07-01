export default function DecorativePanel() {
  return (
    <div className="flex h-screen flex-row">
      <section className="bg-tertiary flex w-136 flex-col justify-center gap-4 px-20 text-left">
        <p className="font-secondary text-sm tracking-wider text-amber-800">
          THE DIGITAL ALCHEMIST
        </p>
        <p className="font-secondary text-6xl italic max-[1155px]:w-10/12 max-[1020px]:w-11/12 max-[820px]:text-7xl max-[530px]:text-5xl">
          El Futuro se Construye con <span className="text-amber-800 italic">Intención</span>.
        </p>
        <p className="px-10 py-5 text-sm italic">WishFactory Editorial</p>
      </section>
    </div>
  )
}
