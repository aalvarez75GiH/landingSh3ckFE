import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 


const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('No te olvides de colocar tu correo electrónico'),
    phoneNumber: yup.string().length(11).required('No te olvides de colocar tu número de teléfono')
})


const ForgotPINSection = ({ handlingNewPINRequest, toggleForgotSection }) => {

    const onSubmit = (values) => {
        handlingNewPINRequest(values)
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
                placeholder="Correo electrónico" 
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
                placeholder="Teléfono" 
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
                >Enviar</button>
                <button
                onClick={toggleForgotSection}
                className="comeBackBtn"
                type="submit"
                >Volver</button>
            </form>

        </div>
    )
}

export default ForgotPINSection