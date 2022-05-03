import React from 'react'
import successImage from '../../../images/ok_success_icon.svg'
import foundImage from '../../../images/ok_success_verified_icon.svg'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'

import { regularCopy } from '../notificationData'
import { responseDataPayment } from '../notificationData'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'

const NotificationUIForCollections = () => {
    let responseData
    const dispatch = useDispatch()
    const {  
        settingResponse,
        activatingForm, 
        gettingLoginResponseData,
        openingContactSection 
    } = bindActionCreators(actionCreators, dispatch)

    const language = useSelector((state) => state.sideBarState.language)
    const active = useSelector((state) => state.contactSectionState.active)
    const response = useSelector((state) => state.contactSectionState.response)
    const admin_user = useSelector((state) => state.adminAppState.admin_user)
    const amount =  useSelector((state) => state.checkOrderState.price)
    const provisional_ref_number = useSelector((state) => state.paymentsState.provisional_ref_number)
    console.log(amount)
    console.log(response)
    
    
    if (response && active === 'payment_ui'){
        responseData = responseDataPayment
    }

    
    const capitalizeFirstLetter = (string) => {
        const str2 = string.charAt(0).toUpperCase() + string.slice(1)
        console.log(str2.split(' ')[0]);
        return str2.split(' ')[0]    
    }

    const closingNotification = () => {
        settingResponse(null)
        activatingForm(null) 
    }
    
    const nameSplittedAndCapitalized = capitalizeFirstLetter(admin_user.name)
 
    if (response){
        if (response.status === 201){
            return (
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <div 
                onClick={closingNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </div>
                <div className="notificationWrapper">
                    <img src={successImage} alt="successImage" />
                    <div className="notificationName">
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>
                            {/* <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}</b>     */}
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        hemos registrado la transacción exitosamente...
                    </div>
                    <div className="notificationDescription">
                        <div>
                            <b><span>Nro de referencia:</span></b> <span>{response.data.reference_number}</span>
                        </div>
                        <div>
                            <b><span>por un mónto de:</span> </b> <span>{response.data.amount}$</span>

                        </div>
                    </div>
                    <div
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</div>
                </div>   
            </div>
               
            )
        }
        // ************************** Incorrect PIN number notification
        if (response.status === 400){
            return (
            // <div className="notificationContainer">
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <div 
                onClick={closingNotification} 
                className="closeIconContainer">
                    <FaTimes/>
                </div>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>
                            {/* <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}</b> */}
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        PIN incorrécto
                    </div>
                    <div className="notificationResponse">
                        Intenta de nuevo colocando otro número PIN...
                    </div>
                    {/* <div className="notificationResponse">
                    {language === 'ES' ? responseData.errorMessage : responseData.errorMessage_EN}
                    </div> */}
                    
                    <div
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}
                    </div>     
                </div>
            </div>   
            )
        }

        if (response.status === 404){
            return (
            // <div className="notificationContainer">
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <div 
                onClick={closingNotification} 
                className="closeIconContainer">
                    <FaTimes/>
                </div>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>
                            {/* <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}</b> */}
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        No te hemos encontrado en nuestra Base de datos
                    </div>
                    <div className="notificationResponse">
                        Verifica que estas usando un correo electrónico correcto ó que estás registrado con nosotros
                    </div>
                    {/* <div className="notificationResponse">
                    {language === 'ES' ? responseData.errorMessage : responseData.errorMessage_EN}
                    </div> */}
                    
                    <div
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}
                    </div>     
                </div>
            </div>   
            )
        }
        if (response.status === 409 ){
            return (
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <div 
                onClick={closingNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </div>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            {/* <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}</b> */}
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        Esta transacción ya fué realizada anteriórmente
                    </div>
                    <div className="notificationResponse">
                         <b>Nro de referencia:</b> <span>{response.data}</span>
                    </div>
                    <div 
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</div>
                </div>
            </div>   
            )
        }
        
    }
    return null     
   
}

export default NotificationUIForCollections
