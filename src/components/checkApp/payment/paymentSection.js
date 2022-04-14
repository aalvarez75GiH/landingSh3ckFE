import React from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
// import { getRequestToCities } from '../../../requestsToApi'
import { CheckAppButton, BackwardSectionComponent } from '../checkAppUtilities'
// import '../../../sh3ck.css'
import { 
    PaymentSectionContainer,PaymentSectionWrapper,
    PaymentTitleContainer, PaymentSectionTitle
    
} from './paymentElements.js'


const PaymentSection = () => {

    const dispatch = useDispatch()
    const {
        settingLevel, 
        settingPreviousLevel,     
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.overallCheckAppState.previous_level)
    
    
    // useEffect(() => {
    //     const gettingCitiesFromAPI = async() => {
    //         const response  = await getRequestToCities()
    //         gettingCities(response)
    //     }
    //     gettingCitiesFromAPI()
    // },[])
    
    
    
    const comeBack = () => {
        settingLevel('checkers')
        settingPreviousLevel('payment')
    }


    // const renderingCitiesList = cities.map((city, index) => {  
    //     return (
    //         <CityTile
    //         city={city}
    //         index={index}
    //         />
    //     )
    // })
  

    return (
        
        <PaymentSectionContainer
        initial={previous_level === 'checkers' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <PaymentSectionWrapper>
                <BackwardSectionComponent
                comeBack={comeBack}
                />
                <PaymentTitleContainer>
                    <PaymentSectionTitle>Datos de tu pago</PaymentSectionTitle>
                </PaymentTitleContainer>
                <CheckAppButton 
                buttonLabel='Siguiente'
                />
            </PaymentSectionWrapper>
        </PaymentSectionContainer>

    )   
}

export default PaymentSection