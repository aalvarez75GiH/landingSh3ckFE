import React from 'react'
import CheckStarting from './starting/checkStarting'
import CitiesSection from './city/citiesSection'
import CategorySection from './categories/categorySection'
import CheckersSection from './checkers/checkersSection'
import FinishingCheckOrder from './summary/finishingCheckOrder'
import CheckerProfile from './checkers/checkerProfile'
import CheckerStatistics from './checkers/checkersStatistics'
import PaymentSection from './payment/paymentSection'
import { useSelector } from 'react-redux'

const CheckApp = () => {
     const level = useSelector((state) => state.overallCheckAppState.level)
     const checker_profile_active = useSelector((state) => state.checkersState.checker_gui_active)
     const checker_stats_active = useSelector((state) => state.checkersState.checker_stats_active)

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
                    checker_profile_active ?
                        checker_stats_active ?
                            <CheckerStatistics/>
                      :
                    <CheckerProfile />
                    // <CheckerStatistics/>
                    :
                    <CheckersSection />

                }
                </>
            )
        case 'payment':
            return <PaymentSection/>
        case 'summary': 
            return <FinishingCheckOrder />
        
        default:
            return <CheckStarting/> 
    }
}

export default CheckApp