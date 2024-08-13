import React from 'react'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div>Admin User
        <Outlet/>
    </div>

  )
}

export default Admin