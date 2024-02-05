import React, { useContext } from 'react'
import { MyContext } from './Parent'


const Child3 = () => {
   const myName =  useContext(MyContext)
  return (
    <div>Child3</div>
  )
}

export default Child3