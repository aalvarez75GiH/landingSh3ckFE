import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import RegisterForm from './registerForm'
import { FaEye } from 'react-icons/fa'
import {MdOutlineVisibility} from 'react-icons/md'



const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('hola, no te olvídes de colocar tu correo electrónico'),
    pin: yup.string().min(4).max(4).required('No te olvides de colocar tu PIN de seguridad'),   
})


const LoginForm = ({ 
    handlingLoginUser,
    regView, 
    toggleRegView,
    handlingSubmitUser
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

    return (
        <div className="boxContainer">
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                
                <input
                className="input"
                autoComplete="on"
                name="email"
                placeholder="Correo electrónico" 
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
                placeholder="#PIN (solo 4 dígitos)" 
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
                type="submit"
                >Enviar</button>
                <button
                onClick={toggleRegView}
                className="regButton"
                type="submit"
                >Regístrate</button>
            </form>

        </div>
    )
}

export default LoginForm