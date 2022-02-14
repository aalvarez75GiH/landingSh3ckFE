import React, {useState} from 'react'
import { useFormik } from 'formik'
import {MdOutlineVisibility} from 'react-icons/md'
import { infoLoginSB } from '../../utils/data'
import * as yup from 'yup' 



const validationSchema = yup.object({
    email: yup.string().email('Por favor introduce una dirección de email válida').required(),  
    pin: yup.string().min(4).max(4).required()
})


const LoginSideBarForm = ({ 
    language,
    handlingSubmitLoginUser
}) => {

    const [ typeOfPIN, setTypeOfPIN ] = useState(false)

    const onSubmit = async(values) => {
        handlingSubmitLoginUser(values)
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

    return (
        <div className="loginSideBoxContainer">
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                
                <input
                className="input"
                name="email"
                autoComplete="on"
                placeholder={language === 'ES' ? infoLoginSB.loginSBPH1 : infoLoginSB.loginSBPH1_EN} 
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
                placeholder={language === 'ES' ? infoLoginSB.loginSBPH2 : infoLoginSB.loginSBPH2_EN}
                type={!typeOfPIN ? 'password' : 'text'} 
                value={formik.values.password}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.pin && formik.errors.pin ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                    <div className="eyeWrapper">
                        <MdOutlineVisibility
                        className="eyeIcon"
                        onClick={togglingPINVisibility}
                        />

                    </div>
                </div>
                <button
                className="sendDataBtn"
                type="submit"
                >{language === 'ES' ? infoLoginSB.loginSBBtnLabel : infoLoginSB.loginSBBtnLabel_EN}</button>
            </form>

        </div>
    )
}

export default LoginSideBarForm