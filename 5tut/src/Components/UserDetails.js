import React from 'react'
import { Outlet,useParams } from 'react-router-dom'


function UserDetails() {
    const params = useParams()
    const userId = params.userId
    // const {userId} = useParams()
  return (
    <div>Details About the user {userId}
        <Outlet/>
    </div>
  )
}

export default UserDetails