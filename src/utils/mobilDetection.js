import { useState, useEffect } from 'react'


const useMobilDetection = () => {
const [ screenWidth, setScreenWidth ] = useState(null)
const [ screenHeight, setScreenHeight ] = useState(null)
    
useEffect(()=> {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)

    },[])
    
    return {
        screenWidth: screenWidth,
        screenHeight: screenHeight
    }  
    
}

 export default useMobilDetection