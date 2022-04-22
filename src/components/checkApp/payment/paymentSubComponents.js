import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { AnimateHeight } from '../../checkApp/checkAppUtilities'


import { CheckPaymentType, CheckPaymentIcon, CheckPaymentCaption} from './paymentElements.js'

export const CheckPaymentTypeTileComponent = ({ payment }) => {
    return (
        <CheckPaymentType>
            <CheckPaymentIcon
            src={payment.picture}
            />
            <CheckPaymentCaption>{payment.name}</CheckPaymentCaption>
        </CheckPaymentType>
    )
}