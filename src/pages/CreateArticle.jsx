import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAutoResizeTextarea } from '../hooks/useAutoResizeTextArea'

const CreateArticle = () => {

    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate(-1)
    }

    const [isWarningBoxActive, setIsWarningBoxActive] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [selectedImage, setSelectedImage] = useState(null)
    const [preview, setPreview] = useState(null)
    const fileInputRef = useRef(null); // Ref to access the file input
    const textAreaRef = useAutoResizeTextarea(content)

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
    <div className='w-full h-full p-5 flex flex-col gap-5 z-10 relative '>
        
        {isWarningBoxActive ? 
        
            <div className=''>

            </div>
            
        :

            <div></div>

        }

        {/* go back to previous page */}
        <button onClick={() => handleNavigate()} className='p-2 rounded-full w-fit bg-secBackground dark:bg-secDarkBackground'>
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
                className='w-full font-medium text-sm outline-none border-text/20 dark:border-darkText/20 border p-2 pl-3 rounded bg-secBackground dark:bg-secDarkBackground resize-none h-24'  
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
                className='w-full min-h-52 h-full text-xs outline-none border-text/20 dark:border-darkText/20 border p-2  rounded bg-secBackground dark:bg-secDarkBackground resize-none '  
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