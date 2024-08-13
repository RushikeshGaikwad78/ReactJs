import React from 'react'
import { NavLink } from 'react-router-dom'
//navlink gives active class on the active link on which styles can be applied


function Navbar() {

  const navlinkStyle = ({isActive}) => {
      return {
        fontWeight : isActive ? 'bold' : 'normal',
        textDecoration : isActive ? 'none' : 'underline'
      }
  }

  return (
    <nav>
        <NavLink style={navlinkStyle} to={'/'}>Home</NavLink>
        <NavLink style={navlinkStyle} to={'/About'}>About</NavLink>
        <NavLink style={navlinkStyle} to={'/products'}>Products</NavLink>
    </nav>
  )
}

export default Navbar