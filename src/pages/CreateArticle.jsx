import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAutoResizeTextarea } from '../hooks/useAutoResizeTextArea'

const CreateArticle = () => {

    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate(-1)
    }

    const [title, setTitle] = useState("") // article title
    const [content, setContent] = useState("")  // article content
    const [selectedImage, setSelectedImage] = useState(null) // 
    const [preview, setPreview] = useState(null) // preview the current image
    const fileInputRef = useRef(null); // Ref to access the file input
    const [isWarningBoxActive, setIsWarningBoxActive] = useState(false)
    const textAreaRef = useAutoResizeTextarea(content) // textArea hook
    const categories = [
        "Tech",
        "Finance",
        "Sports",
        "Gaming",
    ]

    const handleImageChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (file) {
        setSelectedImage(file);
        // Generate preview URL
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setPreview(null); // Clear preview
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset file input
        }
    };

  return (
    <div className='w-full h-full p-5 flex flex-col gap-5 z-10 relative'>
        
        {isWarningBoxActive &&
        
            <div className='border border-text/20 dark:border-darkText/20 fixed w-3/4 h-32 z-40 bg-background flex-col rounded-sm dark:bg-darkBackground flex justify-between left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2'>
                
                <div className='w-full h-fit gap-1 flex p-4 flex-col'>
                    <h1 className='text-sm font-medium h-fit'>Are you sure you want to exit</h1>
                    <p className='w-full h-fit text-xs opacity-60'>All your data will be lost</p>
                </div>
                
                <div className='w-full h-full flex items-end'>
                    <button onClick={() => setIsWarningBoxActive(false)} className='w-1/2 bg-secDarkBackground/5 font-medium dark:bg-secBackground/5 h-3/4 rounded-bl-sm'>
                        Cancel
                    </button>
                    <button onClick={() => handleNavigate()} className='bg-rose-500 w-1/2 h-3/4 text-darkText font-medium rounded-br-sm'> 
                        Exit
                    </button>
                </div>

            </div>
        }

        {/* go back to previous page */}
        <button onClick={() => setIsWarningBoxActive(true)} className='p-2 rounded-full w-fit bg-secBackground dark:bg-secDarkBackground'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
            </svg>
        </button>

        {preview != null ?

            <div className='w-full h-full relative'>
                <button onClick={() => handleRemoveImage()} className='p-1 absolute right-3 top-3 z-20 bg-background/60 w-fit rounded-full cursor-pointer'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                        fill="currentColor" viewBox="0 0 24 24"  
                        transform="scale(1,-1) rotate(45)">
                        <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
                    </svg>
                </button>
                <div className='w-full h-44 aspect-3/2'>
                    <img src={preview} alt="" className='rounded w-full h-full object-cover'/>
                </div>
            </div>
            
        :

            <div className='w-full h-44 bg-secBackground dark:bg-secDarkBackground rounded flex items-center justify-center flex-col border-text/20 dark:border-darkText/20 border'>
                <input 
                    required
                    type="file"
                    accept='images/*'
                    onChange={handleImageChange}
                    className='hidden w-full h-full '
                    id='image-upload'
                    ref={fileInputRef}
                />
                <label className='text-text/60 cursor-pointer dark:text-darkText/60 w-full h-full flex items-center justify-center flex-col gap-1' htmlFor="image-upload">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M21 14V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9v-2H5v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V14h2Zm-4.29-5.71a.996.996 0 0 0-1.41 0l-5.29 5.29-1.29-1.29a.996.996 0 0 0-1.41 0l-2.29 2.29V5h14v5.59L16.73 8.3Z"></path><path d="M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M21 16h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                    </svg>
                    <span className='text-xs'>Add image</span>
                </label>
            </div>

        }

        {/* category selection */}
        <div className='w-full h-fit flex flex-col gap-2 text-sm bg-secBackground dark:bg-secDarkBackground p-3 rounded-sm border border-text/20 dark:border-darkText/20'>
            <select className=''>
                {categories.map((category,_) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <hr className='dark:text-darkText/20 text-text/20'/>
        </div>
        

        {/* title field */}
        <div className='w-full h-full flex flex-col gap-1'>
            <label 
                htmlFor="TitleField"
                className=' text-sm'
            >
                Title
            </label>
            <textarea
                required
                type="text" 
                id='TitleField'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                maxLength={128}
                className='w-full font-medium text-sm outline-primary dark:outline-darkPrimary border-text/20 dark:border-darkText/20 border p-2 pl-3 rounded bg-secBackground dark:bg-secDarkBackground resize-none h-24'  
            />
        </div>

        {/* content field */}
        <div className='w-full h-full flex flex-col gap-1'>
            <label 
                htmlFor="contentField"
                className='text-sm'
            >
                Content
            </label>
            <textarea
                required
                type="text" 
                id='contentField'
                onChange={(e) => setContent(e.target.value)}
                ref={textAreaRef}
                className='w-full min-h-52 h-full text-xs outline-primary dark:outline-darkPrimary  border-text/20 dark:border-darkText/20 border p-2 rounded bg-secBackground dark:bg-secDarkBackground resize-none '  
            />
        </div>

        <div className='w-full h-full flex justify-end items-center'>
            <button onClick={() => {}} className='w-fit h-fit p-2 px-5 bg-primary dark:bg-darkPrimary text-darkText text-sm font-semibold rounded-md'>
                Publish
            </button>
        </div>

    </div>
  )
}

export default CreateArticle