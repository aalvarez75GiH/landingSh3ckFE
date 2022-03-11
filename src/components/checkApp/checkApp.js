import React from 'react'
import CheckStarting from './checkStarting'
import CitiesSection from './citiesSection'
import CheckersSection from './checkersSection'
import { useSelector } from 'react-redux'

const CheckApp = () => {
     const level = useSelector((state) => state.checkSectionState.level)
     console.log(level)
     
    switch (level) {
        case 'level1':
            return <CitiesSection />    
         
        case 'level2':
            return <CheckersSection />   
        case 'Starting':
            return <CheckStarting />
        default:
            return <CheckStarting/> 
    }
}

export default CheckApp