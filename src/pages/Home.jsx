import React from 'react'
import BigNewsCard from '../components/homeComponents/BigNewsCard'

const Home = () => {
  return (
    <div className='w-full h-full p-5 flex flex-col gap-5'>

      {/* top bar */}
      <div className='w-full h-fit flex flex-row items-center justify-between pr-2'>

        <div className='w-fit gap-2 flex flex-row items-center justify-start'>
          <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="28" height="28"  
            fill="currentcolor" viewBox="0 0 24 24" >
            <path d="M5 7h5v6H5zM5 15h10v2H5zM12 11h3v2h-3zM12 7h3v2h-3z"></path><path d="M21 18c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v13c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3V6h-2zM4 19c-.55 0-1-.45-1-1V5h14v13c0 .35.07.69.18 1z"></path>
          </svg>
          <p className='font-semibold text-lg'>What's New</p>
        </div>

        <button className=''>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z"></path>
          </svg>
        </button>

      </div>
        
      {/* bigNewsCard carousel */}
      <div>
        <BigNewsCard/>
      </div>

    </div>
  )
}

export default Home