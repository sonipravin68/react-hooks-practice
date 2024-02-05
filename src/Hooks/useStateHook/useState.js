import React, { useState } from 'react'

const UseState = () => {

 const[count ,setCount] = useState(0)

  return (
    <>

      <button onClick={()=>setCount(count+1)}>Incrementt(+)</button>
      <h1>{count}</h1>
      <button onClick={()=>(count === 0) ? setCount(0) :setCount(count-1)}>Decrement(-)</button>
    </>
  )
}

export default UseState