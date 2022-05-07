import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { CheckAppButton } from '../../checkApp/checkAppUtilities'
import { getRequestToOneTransaction, postRequestToBankSimUsers, postRequestToBankSimSh3ck } from '../../../requestsToApi'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { 
    CheckPaymentType, CheckPaymentIcon, 
    CheckPaymentCaption, CheckPaymentActiveBar, 
    PaymentInstContainer, PaymentsInsDetails, 
    PaymentsInsTitle, InstructionsContainer, 
    Instruction, InstructionImg, 
    InstructionCaption, MobilPaymentInfo,
    PaymentsForm, ReferenceNumberInput, BankSimButton, BankSimInput, BankForm, TextField, CustomButton, BanckFormContainer

} from './paymentElements.js'

import number1_image from '../../../images/number-one.png'
import number2_image from '../../../images/number-2.png'



export const CheckPaymentTypeTileComponent = ({ payment }) => {
    const dispatch = useDispatch()
    const { 
        settingPaymentInCheckOrder, activatingPaymentInstructions, 
        activatingDescriptionTile, settingActivePaymentType
    } = bindActionCreators(actionCreators, dispatch)
    const active_payment_type = useSelector((state) => state.paymentsState.active_payment_type)
    const handlingPaymentInstructionsAndCheckOrder = () => {
        activatingDescriptionTile(false)
        settingActivePaymentType(payment)
        activatingPaymentInstructions(true)
    }
    console.log(payment._id)
    return (
        <CheckPaymentType
        to="ancor"  
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
            active_payment_type={active_payment_type}
            ></CheckPaymentActiveBar>
        </CheckPaymentType>
    )
}


const validationSchema = yup.object({
    referenceNumber: yup.string().min(1).max(12).required('Hola, no te olvides de colocar un número de referencia')   
})

