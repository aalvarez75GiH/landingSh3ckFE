import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import {MdOutlineVisibility} from 'react-icons/md'

import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { bindActionCreators } from '@reduxjs/toolkit'
import { verifyingAdminTokenRequest, requestToLoginAdminUsers } from '../../requestsToApi'
import { 
    Input, InputPassword, AdminForm, AdminLoginFormTitleContainer, 
    AdminLoginFormTitle, Button, InputWrapper, EyeWrapper  
} from './adminElements'
import { CheckAppButton } from '../checkApp/checkAppUtilities'



const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('hola, no te olvídes de colocar tu correo electrónico'),
    pin: yup.string().min(4).max(4).required('No te olvides de colocar tu PIN de seguridad'),   
})


const AdminLoginForm = ({ googleTest }) => {
    const dispatch = useDispatch()
    const {      
        activatingSpinner, settingAdminRole, 
        activatingAdminAppLoginForm, settingAdminUser,
        settingResponse
} = bindActionCreators(actionCreators, dispatch)
// const language = useSelector((state) => state.sideBarState.language)

const [typeOfPIN, setTypeOfPIN ] = useState(false)


    const onSubmit = async(values, {resetForm}) => {
        handlingSubmitLoginAdminUser(values)
        resetForm({ values:''})
    }

    const handlingSubmitLoginAdminUser = (user) => {
        console.log(user)
        activatingSpinner(true) 
        setTimeout(async() => {
            try {
               const { data } = await requestToLoginAdminUsers(user)
               console.log(data)
               localStorage.setItem('SH3CK_TOKEN', data.token)
               const response = await verifyingAdminTokenRequest(data.token)
               console.log(response)
               settingAdminUser(response.data)
               settingAdminRole(response.data.role)
               activatingAdminAppLoginForm(false)
               activatingSpinner(false)

            } catch (error) {
                console.log(error.data)
                // let dataUser = {
                //     name: error.response
                // }
                settingAdminUser(error.response.data)
                settingResponse(error.response)
                // settingResponse(error.response)
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

 
    const togglingPINVisibility = () => {
        setTypeOfPIN(!typeOfPIN)
    }
    

    return (
        <>
        <AdminLoginFormTitleContainer>
            <AdminLoginFormTitle>Inicia Sesión</AdminLoginFormTitle>    
        </AdminLoginFormTitleContainer>
        <AdminForm
        onSubmit={formik.handleSubmit}
        >
            <Input
            autoComplete="on"
            placeholder='Correo electrónico'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            style={{
                borderBottom: `${formik.touched.referenceNumber && formik.errors.referenceNumber ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
            }}
            />
            <InputWrapper>
            <InputPassword
            type={!typeOfPIN ? 'password' : 'text'}
            placeholder='#PIN (sólo 4 digitos)'
            value={formik.values.pin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="pin"
            style={{
                borderBottom: `${formik.touched.referenceNumber && formik.errors.referenceNumber ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
            }}
            />
                <EyeWrapper>
                    <MdOutlineVisibility
                        onClick={togglingPINVisibility}
                        className="eyeIcon"
                        />
                </EyeWrapper>
            </InputWrapper>
            <Button
            type="submit"
            >Aceptar</Button>
        </AdminForm>
        
        </>
        
    )
}

export default AdminLoginForm