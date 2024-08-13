import React from 'react'
import { Outlet , useSearchParams} from 'react-router-dom'
function Users() {
    const [searchParams, setSearchParams] = useSearchParams()     //similar to useState
    const showActiveUsers = searchParams.get('filter') === 'active' 
  return (
    <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <br/>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams()}>Reset Filter</button>

        {
            showActiveUsers ? <h2>Showing Active Users </h2> : <h2>Showing All users</h2>
        }
        <Outlet/>
    </div>
  )
}

export default Users