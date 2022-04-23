import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { AnimateHeight } from '../../checkApp/checkAppUtilities'


import { 
    CheckPaymentType, CheckPaymentIcon, 
    CheckPaymentCaption, CheckPaymentActiveBar, 
    PaymentInstContainer, PaymentsInsDetails, 
    PaymentsInsTitle, InstructionsContainer, 
    Instruction, InstructionImg, 
    InstructionCaption, MobilPaymentInfo

} from './paymentElements.js'

import number1_image from '../../../images/number-one.png'
import number2_image from '../../../images/number-2.png'

export const CheckPaymentTypeTileComponent = ({ payment }) => {
    const dispatch = useDispatch()
    const { settingPaymentInCheckOrder, activatingPaymentInstructions, activatingDescriptionTile } = bindActionCreators(actionCreators, dispatch)
    const active_payment = useSelector((state) => state.checkOrderState.payment)
    const handlingPaymentInstructionsAndCheckOrder = () => {
        activatingDescriptionTile(false)
        settingPaymentInCheckOrder(payment)
        activatingPaymentInstructions(true)
    }
    console.log(payment._id)
    return (
        <CheckPaymentType
        to="cityContainer"  
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500} 
        onClick={handlingPaymentInstructionsAndCheckOrder}
        key={payment._id}
        >
            <CheckPaymentIcon
            src={payment.picture}
            />
            <CheckPaymentCaption>{payment.name}</CheckPaymentCaption>
            <CheckPaymentActiveBar
            payment={payment}
            active_payment={active_payment}
            ></CheckPaymentActiveBar>
        </CheckPaymentType>
    )
}

export const AnimateHeightPayments = ({ type }) => {
    const dispatch = useDispatch()
    const { activatingDescriptionTile } = bindActionCreators(actionCreators, dispatch) 
    const active_payment_instructions = useSelector((state) => state.paymentsState.active_payment_instructions)
    
    const variants = {
        open: {
          opacity: 1,

        //   height: "500px",
          height: type === 'Pago Móvil' ? "500px" : "400px",
          x: 0,
          y: 0
        },
        collapsed: { opacity: 0, height: 0, x: 0, y: 0 }
      }

    if (type === "Pago Móvil"){
        console.log(type)
        return (
            <PaymentInstContainer
            type={type}
            initial={active_payment_instructions ? "open" : "collapsed"}
            animate={active_payment_instructions ? "open" : "collapsed"}
            inherit={false}
            variants={variants}
            transition={{
                ease: "easeInOut",
                duration: 0.2,
                stiffness: 50
      
              }}
            >
                <PaymentsInsDetails>
                    <PaymentsInsTitle>¿Como hacer el págo móvil?</PaymentsInsTitle>
                        <InstructionsContainer>
                            <Instruction>
                                <InstructionImg
                                src={number1_image}
                                />
                                <InstructionCaption>Paga el mónto total de la orden usando tu banco favorito y usando los siguientes datos:</InstructionCaption>
                            </Instruction>
                            <MobilPaymentInfo>
                                <InstructionCaption>0414-527.57.18</InstructionCaption>
                                <InstructionCaption>RIF: J-123456789</InstructionCaption>
                                <InstructionCaption>Banco Nacional de Crédito(BNC)</InstructionCaption>
                            </MobilPaymentInfo>
                            <Instruction>
                                <InstructionImg
                                src={number2_image}
                                />
                                <InstructionCaption>Al recibír el correo por parte del banco tóma el # de referencia e introdúcelo en la siguiente caja de texto</InstructionCaption>
                            </Instruction>
                                                    
                        </InstructionsContainer>    
                </PaymentsInsDetails>

            </PaymentInstContainer>
        )
    }
        if (type === 'Zelle'){
            console.log(type)
            return (
                <PaymentInstContainer
                type={type}
                initial={active_payment_instructions ? "open" : "collapsed"}
                animate={active_payment_instructions ? "open" : "collapsed"}
                inherit={false}
                variants={variants}
                transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                    stiffness: 50
        
                }}
              >
                  <PaymentsInsDetails>
                      <PaymentsInsTitle>¿Como hacer el págo por Zelle?</PaymentsInsTitle>
                          <InstructionsContainer>
                              <Instruction>
                                  <InstructionImg
                                  src={number1_image}
                                  />
                                  <InstructionCaption>Paga el mónto total de la órden a la siguiente cuenta Zelle:</InstructionCaption>
                              </Instruction>
                              <MobilPaymentInfo>
                                  <InstructionCaption>cobros@sh3ck.com</InstructionCaption>
                              </MobilPaymentInfo>
                              <Instruction>
                                  <InstructionImg
                                  src={number2_image}
                                  />
                                  <InstructionCaption>Al recibír el correo por parte de Wells Fargo toma el código de confirmación e introdúcelo en la siguiente caja de texto</InstructionCaption>
                              </Instruction>
                                                      
                          </InstructionsContainer>    
                  </PaymentsInsDetails>
  
              </PaymentInstContainer>
            )   
        }

        if (type === 'nothing'){
            console.log(type)
            return null
               
        }
    }