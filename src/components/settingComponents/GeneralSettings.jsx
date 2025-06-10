import React, {useState} from 'react'
import ToggleSwitch from '../generalComponents/ToggleSwitch'

const GeneralSettings = () => {

    const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`p-3 px-4 bg-secBackground dark:bg-secDarkBackground rounded-md border border-primary dark:border-darkPrimary duration-300 flex flex-col gap-5 ${isExpanded ? "h-60" : "h-14 overflow-y-hidden"}`}>
        
        <div className='w-full h-fit flex flex-row items-center justify-between'>
            <h1 className='text-sm font-semibold'>General Settings</h1>
            <button onClick={() => setIsExpanded(!isExpanded)} className={`p-1 duration-300 ${isExpanded && "rotate-180"}`}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                </svg>
            </button>
        </div>

        <div className={`w-full h-fit`}>
            <button className='w-full h-full flex flex-row items-center justify-between'>
                <span>Turn on dark mode</span>
                <ToggleSwitch></ToggleSwitch>
            </button>
        </div>

    </div>
  )
}

export default GeneralSettings