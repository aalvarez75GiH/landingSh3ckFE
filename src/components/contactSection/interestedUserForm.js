import React, { useState } from 'react'
import { useFormik, Formik } from 'formik'
import * as yup from 'yup'
import DropDownList from './dropDownList'


const validationSchema = yup.object({
    fullName: yup.string().min(3).max(100).required('hola, no te olvides de colocar tu nombre completo'),
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('No te olvides de colocar tu correo electrónico'),   
})


const InterestedUserForm = ({ handlingSubmitInterestedUser }) => {

    const [ city, setCity ] = useState('Ciudad')
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
        
        // handlingSubmitInterestedUser(values)
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

    // console.log(formik.values)
    console.log(formik.errors)
    
    return (
        <div className="boxContainer">
            <Formik>
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                <input
                className="input"
                name="fullName"
                placeholder="Nombre completo" 
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
                placeholder="Correo electrónico" 
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
                >Enviar</button>
            </form>
            </Formik>
            

        </div>
    )
}

export default InterestedUserForm
