import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import RegisterForm from './registerForm'
import { FaEye } from 'react-icons/fa'
import ForgotPINSection from './forgotPINSection'
import {MdOutlineVisibility} from 'react-icons/md'
import { infoContact } from '../../utils/data'



const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('hola, no te olvídes de colocar tu correo electrónico'),
    pin: yup.string().min(4).max(4).required('No te olvides de colocar tu PIN de seguridad'),   
})


const LoginForm = ({ 
    handlingLoginUser,
    regView, 
    toggleRegView,
    handlingSubmitUser,
    forgotPIN,
    toggleForgotSection,
    handlingNewPINRequest,
    language
    
}) => {

    const [typeOfPIN, setTypeOfPIN ] = useState(false)
    
    const onSubmit = async(values) => {
        handlingLoginUser(values)
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

    console.log(formik.errors)

    const togglingPINVisibility = () => {
        setTypeOfPIN(!typeOfPIN)
    }

    if (regView){
        return(
            <RegisterForm 
            handlingSubmitUser={handlingSubmitUser}
            />
        )
    }

    if (forgotPIN){
        return(
            <ForgotPINSection
            handlingNewPINRequest={handlingNewPINRequest}
            toggleForgotSection={toggleForgotSection}
            
            />
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
                >{language === 'ES' ? infoContact.loginFormSendBtn : infoContact.loginFormSendBtn_EN}</button>
                <button
                onClick={toggleRegView}
                className="regButton"
                type="submit"
                >{language === 'ES' ? infoContact.loginFormRegBtn : infoContact.loginFormRegBtn_EN}</button>
                <span
                onClick={toggleForgotSection} 
                className="forgotPINSpan">{language === 'ES' ? infoContact.loginFormSpan : infoContact.loginFormSpan_EN}</span>
            </form>

        </div>
    )
}

export default LoginForm