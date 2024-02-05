import React, { createContext } from 'react'
import Child1 from './Child1'


export const MyContext = createContext()
const Parent = () => {
  return (
    <div>
        <MyContext.Provider value={'Pravin'}>
            <Child1/>
        </MyContext.Provider>
    </div>
  )
}

export default Parent