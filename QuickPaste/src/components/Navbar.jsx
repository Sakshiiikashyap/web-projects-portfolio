import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <NavLink>
        Home
       </NavLink>
       <NavLink>
        Pastes
       </NavLink>
    </div>
  )
}

export default Navbar