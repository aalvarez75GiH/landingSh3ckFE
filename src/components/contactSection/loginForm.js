import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import RegisterForm from './registerForm'
import ForgotPINForm from './forgotPINForm'
import {MdOutlineVisibility} from 'react-icons/md'
import { infoContact } from '../../utils/data'
import GoogleAuth5 from '../buttons/googleAuth5'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { bindActionCreators } from '@reduxjs/toolkit'
import { verifyingTokenRequest } from '../../requestsToApi'


const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('hola, no te olvídes de colocar tu correo electrónico'),
    pin: yup.string().min(4).max(4).required('No te olvides de colocar tu PIN de seguridad'),   
})


const LoginForm = ({ googleTest }) => {
    const dispatch = useDispatch()
    const {   
        openingRegView, openingForgotPINView,   
        activatingSpinner,openingQASideBar,
        settingCurrentUser, gettingLoginResponseData, 
        handlingIsLoggedIn, handlingIsLoggedOut,
} = bindActionCreators(actionCreators, dispatch)
    const regView = useSelector((state) => state.contactSectionState.regView)
    const forgotPIN = useSelector((state) => state.contactSectionState.forgotPIN)
    const language = useSelector((state) => state.sideBarState.language)

    const [typeOfPIN, setTypeOfPIN ] = useState(false)
    const url_userLoginITC = "https://intense-atoll-00786.herokuapp.com/api/users/login"
    

    const onSubmit = async(values) => {
        handlingSubmitLoginUser(values)
    }

    const handlingSubmitLoginUser = async(user) => {
        openingQASideBar(false) //action  
        activatingSpinner(true) //action
        setTimeout(async() => {
            try {
                const { data } = await axios.post(url_userLoginITC, user)
                console.log(data)
                localStorage.setItem('SH3CK_TOKEN', data.token)
                const response = await verifyingTokenRequest(data.token)
                console.log(response)
                settingCurrentUser(response.data) //action
                gettingLoginResponseData(response)  //action
                activatingSpinner(false) //action
                handlingIsLoggedIn(true)
                handlingIsLoggedOut(false) //action
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
                gettingLoginResponseData(error.response)
                activatingSpinner(false) //action
            }
        },3000)
        
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            pin: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

    // console.log(formik.errors)

    const togglingPINVisibility = () => {
        setTypeOfPIN(!typeOfPIN)
    }

    if (regView){
        return(
            <RegisterForm />
        )
    }

    if (forgotPIN){
        return(
            <ForgotPINForm />
        ) 
        
    }

    return (
        <div className="boxContainer">
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                
                <input
                className="input"
                autoComplete="on"
                name="email"
                placeholder={language === 'ES' ? infoContact.loginFormPH1 : infoContact.loginFormPH1_EN} 
                type="email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.email && formik.errors.email ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <div className="inputWrapper">
                <input
                className="inputPassword"
                name="pin"
                autoComplete="on"
                placeholder={language === 'ES' ? infoContact.loginFormPH2 : infoContact.loginFormPH2_EN} 
                type={!typeOfPIN ? 'password' : 'text'} 
                value={formik.values.pin}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.city && formik.errors.city ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                    <div className="eyeWrapper">
                        <MdOutlineVisibility
                        onClick={togglingPINVisibility}
                        className="eyeIcon"
                        />
                    </div>
                
                </div>
                
                
                <button
                className="sendDataBtn"
                type="submit"
                >
                    {/* <Link to={`/app`}> */}
                        {language === 'ES' ? infoContact.loginFormSendBtn : infoContact.loginFormSendBtn_EN}
                    {/* </Link> */}
                </button>
                <button
                onClick={() => openingRegView(!regView)}
                className="regButton"
                type="submit"
                >{language === 'ES' ? infoContact.loginFormRegBtn : infoContact.loginFormRegBtn_EN}</button>
                <span
                onClick={() => openingForgotPINView(!forgotPIN)} 
                className="forgotPINSpan">{language === 'ES' ? infoContact.loginFormSpan : infoContact.loginFormSpan_EN}</span>
                <GoogleAuth5
                googleTest={googleTest}
                />
            </form>

        </div>
    )
}

export default LoginForm