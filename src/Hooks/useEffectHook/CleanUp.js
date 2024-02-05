import React, { useEffect, useState } from 'react'

const CleanUp = () => {
    const[screenWidth ,setScreenWidth] = useState(window.screen.width)

    const currentScreenWidth = () =>{
        setScreenWidth(()=> window.innerWidth)
    }
    useEffect(()=>{
        return () => {
            window.addEventListener("resize",currentScreenWidth)

        }
    })
  return (
    <div>
    <h1>the screen size of this window{screenWidth}</h1>
    </div>
  )
}

export default CleanUp