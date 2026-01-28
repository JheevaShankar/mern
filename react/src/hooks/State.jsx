import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const State = () => {
    const [ count , setCount ] =useState(0)
    const [ like , setLike ] = useState(0)
    useEffect(() => {
        console.log("from useEffect hook")
    },[like])
  return (
    <div>
      <h2>useState Hook</h2>  
      <h1>Count:{count}</h1> 
        <button onClick={()=>setCount(count + 1)}>Increment</button>
    <h2>like:{count}</h2>
    <button onClick={()=>setCount(count + 1)}>👍</button>
    <button onClick={()=>setCount(count - 1)}>👎</button>

      </div>
  )
}

export default State
