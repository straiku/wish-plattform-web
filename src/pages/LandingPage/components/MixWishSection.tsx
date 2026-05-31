import type { MixWishLandingPreviewProps } from '../types/MixWishLandingPreview'
import MixWishLandingPreview from './MIxWishLandingPreview'

export default function MixWishSection() {
  const mixWishes: MixWishLandingPreviewProps[] = [
    {
      wishTitle: 'Reclamar el silencio absoluto en el centro de las megaciudades.',
      wishCategories: ['UNIVERSO', 'FILOSOFIA'],
      wishLikes: 1227,
      wishPlace: 1,
    },
    {
      wishTitle:
        'Que la inteligencia artificial desarrolle nostalgia por los veranos que nunca vivió.',
      wishCategories: ['TECNOLOGÍA', 'POESÍA'],
      wishLikes: 942,
      wishPlace: 2,
    },
  ]

  return (
    <section id="mixwish" className="bg-tertiary min-h-screen px-8 py-36 max-[1280px]:px-0">
      <div className="flex max-w-7xl pb-36 max-[1280px]:mx-6 min-[1280px]:mx-auto">
        <section className="flex w-full justify-between border-b-2 border-black/5 pb-12 max-[570px]:flex-col max-[570px]:gap-6 max-[570px]:pb-3">
          <div className="flex flex-col gap-2.5 max-[570px]:gap-0.5">
            <h4 className="font-secondary text-5xl max-[570px]:text-4xl">MixWish Semanal</h4>
            <p className="text-neutral text-sm tracking-wider max-[570px]:text-xs">
              LOS DESEOS MÁS POTENTES DE LA ÚLTIMA LUNA
            </p>
          </div>
          <div className="flex h-full items-end max-[570px]:items-center max-[570px]:justify-end">
            <p className="font-secondary text-4xl text-black/30 italic max-[570px]:text-3xl">
              Vol.1
            </p>
          </div>
        </section>
      </div>

      <div className="flex max-w-7xl flex-col gap-12 max-[1280px]:mx-6 min-[1280px]:mx-auto">
        {mixWishes.map((wish, index) => (
          <div key={index}>
            <MixWishLandingPreview {...wish} />
            {index < mixWishes.length - 1 && (
              <hr className="mx-auto mt-8 w-11/12 border-b border-black/5" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
