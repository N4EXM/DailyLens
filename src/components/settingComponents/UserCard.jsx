import React from 'react'
import blankUserImage from '../../assets/blankUser.png'

const UserCard = ({ userDetails }) => {
  return (
    <div className='flex flex-col p-5 gap-2 bg-secBackground dark:bg-secDarkBackground rounded-md'>

        <div className='w-full flex items-start justify-between'>
          <p className='font-semibold'>User Details</p>
          <button className='bg-primary dark:bg-darkPrimary p-2 rounded-full active:bg-secondary dark:active:bg-darkSecondary duration-200'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
              fill="#ffffff" viewBox="0 0 24 24" >
              <path d="M11 18h11v2H11zM13.29 4.29 11.5 6.08l4.41 4.41L17.7 8.7a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0M10.09 7.5 2.3 15.29a1 1 0 0 0-.29.71v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l7.79-7.79-4.41-4.41Z"></path>
            </svg>
          </button>
        </div>

        <div className='flex flex-row items-start gap-5 justify-start'>
          
          <div className='p-5 relative bg-background dark:bg-darkBackground rounded-full border-2 border-primary dark:border-darkPrimary'>
            <img className='w-12 h-12' src={userDetails.image == null ? blankUserImage : userDetails.image } alt="" />
            <button className='bg-primary dark:bg-darkPrimary absolute p-2 -right-1 -bottom-2 rounded-full'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="#ffffff" viewBox="0 0 24 24" >
                <path d="M21 14V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9v-2H5v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V14h2ZM8.5 10C7.67 10 7 9.33 7 8.5S7.67 7 8.5 7s1.5.67 1.5 1.5S9.33 10 8.5 10"></path><path d="M21 16h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
              </svg>
            </button>
          </div>  
          <div className='w-fit gap-0.5 h-full flex flex-col pt-2 items-start justify-start'>
            <h1 className='font-bold text-lg'>{userDetails.firstName} {userDetails.lastName}</h1>
            <p className='text-xs text-text/60 dark:text-darkText/80'>{userDetails.email}</p>
            <p className='text-xs text-text/60 dark:text-darkText/80'>{userDetails.contactNumber}</p>
          </div>

        </div>

        
    </div>  
  )
}

export default UserCard