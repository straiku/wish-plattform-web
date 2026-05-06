import { Chip } from '@heroui/react'
import {
  numberFormatterWithnumerOfDigits,
  numerCompactNotationFormatter,
} from '../../../logic/numbers'
import { HeartFill } from '@gravity-ui/icons'
import type { MixWishLandingPreviewProps } from '../types/MixWishLanginPreview'

export default function MixWishLandingPreview({
  wishPlace,
  wishTitle,
  wishCategories,
  wishLikes,
}: MixWishLandingPreviewProps) {
  return (
    <article className="flex flex-col">
      <div className="flex gap-17">
        <p className="font-secondary text-5xl text-black/15">
          {numberFormatterWithnumerOfDigits(wishPlace, 2)}
        </p>
        <div className="flex flex-col gap-5">
          <h6 className="font-secondary text-5xl">{wishTitle}</h6>
          <div className="flex gap-4">
            {wishCategories.map((category, index) => {
              return (
                <Chip key={index} className="bg-black/10">
                  {category}
                </Chip>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="font-primary flex items-center gap-3 text-sm font-extralight tracking-tight text-red-700">
          <HeartFill />
          {numerCompactNotationFormatter(wishLikes)} Likes
        </p>
      </div>
    </article>
  )
}
