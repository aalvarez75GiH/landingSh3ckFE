import React from 'react'
import StartSh3ckProcess from './startSh3ckProcess'
import CitySection from './citySection'
import CheckerSection from './checkerSection'
import { useSelector } from 'react-redux'

const CheckSection = () => {
     const level = useSelector((state) => state.checkSectionState.level)
     const isOpen = useSelector((state) => state.checkSectionState.isOpen)
     console.log(level)
     return (
         <>
         {
             level === 'level1' ?
             <CitySection />
             :
             <StartSh3ckProcess/>
         }
         {
             level === 'level2' ?
             <CheckerSection />
             :
             <StartSh3ckProcess/>
         }
         
         </>
    )   
}

export default CheckSection