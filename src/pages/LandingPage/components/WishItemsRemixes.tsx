import type { WishItemsRemixesProps } from "../types/WishItemsRemixes"

export default function WishItemsRemixes({index,title,content}:WishItemsRemixesProps){

  return (
    <div className='flex gap-x-2'>
      <span className='text-xl font-secondary text-amber-700  italic'> 
        {index<10 ? `0${index}` : index}.
      </span>
      <div className='flex flex-col'>
        <p className='text-md font-primary tracking-tigh font-bold text-zinc-900 '> 
          {title}       
        </p>
        <p className='text-sm'>
          {content}
        </p>
      </div>
    </div>
  )
}