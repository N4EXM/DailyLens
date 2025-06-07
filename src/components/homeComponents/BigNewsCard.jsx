import React from 'react'
import articles from '../../articles'

const BigNewsCard = ({articleImage, title, authorImage, authorName, date}) => {
  return (
    <div className='relative text-background'>

      <div className='relative w-64'>
        <img 
          src={articleImage} 
          className='rounded-xl w-full h-full object-cover' 
        />
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl'></div>
      </div>

      <div className='absolute top-[37%] flex flex-col gap-2 p-3 pr-4'>
        <p className='font-semibold font-poppins text-ssm'>{title}</p>
        <div className='w-full h-fit flex flex-row items-center justify-between'>

          <div className='w-fit flex flex-row items-center gap-2'>
            <img className='size-5 rounded-full' src={authorImage} alt="" />
            <p className='text-xxs font-light'>{authorName}</p>
          </div>

          <p className='font-light text-background text-xxs'>{date}</p>

        </div>
      </div>
    </div>
  )
}

export default BigNewsCard