import React, {useEffect} from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { AnimateHeight } from '../../checkApp/checkAppUtilities'
import {AnimateHeightPayments} from './paymentSubComponents'
import zelle_image from '../../../images/zelle-icon.png'
import { BackwardSectionComponent } from '../checkAppUtilities'
import { 
    PaymentSectionContainer,PaymentSectionWrapper,
    PaymentTitleContainer, PaymentSectionTitle,
    PaymentInfoContainer, PaymentInfoLabel,
    InfoLabel, PaymentInfoPriceLabel,
    PriceLabel, PaymentInfoSeeOrderContainer,
    SeeOrderButton,CheckPaymentTypesContainer, 
    CheckPaymentTypeOf, TrickDiv
} from './paymentElements.js'
import { CheckPaymentTypeTileComponent } from './paymentSubComponents'
import { getRequestToPayments } from '../../../requestsToApi'

const PaymentSection = () => {

    const dispatch = useDispatch()
    const {
        settingLevel, 
        settingPreviousLevel,
        activatingDescriptionTile,
        gettingPaymentsTypesFromApi,
        settingCheckTypeAtCheckOrder,
        activatingCheckAppButton,
        settingBaseAtCheckOrder     
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.overallCheckAppState.previous_level)
    const order_total_price = useSelector((state) => state.checkOrderState.price)
    const payments = useSelector((state) => state.paymentsState.payments)
    const active_payment_type = useSelector((state) => state.paymentsState.active_payment_type)
    const service_time_base = useSelector((state) => state.productToCheckState.service_time_base)
    const check_type_base = useSelector((state) => state.checkTypeState.check_type_base)
    
    let totalPrice = service_time_base + check_type_base
    
    useEffect(() => {
        const gettingPaymentsTypes = async() => {
            const responseAllPayments = await getRequestToPayments()
            console.log(responseAllPayments)
            gettingPaymentsTypesFromApi(responseAllPayments)
            settingBaseAtCheckOrder(totalPrice)
        }
        gettingPaymentsTypes()

    },[])

    const comeBack = () => {
        activatingCheckAppButton(false)
        // settingCheckTypeAtCheckOrder({})
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
        collapsed: { opacity: 0, height: 0, x: 0, y: 0 }
      }

    const renderingPaymentsTiles = payments.map((payment, index) => {
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
                    </CheckPaymentTypeOf>
                </CheckPaymentTypesContainer>
                <AnimateHeightPayments type={active_payment_type.name} />
                <TrickDiv id="ancor"></TrickDiv>
            </PaymentSectionWrapper>
        </PaymentSectionContainer>

    )   
}

export default PaymentSection