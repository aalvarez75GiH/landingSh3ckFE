import React from 'react'
import CheckStarting from './starting/checkStarting'
import CitiesSection from './city/citiesSection'
import CategorySection from './categories/categorySection'
import CheckersSection from './checkers/checkersSection'
import FinishingCheckOrder from './summary/finishingCheckOrder'
import CheckerProfile from './checkers/checkerProfile'
import { useSelector } from 'react-redux'

const CheckApp = () => {
     const level = useSelector((state) => state.overallCheckAppState.level)
     const active = useSelector((state) => state.checkersState.checker_gui_active)

     console.log(level)
     
    switch (level) {
        case 'Starting':
            return <CheckStarting />
        
            case 'city':
            return <CitiesSection />

        case 'category':
            return <CategorySection />
        
        case 'checkers':
            return (
                <>
                {
                    active ?
                    <CheckerProfile />
                    :
                    <CheckersSection />

                }
                </>
            )
        case 'summary': 
        return <FinishingCheckOrder />
        
        default:
            return <CheckStarting/> 
    }
}

export default CheckApp