import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavButton = ({icon, link}) => {

  const navigate = useNavigate()
  const handleNavigate = (link) => {
    navigate(`${link}`)
  } 

  let location = useLocation()

  return (
    <button className={`border-b-2 ${location.pathname == link ? "border-b-primary":"border-b-background/10"} font-medium p-1 flex items-center justify-center flex-col`} onClick={() => handleNavigate(link)}>
      <i className={`${location.pathname == link ? "text-primary":"text-text"}`}>{icon}</i>
    </button>
  )
}

export default NavButton