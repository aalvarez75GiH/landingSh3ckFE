import React, {useEffect} from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { AnimateHeight } from '../../checkApp/checkAppUtilities'
import zelle_image from '../../../images/zelle-icon.png'
import { CheckAppButton, BackwardSectionComponent } from '../checkAppUtilities'
import { 
    PaymentSectionContainer,PaymentSectionWrapper,
    PaymentTitleContainer, PaymentSectionTitle,
    PaymentInfoContainer, PaymentInfoLabel,
    InfoLabel, PaymentInfoPriceLabel,
    PriceLabel, PaymentInfoSeeOrderContainer,
    SeeOrderButton,CheckPaymentTypesContainer, 
    CheckPaymentTypeOf, CheckPaymentType, CheckPaymentIcon
} from './paymentElements.js'
import { CheckPaymentTypeTileComponent } from './paymentSubComponents'
import { getRequestToPayments } from '../../../requestsToApi'


const PaymentSection = () => {

    const dispatch = useDispatch()
    const {
        settingLevel, 
        settingPreviousLevel,
        activatingPaymentDetailsUI,
        activatingDescriptionTile,
        gettingPaymentsTypesFromApi     
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.overallCheckAppState.previous_level)
    const order_total_price = useSelector((state) => state.checkOrderState.price)
    const payments = useSelector((state) => state.paymentsState.payments)
    
    useEffect(() => {
        const gettingPaymentsTypes = async() => {
            const responseAllPayments = await getRequestToPayments()
            console.log(responseAllPayments)
            gettingPaymentsTypesFromApi(responseAllPayments)
        }
        gettingPaymentsTypes()
    },[])

    const comeBack = () => {
        settingLevel('checkers')
        settingPreviousLevel('payment')
    }


    const variants = {
        open: {
          opacity: 1,
          height: "145px",
          x: 0,
          y: 0
        },
        collapsed: { opacity: 0, height: 0, x: 0, y: -100 }
      }

    const renderingPaymentsTiles = payments.map((payment) => {
        return (
            <CheckPaymentTypeTileComponent
            payment={payment}
            />
        )
    })
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
                    // onClick={() => activatingCheckTypeDescription(true)}
                    onClick={() => activatingDescriptionTile(true)}
                    >
                            <SeeOrderButton>Detálles</SeeOrderButton>
                    </PaymentInfoSeeOrderContainer>
                </PaymentInfoContainer>
                <AnimateHeight
                type="payment_description"
                variants={variants}
                />
                <PaymentTitleContainer>
                    <PaymentSectionTitle>Pagar a través de: </PaymentSectionTitle>
                </PaymentTitleContainer>
                <CheckPaymentTypesContainer>
                    <CheckPaymentTypeOf>
                        {renderingPaymentsTiles}
                        {/* <CheckPaymentType>
                            <CheckPaymentIcon
                            src={zelle_image}
                            />
                        </CheckPaymentType>
                        <CheckPaymentType>

                        </CheckPaymentType>
                        <CheckPaymentType>

                        </CheckPaymentType> */}
                    </CheckPaymentTypeOf>
                </CheckPaymentTypesContainer>
                <CheckAppButton 
                buttonLabel='Siguiente'
                />
            </PaymentSectionWrapper>
        </PaymentSectionContainer>

    )   
}

export default PaymentSection