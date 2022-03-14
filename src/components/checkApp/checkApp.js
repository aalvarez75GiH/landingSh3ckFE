import React from 'react'
import CheckStarting from './starting/checkStarting'
import CitiesSection from './city/citiesSection'
import CategorySection from './categories/categorySection'
import CheckersSection from './checkers/checkersSection'
import FinishingCheckOrder from './summary/finishingCheckOrder'
import { useSelector } from 'react-redux'

const CheckApp = () => {
     const level = useSelector((state) => state.checkSectionState.level)
     console.log(level)
     
    switch (level) {
        case 'Starting':
            return <CheckStarting />
        
            case 'level1':
            return <CitiesSection />

        case 'level2':
            return <CategorySection />
        
        case 'level3':
            return <CheckersSection />
        case 'level4': 
        return <FinishingCheckOrder />
        
        default:
            return <CheckStarting/> 
    }
}

export default CheckApp