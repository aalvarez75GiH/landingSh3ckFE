import React, {useState} from 'react'
import { useFormik } from 'formik'
import {MdOutlineVisibility} from 'react-icons/md'
import * as yup from 'yup' 



const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de email válida').required(),
    pin: yup.string().min(4).max(4).required(),   
})


const LoginSideBarForm = ({ 
    handlingLogin
}) => {

    const [typeOfPIN, setTypeOfPIN ] = useState(false)
    
    const onSubmit = async(values) => {
        handlingLogin(values)
    }

    const togglingPINVisibility = () => {
        setTypeOfPIN(!typeOfPIN)
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
                <div className="inputWrapper">
                <input
                className="input"
                name="pin"
                autoComplete="on"
                placeholder="#PIN (solo 4 dígitos)" 
                type={!typeOfPIN ? 'password' : 'text'} 
                value={formik.values.pin}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.pin && formik.errors.pin ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <div className="eyeWrapper">
                        <MdOutlineVisibility
                        onClick={togglingPINVisibility}
                        className="eyeIcon"
                        />
                    </div>
                </div >
                

                {/* <div className="inputWrapper">
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
                
                </div> */}
                <button
                type="submit"
                >Enviar</button>
            </form>

        </div>
    )
}

export default LoginSideBarForm