import { Chip } from '@heroui/react'
import {
  numberFormatterWithnumerOfDigits,
  numerCompactNotationFormatter,
} from '../../../logic/numbers'
import { HeartFill } from '@gravity-ui/icons'
import type { MixWishLandingPreviewProps } from '../types/MixWishLandingPreview'

export default function MixWishLandingPreview({
  wishPlace,
  wishTitle,
  wishCategories,
  wishLikes,
}: MixWishLandingPreviewProps) {
  return (
    <article className="flex flex-col max-[470px]:gap-6">
      <div className="] flex gap-17 max-[580px]:gap-6">
        <p className="font-secondary text-5xl text-black/15 max-[470px]:text-3xl">
          {numberFormatterWithnumerOfDigits(wishPlace, 2)}
        </p>
        <div className="flex flex-col gap-5">
          <h6 className="font-secondary text-5xl max-[850px]:text-3xl max-[470px]:text-xl">
            {wishTitle}
          </h6>
          <div className="flex gap-4">
            {wishCategories.map((category, index) => {
              return (
                <Chip key={index} className="bg-black/10 max-[850px]:text-xs">
                  <Chip.Label className="max-[470px]:text-xs">{category}</Chip.Label>
                </Chip>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="font-primary flex items-center gap-3 text-sm font-extralight tracking-tight text-red-700 max-[850px]:text-xs">
          <HeartFill />
          {numerCompactNotationFormatter(wishLikes)} Likes
        </p>
      </div>
    </article>
  )
}
