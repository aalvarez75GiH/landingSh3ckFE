import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 



const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de email válida').required(),
    password: yup.string().min(6).max(200).required(),   
})


const LoginSideBarForm = ({ 
    handlingLogin
}) => {

    const onSubmit = async(values) => {
        
        handlingLogin(values)
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

    // console.log(formik.values)
    // console.log(formik.errors)

    return (
        <div className="loginSideBoxContainer">
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                
                <input
                className="input"
                name="email"
                autoComplete="on"
                placeholder="Correo electrónico" 
                type="email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.email && formik.errors.email ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <input
                className="input"
                name="password"
                autoComplete="on"
                placeholder="Contraseña" 
                type="password" 
                value={formik.values.password}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.city && formik.errors.city ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <button
                type="submit"
                >Enviar</button>
            </form>

        </div>
    )
}

export default LoginSideBarForm