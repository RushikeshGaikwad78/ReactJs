import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'

function Products() {
  return (
    <div>

        Products Page
        <br/>
        <NavLink to={"featured"}>Featured</NavLink> {/* relative links do not start with / ans will render the 
                              closest path ,if we start path using / then we need to startfrom root path */}
        <NavLink to={"new"}>New</NavLink>
        <Outlet/>
    </div>
  )
}

export default Products