import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'

function Products() {
  return (
    <div>

        Products Page
        <br/>
        <NavLink to={"featured"}>Featured</NavLink>
        <NavLink to={"new"}>New</NavLink>
        <Outlet/>
    </div>
  )
}

export default Products