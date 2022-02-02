import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import { infoContact } from '../../utils/data'
import GoogleAuth3 from '../buttons/googleAuth3'


const validationSchema = yup.object({
    fullName: yup.string().min(3).max(100).required('hola, no te olvides de colocar tu nombre completo'),
    // password: yup.string().min(6).max(200).required('No te olvides de colocar tu clave'),
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('No te olvides de colocar tu correo electrónico'),
    phoneNumber: yup.string().length(11).required('No te olvides de colocar tu número de teléfono')
})


const RegisterFormTest = ({ 
    handlingSubmitUser, 
    language,
    googleTest,
    isSignedIn
}) => {

    const onSubmit = (values) => {
        handlingSubmitUser(values)
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

                <GoogleAuth3
                googleTest={googleTest}
                isSignedIn={isSignedIn}
                />
                
                
            
            </form>

        </div>
    )
}

export default RegisterFormTest