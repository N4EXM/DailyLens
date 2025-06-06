import React from 'react'
import articles from '../../articles'

const BigNewsCard = () => {
  return (
    <div className='relative text-background'>
      <div className='relative w-72'>
        <img 
          src={articles[0].articleImage} 
          className='rounded-xl w-full h-full object-cover' 
        />
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl'></div>
      </div>
      <div className='absolute top-[35%] flex flex-col gap-2'>
        <p className='font-medium text-sm'>{articles[0].title}</p>
        <div className='w-full h-fit flex flex-row items-center justify-between'>

          <div className='w-fit flex flex-row items-center gap-3'>
            <img className='size-6 rounded-full' src={articles[0].authorImage} alt="" />
            <p className='text-xs font-semibold'>{articles[0].authorName}</p>
          </div>

          <div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default BigNewsCard