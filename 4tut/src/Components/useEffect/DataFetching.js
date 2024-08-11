import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost] = useState([]);
    const [id,setId] = useState(1);
    const [idFromButtonClick,setidFromButtonClick] = useState(1);

    useEffect (()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            // console.log(res)
            setPost(res.data)
            // setId(res.id)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
    //if empty array is not passed here then the data is fetched in infinte loop
    
    const handleClick = () => {
        setidFromButtonClick(id)
    }

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <br></br>
        {post.title}
        <br></br>
        <button onClick={handleClick}>Click Me!!!</button>
    </div>
  )
}

export default DataFetching