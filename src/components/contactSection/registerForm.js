import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import { infoContact } from '../../utils/data'
import GoogleAuth5 from '../buttons/googleAuth5'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { bindActionCreators } from '@reduxjs/toolkit'

const validationSchema = yup.object({
    fullName: yup.string().min(3).max(100).required('hola, no te olvides de colocar tu nombre completo'),
    // password: yup.string().min(6).max(200).required('No te olvides de colocar tu clave'),
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('No te olvides de colocar tu correo electrónico'),
    phoneNumber: yup.string().length(11).required('No te olvides de colocar tu número de teléfono')
})


const RegisterForm = ({ googleTest }) => {
    const url_usersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/users"
    const dispatch = useDispatch()
    const {   
        openingRegView, openingContactSection, 
        activatingSpinner, settingResponse,
        openingForgotPINView,  
    } = bindActionCreators(actionCreators, dispatch)
    const language = useSelector((state) => state.sideBarState.language)

    const onSubmit = (values) => {
        handlingSubmitUser(values)
    }

    const settinRegViewAndForgotPINToFalse = () => {
        openingRegView(false) //action creator
        openingForgotPINView(false) //action creator
    }

    const handlingSubmitUser = async(user) => {
        activatingSpinner(true)
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_usersInTheCloud, user)
                    console.log(response)
                    if (response.status === 201){
                        settingResponse(response)
                        activatingSpinner(false)
                        openingContactSection(false)
                        settinRegViewAndForgotPINToFalse()
                        console.log('Gracias por registrarte')
                        return response.status
                    }
            } catch (error) {
                console.log(error)
                activatingSpinner(false)
                settingResponse(error.response)
            }
        },2000)
    } 


    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phoneNumber: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

    // console.log(formik.errors)

    return (
        <div className="boxContainer">
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                <input
                className="input"
                name="fullName"
                placeholder={language === 'ES' ? infoContact.regUsersFormPH1 : infoContact.regUsersFormPH1_EN} 
                autoComplete="on"
                type="text" 
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.fullName && formik.errors.fullName ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <input
                className="input"
                name="email"
                placeholder={language === 'ES' ? infoContact.regUsersFormPH2 : infoContact.regUsersFormPH2_EN} 
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
                placeholder={language === 'ES' ? infoContact.regUsersFormPH3 : infoContact.regUsersFormPH3_EN} 
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
                >{language === 'ES' ? infoContact.regUsersFormSendBtn : infoContact.regUsersFormSendBtn_EN}</button>

                <GoogleAuth5
                googleTest={googleTest}
                />
                
                
            
            </form>

        </div>
    )
}

export default RegisterForm