export const AnimateHeightPayments = ({ type }) => {
    const dispatch = useDispatch()
    const { 
        settingPaymentInCheckOrder, activatingCheckAppButton, 
        activatingForm, settingResponse,
        activatingSpinner, provisionalRefNumber 
    } = bindActionCreators(actionCreators, dispatch) 
    const active_payment_instructions = useSelector((state) => state.paymentsState.active_payment_instructions)
    const active_payment_type = useSelector((state) => state.paymentsState.active_payment_type)
    const user = useSelector((state) => state.checkOrderState.user)
    const amount =  useSelector((state) => state.checkOrderState.price)

    const [amountValue, setAmountValue] = useState(0)
    
    const onInputChangeAmount = (e) => {
        setAmountValue(e.target.value)
        console.log(amountValue)
    }
    const variants = {
        open: {
          opacity: 1,
          height: 'auto',
          x: 0,
          y: 0
        },
        collapsed: { opacity: 0, height: 0, x: 0, y: 0 }
      }

    const onSubmit = async(values, {resetForm}) => {
        provisionalRefNumber(values.referenceNumber)
        activatingSpinner(true)
        console.log(values)
        resetForm({ values:''})
        const date = new Date()
        const date_formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)
        const payment_info = {
            name: user.name,
            bank: active_payment_type.bank_name,
            phoneNumber:user.phoneNumber,
            amount: amount,
            date: date_formatted,
            reference_number: values.referenceNumber
        }
        setTimeout(async() => {
            try {
                const responseFromTransactions = await getRequestToOneTransaction(payment_info.reference_number)
                if (responseFromTransactions.amount === amount){
                    settingPaymentInCheckOrder(payment_info)
                    settingResponse(responseFromTransactions)
                    activatingSpinner(false)
                    console.log(responseFromTransactions)
                    return
                }
                if (responseFromTransactions.amount < amount){
                    settingResponse(responseFromTransactions)
                    activatingSpinner(false)
                    console.log(responseFromTransactions)
                    return
                }
                if (responseFromTransactions.amount > amount){
                    settingResponse(responseFromTransactions)
                    activatingSpinner(false)
                    console.log(responseFromTransactions)
                    return
                }
                
            } catch (error) {
                console.log(error.response.data.message)
                settingResponse(error.response)
                activatingSpinner(false)
            }
        }, 2000)
        
    }

      const formik = useFormik({
        initialValues: {
            referenceNumber: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

    const activatingButtonAndSettingActive = () => {
        activatingCheckAppButton(true)
        activatingForm('payment_ui')

    }

        
    const submitBankForm = async(amount) => {
        const date = new Date()
        const date_formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)
        const randomReferenceNumber = Math.floor(1000000000 + Math.random() * 9000000000)
        const reference_number = randomReferenceNumber.toString()
        console.log('i am the bank simulator')
        console.log(amount)
        let dataUser = {
            fullName: user.name,
            email: user.email,
            date: date_formatted,
            amount: amount,
            reference_number: reference_number,
            account_number: "0154*********234",
            beneficiary: "Sh3ck C.A",
            sh3ck_email: "mariangel_alvarez@hotmail.com"
        }
        try {
            const responseBankUser = await postRequestToBankSimUsers(dataUser)
            if(responseBankUser.status === 200){
                const responseBankSh3ck = await postRequestToBankSimSh3ck(dataUser)
                console.log(responseBankSh3ck)
            }
            console.log(responseBankUser)
        } catch (error) {
            console.log(error)
        }

    }
    console.log(formik.values)
 
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
                                <InstructionCaption>{active_payment_type.phoneNumber}</InstructionCaption>
                                <InstructionCaption>{active_payment_type.identification}</InstructionCaption>
                                <InstructionCaption>{active_payment_type.bank_name}</InstructionCaption>
                            </MobilPaymentInfo>
                            <Instruction>
                                <InstructionImg
                                src={number2_image}
                                />
                                <InstructionCaption>Al recibír el correo por parte del banco tóma el # de referencia e introdúcelo en la siguiente caja de texto</InstructionCaption>
                            </Instruction>            
                        </InstructionsContainer>                      
                </PaymentsInsDetails>

                <PaymentsForm
                onSubmit={formik.handleSubmit}
                >
                    <ReferenceNumberInput
                    placeholder='Nro referencia ó recíbo'
                    value={formik.values.referenceNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="referenceNumber"
                    onFocus={activatingButtonAndSettingActive}
                    // onFocus={() => activatingCheckAppButton(true)}
                    style={{
                        borderBottom: `${formik.touched.referenceNumber && formik.errors.referenceNumber ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                    }}
                    />
                    <CheckAppButton
                    type="submit"
                    buttonLabel='Aceptar'
                    autoComplete="on"
                    />
                </PaymentsForm>
                <BankForm
                onSubmit={e => {
                  e.preventDefault();
                  submitBankForm(amountValue);
                }}>
                <BanckFormContainer>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id="amount"
                    name="amount"
                    label="Amount"
                    value={amountValue}
                    onChange={(e) => onInputChangeAmount(e)}
                  />
                  <CustomButton
                    
                  />
                </BanckFormContainer>
              </BankForm>
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
                                  <InstructionCaption>{active_payment_type.email}</InstructionCaption>
                              </MobilPaymentInfo>
                              <Instruction>
                                  <InstructionImg
                                  src={number2_image}
                                  />
                                  <InstructionCaption>Al recibír el correo por parte de Wells Fargo toma el código de confirmación e introdúcelo en la siguiente caja de texto</InstructionCaption>
                              </Instruction>
                                                      
                          </InstructionsContainer>    
                  </PaymentsInsDetails>
                  <PaymentsForm
                onSubmit={formik.handleSubmit}
                >
                    <ReferenceNumberInput
                    placeholder='Código de confirmación'
                    value={formik.values.referenceNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="referenceNumber"
                    onFocus={activatingButtonAndSettingActive}
                    style={{
                        borderBottom: `${formik.touched.referenceNumber && formik.errors.referenceNumber ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                    }}
                    />
                    <CheckAppButton
                    type="submit"
                    buttonLabel='Aceptar'
                    autoComplete="on"    
                    />
                </PaymentsForm>
  
              </PaymentInstContainer>
            )   
        }

        if (type === 'Transferencia'){
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
                      <PaymentsInsTitle>Este método de págo esta en proceso de implementación</PaymentsInsTitle>
                  </PaymentsInsDetails>
                  <CheckAppButton
                    type="submit"
                    buttonLabel='Aceptar'
                    autoComplete="on"    
                    />
              </PaymentInstContainer>
            )   
               
        }

        return null
    }
