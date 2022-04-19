import React from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
// import { getRequestToCities } from '../../../requestsToApi'
import { CheckAppButton, BackwardSectionComponent } from '../checkAppUtilities'
// import '../../../sh3ck.css'
import { 
    PaymentSectionContainer,PaymentSectionWrapper,
    PaymentTitleContainer, PaymentSectionTitle,
    PaymentInfoContainer, PaymentInfoLabel,
    InfoLabel, PaymentInfoPriceLabel,
    PriceLabel, PaymentInfoSeeOrderContainer,
    SeeOrderButton, PaymentDetailContainer,
    PaymentDetailInfoContainer, PaymentDetailST,
    PaymentDetailCT, PaymentDetailSTLabel, PaymentDetailSTDesc,
    PaymentDetailSTPrice,PaymentDetailCTLabel,PaymentDetailCTDesc,
    PaymentDetailCTPrice


} from './paymentElements.js'
import arrow_icon_left from '../../../images/arrow_left_back_icon.svg'

import { BackwardLeftArrowIcon, LeftArrow, BackwardLabel } from '../../checkApp/checkers/checkersElements'


const PaymentSection = () => {

    const dispatch = useDispatch()
    const {
        settingLevel, 
        settingPreviousLevel,
        activatingPaymentDetailsUI     
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.overallCheckAppState.previous_level)
    const active_payment_details_ui = useSelector((state) => state.paymentsState.active_payment_details_ui)
    const order_total_price = useSelector((state) => state.checkOrderState.price)
    const service_time_base = useSelector((state) => state.productToCheckState.service_time_base)
    const check_type_base = useSelector((state) => state.checkTypeState.check_type_base)
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
  
    const deactivatingPaymentDetailUI = () => {
        activatingPaymentDetailsUI(false)
    }

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
                <PaymentInfoContainer>
                    <PaymentInfoLabel>
                        <InfoLabel>Total:</InfoLabel>
                    </PaymentInfoLabel>
                    <PaymentInfoPriceLabel>
                        <PriceLabel>{order_total_price}$</PriceLabel>
                    </PaymentInfoPriceLabel>
                    <PaymentInfoSeeOrderContainer
                    onClick={() => activatingPaymentDetailsUI(true)}
                    >
                            <SeeOrderButton>Detálles</SeeOrderButton>
                    </PaymentInfoSeeOrderContainer>
                </PaymentInfoContainer>
                <PaymentDetailContainer
                initial={{ x: '100vw' }}
                animate={{  
                    x: active_payment_details_ui ? 0 : '100vw', 
                    opacity: active_payment_details_ui ? 1 : 0 
                }}
                transition={{ stiffness: 33 }}
                exit={{  opacity: 0 }}
                >
                    <BackwardLeftArrowIcon
                        onClick={deactivatingPaymentDetailUI}
                        >
                            <LeftArrow
                            src={arrow_icon_left}
                            >
                            </LeftArrow>
                            <BackwardLabel>
                                Volver
                            </BackwardLabel>
                        </BackwardLeftArrowIcon>
                        <PaymentDetailInfoContainer>
                            <PaymentDetailST>
                                <PaymentDetailSTLabel>Tiempo de servicio:</PaymentDetailSTLabel>
                                <PaymentDetailSTDesc>(Máximo 4 horas)</PaymentDetailSTDesc>
                                <PaymentDetailSTPrice>{service_time_base}$</PaymentDetailSTPrice>
                            </PaymentDetailST>
                            <PaymentDetailCT>
                                <PaymentDetailCTLabel>Tipo de chequeo:</PaymentDetailCTLabel>
                                <PaymentDetailCTDesc>(Estándar)</PaymentDetailCTDesc>
                                <PaymentDetailCTPrice>{check_type_base}$</PaymentDetailCTPrice>
                            </PaymentDetailCT>                       


                        </PaymentDetailInfoContainer>
                    
                </PaymentDetailContainer>
                
                <CheckAppButton 
                buttonLabel='Siguiente'
                />
            </PaymentSectionWrapper>
        </PaymentSectionContainer>

    )   
}

export default PaymentSection