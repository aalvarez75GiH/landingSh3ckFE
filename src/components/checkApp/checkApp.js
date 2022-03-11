import React from 'react'
import CheckStarting from './checkStarting'
import CitiesSection from './citiesSection'
import CategorySection from './categorySection'
import CheckersSection from './checkersSection'
import FinishingCheckOrder from './finishingCheckOrder'
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