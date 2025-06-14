import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import UserCard from '../components/settingComponents/UserCard'
import UserArticles from '../components/settingComponents/UserArticles'
import GeneralSettings from '../components/settingComponents/GeneralSettings'
import userImage from '../assets/userImage.png'

const Settings = () => {

  const [warningBox, setWarningBox] = useState(false)
  const userDetails = {
    image: null,
    firstName: "John",
    lastName: "Doe",
    email: "JohnDoe23@gmail.com",
    contactNumber: "02234234567"
  }

  const navigate = useNavigate()
    
  const handleNavigate = (page) => {
    navigate(`/${page}`)
  }

  const toggleWarningBox = () => {
    setWarningBox(true)
  }  

  return (
    <div className='w-full h-full p-5 flex flex-col gap-5 pb-24 z-10 relative'>

      {/* logout warning box */}
      <div className={`${warningBox ? "flex" : "hidden"} border border-text/20 dark:border-darkText/20 fixed w-4/5 h-32 z-40 bg-background flex-col rounded-sm dark:bg-darkBackground flex justify-between left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        
        <div className='w-full h-full gap-1 flex p-4 flex-col items-center justify-center'>
          <h1 className='text-sm font-medium h-fit text-center'>Are you sure you want to Logout</h1>
        </div>

        <div className='w-full h-full flex items-end p-2 flex-row gap-2'>
          <button onClick={() => setWarningBox(false)} className='w-full p-2 bg-secBackground font-medium dark:bg-secBackground/10 h-fit border border-text/20 dark:border-darkText/20 text-sm rounded-sm'>
            Cancel
          </button>
          <button onClick={() => handleNavigate("Login")} className='bg-rose-600 border border-rose-600 w-full h-fit text-darkText font-medium rounded-sm p-2 text-sm'> 
            Exit
          </button>
        </div>

      </div>

      <div className='flex items-center gap-3'>
        {/* <svg className='text-primary dark:text-darkPrimary' xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
          fill="currentcolor" viewBox="0 0 24 24" >
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path><path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
        </svg> */}
        <p className='text-lg font-semibold text-darkText'>Settings</p>
      </div>

      <UserCard
        userDetails={userDetails}
        editFunction={() => handleNavigate("UserEdit")}
        toggleWarningBox={() => toggleWarningBox()}
      />

      <div className='flex flex-col gap-4 pt-2 w-full h-full'>
        <UserArticles/>
        <GeneralSettings/>
      </div>

      

    </div>
  )
}

export default Settings