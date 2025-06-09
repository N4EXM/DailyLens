import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavButton = ({icon, link}) => {

  const navigate = useNavigate()
  const handleNavigate = (link) => {
    navigate(`${link}`)
  } 

  let location = useLocation()

  return (
    <button className={`font-medium p-2 flex items-center justify-center flex-col`} onClick={() => handleNavigate(link)}>
      <i className={`${location.pathname == link ? "text-primary dark:text-darkPrimary":"text-text dark:text-darkText"}`}>{icon}</i>
    </button>
  )
}

export default NavButton