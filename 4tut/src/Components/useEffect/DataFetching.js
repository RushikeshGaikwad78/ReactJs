import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts,setPosts] = useState([]);

    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    //if empty array is not passed here then the data is fetched in infinte loop

  return (
    <div>
        <ul>
            {
                posts.map(post => <h1 key={post.id}>{post.title}</h1>)
            }
        </ul>
    </div>
  )
}

export default DataFetching