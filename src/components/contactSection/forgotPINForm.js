import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import { infoContact } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { bindActionCreators } from '@reduxjs/toolkit'
import { requestToGenerateNewPIN } from '../../requestsToApi'


const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('No te olvides de colocar tu correo electrónico'),
    phoneNumber: yup.string().length(11).required('No te olvides de colocar tu número de teléfono')
})


const ForgotPINForm = ({ 
    language 
}) => {
 
    const dispatch = useDispatch()
    const {   openingForgotPINView, activatingSpinner, settingResponse  } = bindActionCreators(actionCreators, dispatch)
    const forgotPIN = useSelector((state) => state.contactSectionState.forgotPIN)

    const onSubmit = (values) => {
        handlingNewPINRequest(values)
    }

    const handlingNewPINRequest = async(dataToRequest) => {
        // console.log(dataToRequest)
        activatingSpinner(true)
        try {
            const response = await requestToGenerateNewPIN(dataToRequest)
            console.log(response.status)
            if (response.status === 200){
                console.log(response)
                settingResponse(response)
                activatingSpinner(false)
                return response.status
            }
        } catch (error) {
            console.log(error)
            activatingSpinner(false)
            settingResponse(error.response)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            phoneNumber: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

    // console.log(formik.values)
    console.log(formik.errors)

    return (
        <div className="boxContainer">
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                <input
                className="input"
                name="email"
                placeholder={language === 'ES' ? infoContact.forgotPINFormPH1 : infoContact.forgotPINFormPH1_EN} 
                type="text" 
                autoComplete="on"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.email && formik.errors.email ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <input
                className="input"
                name="phoneNumber"
                placeholder={language === 'ES' ? infoContact.forgotPINFormPH2 : infoContact.forgotPINFormPH2_EN} 
                type="text" 
                autoComplete="on"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.phoneNumber && formik.errors.phoneNumber ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <button
                className="sendDataBtn"
                type="submit"
                >{language === 'ES' ? infoContact.forgotPINFormSendBtn : infoContact.forgotPINFormSendBtn_EN}</button>
                <button
                onClick={() => openingForgotPINView(!forgotPIN)}
                className="comeBackBtn"
                type="submit"
                >{language === 'ES' ? infoContact.forgotPINFormBackBtn : infoContact.forgotPINFormBackBtn_EN}</button>
            </form>

        </div>
    )
}

export default ForgotPINForm