import React from 'react'

const CategoryButton = ({name, icon, handleCategory}) => {
  return (
    <button className={`border font-medium border-text rounded-sm px-2 flex flex-row items-center justify-start gap-1 p-1 text-ssm`} onClick={handleCategory}>
        <i className='text-inherit'>{icon}</i>
        <p>{name}</p>
    </button>
  )
}

export default CategoryButton