import React, { useState } from 'react'
import { useFormik, Formik } from 'formik'
import * as yup from 'yup'
import DropDownList from './dropDownList'
import { infoContact } from '../../utils/data'
import { useSelector } from 'react-redux'


const validationSchema = yup.object({
    fullName: yup.string().min(3).max(100).required('hola, no te olvides de colocar tu nombre completo'),
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('No te olvides de colocar tu correo electrónico'),   
})


const InterestedUserForm = ({ 
    handlingSubmitInterestedUser,
}) => {
    
    const language = useSelector((state) => state.sideBarState.language)
    const [ city, setCity ] = useState(language === 'ES' ? infoContact.intUsersFormPH3 : infoContact.intUsersFormPH3_EN)
    const [ cityError, setCityError ] = useState(false)
    const options = ['Caracas', 'Barquisimeto', 'Valencia', 'Maracaibo', 'Athens']
    


    const onSubmit = (values) => {
        console.log(values)
        const interestedUser = {
            fullName: values.fullName,
            email: values.email,
            city: city
        }
        console.log(interestedUser)
        if (interestedUser.city === 'Ciudad'){
            setCityError(true)
            console.log(interestedUser.city)
        }
        if (interestedUser.city !== 'Ciudad'){
            handlingSubmitInterestedUser(interestedUser)
        }  
    }

  
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })
  

   
    return (
        <div className="boxContainer">
            <Formik>
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                <input
                className="input"
                name="fullName"
                placeholder={language === 'ES' ? infoContact.intUsersFormPH1 : infoContact.intUsersFormPH1_EN}
                type="text" 
                value={formik.values.fullName}
                onChange={formik.handleChange}
                autoComplete="on"
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.fullName && formik.errors.fullName ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <input
                className="input"
                name="email"
                placeholder={language === 'ES' ? infoContact.intUsersFormPH2 : infoContact.intUsersFormPH2_EN}
                type="email" 
                autoComplete="on"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.email && formik.errors.email ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <DropDownList
                options={options}
                city={city}
                setCity={setCity}
                cityError={cityError}
                setCityError={setCityError}
                />
                <button
                className="sendDataBtn"
                type="submit"
                >{language === 'ES' ? infoContact.intUsersFormBtnLabel : infoContact.intUsersFormBtnLabel_EN}</button>
            </form>
            </Formik>
            

        </div>
    )
}

export default InterestedUserForm
