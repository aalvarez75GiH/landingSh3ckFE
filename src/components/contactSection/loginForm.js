import React, { useState } from 'react'
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
import { verifyingTokenRequest, requestToLoginUsers } from '../../requestsToApi'



const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('hola, no te olvídes de colocar tu correo electrónico'),
    pin: yup.string().min(4).max(4).required('No te olvides de colocar tu PIN de seguridad'),   
})


const LoginForm = ({ googleTest }) => {
    const dispatch = useDispatch()
    const {   
        openingRegView, openingForgotPINView,   
        activatingSpinner,openingQASideBar,
        settingCurrentUser, handlingIsLoggedIn, 
        handlingIsLoggedOut, settingUserInCheckOrder,
        settingResponse, activatingForm
} = bindActionCreators(actionCreators, dispatch)
const regView = useSelector((state) => state.contactSectionState.regView)
const forgotPIN = useSelector((state) => state.contactSectionState.forgotPIN)
const language = useSelector((state) => state.sideBarState.language)
const active = useSelector((state) => state.contactSectionState.active)
const [typeOfPIN, setTypeOfPIN ] = useState(false)


    const onSubmit = async(values) => {
        handlingSubmitLoginUser(values)
    }

    const handlingSubmitLoginUser = async(user) => {
        openingQASideBar(false) //action  
        activatingSpinner(true) //action
        setTimeout(async() => {
            try {
                const { data } = await requestToLoginUsers(user)
                console.log(data)
                localStorage.setItem('SH3CK_TOKEN', data.token)
                const response = await verifyingTokenRequest(data.token)
                console.log(response)
                console.log(response.data.name)
                let name = response.data.name
                settingUserInCheckOrder({
                    name: response.data.name,
                    email: response.data.email,
                    phoneNumber: response.data.phoneNumber,
                    picture: response.data.picture

                })
                settingCurrentUser(name)
                // gettingLoginResponseData(response)  
                settingResponse(response)
                activatingSpinner(false) 
                handlingIsLoggedIn(true)
                handlingIsLoggedOut(false)     
            } catch (error) {
                console.log(error.response)
                // gettingLoginResponseData(error.response)
                settingResponse(error.response)
                activatingSpinner(false) 
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
    
    const activatingRegForm = () => {
        openingRegView(!regView)
        activatingForm('check')
    }

    // if (active === 'check' && regView){
    //     return(
    //         <RegisterForm />
    //     )
    // }

    // if (active === 'forgot_pin' && forgotPIN){
    //     return(
    //         <ForgotPINForm />
    //     ) 
        
    // }

    const activatingForgotPINDeactivatingLoginForm = () => {
        openingForgotPINView(!forgotPIN)
        activatingForm('forgotPIN')
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
                onClick={activatingRegForm}
                className="regButton"
                type="submit"
                >{language === 'ES' ? infoContact.loginFormRegBtn : infoContact.loginFormRegBtn_EN}</button>
                <span
                onClick={activatingForgotPINDeactivatingLoginForm} 
                className="forgotPINSpan">{language === 'ES' ? infoContact.loginFormSpan : infoContact.loginFormSpan_EN}</span>
                <GoogleAuth5
                googleTest={googleTest}
                />
            </form>

        </div>
    )
}

export default LoginForm