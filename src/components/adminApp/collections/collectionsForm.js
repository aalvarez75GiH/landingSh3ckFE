import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import {MdOutlineVisibility} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { actionCreators } from '../../../state'
import { postRequestToTransactions } from '../../../requestsToApi'
import { 
    Input, AdminForm, AdminLoginFormTitleContainer, 
    AdminLoginFormTitle, Button   
} from '../adminElements'


const validationSchema = yup.object({
    user_name: yup.string().min(3).max(50),
    reference_number: yup.string().min(1).max(12, 'Máximo 12 caractéres').required('No te olvides de colocar el número de referencia'),
    date: yup.string('Usa el formato dd/mm/aaaa').required('Introduce la fecha de la transacción'),
    amount: yup.number().required('Agrega un mónto para la transacción')   
})


const CollectionsTransactionsForm = () => {
    const dispatch = useDispatch()
    const { activatingSpinner,   settingResponse } = bindActionCreators(actionCreators, dispatch)

// const language = useSelector((state) => state.sideBarState.language)

const [typeOfPIN, setTypeOfPIN ] = useState(false)


    const onSubmit = async(values, {resetForm}) => {
        console.log(values)
        handlingTransactions(values)
        resetForm({ values:''})
    }

    const handlingTransactions = (transaction) => {
        const token = localStorage.getItem('SH3CK_TOKEN')
        activatingSpinner(true) 
        setTimeout(async() => {
            try {
               const response = await postRequestToTransactions(transaction, token)
               console.log(response)
               settingResponse(response)
               activatingSpinner(false)

            } catch (error) {
                settingResponse(error.response)
                console.log(error)
                activatingSpinner(false)
            }
        },3000)
    }
   

    const formik = useFormik({
        initialValues: {
            user_name: "",
            reference_number: "",
            date: "",
            amount: 0
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

 
    const togglingPINVisibility = () => {
        setTypeOfPIN(!typeOfPIN)
    }
    
    console.log(formik.errors)
    return (
        <>
        <AdminLoginFormTitleContainer>
            <AdminLoginFormTitle>Transacciones</AdminLoginFormTitle>    
        </AdminLoginFormTitleContainer>
        <AdminForm
        onSubmit={formik.handleSubmit}
        >
            <Input
            autoComplete="on"
            placeholder='Nombre y apellido (opcional)'
            value={formik.values.user_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="user_name"
            style={{
                borderBottom: `${formik.touched.user_name && formik.errors.user_name ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
            }}
            />
            <Input
            type='text'
            placeholder='# referencia o recibo'
            value={formik.values.reference_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="reference_number"
            style={{
                borderBottom: `${formik.touched.referenceNumber && formik.errors.referenceNumber ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
            }}
            />
            <Input
            type='text'
            placeholder='01/05/2022'
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="date"
            style={{
                borderBottom: `${formik.touched.date && formik.errors.date ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
            }}
            />
            <Input
            type='number'
            placeholder='Mónto en dólares'
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="amount"
            style={{
                borderBottom: `${formik.touched.amount && formik.errors.amount ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
            }}
            />
            
            <Button
            type="submit"
            >Aceptar</Button>
        </AdminForm>
        
        </>
        
    )
}

export default CollectionsTransactionsForm