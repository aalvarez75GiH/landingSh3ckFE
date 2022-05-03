import React from 'react'
import successImage from '../../images/ok_success_icon.svg'
import foundImage from '../../images/ok_success_verified_icon.svg'
import { FaTimes } from 'react-icons/fa'
import { regularCopy } from './notificationData'
import { Link as LinkS } from 'react-scroll'
import { OffsetHandler } from '../../utils/settingOffsets'
import { responseDataPayment } from '../../components/notifications/notificationData'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

const NotificationUIForCheckApp = () => {
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
    const user = useSelector((state) => state.checkOrderState.user)
    const amount =  useSelector((state) => state.checkOrderState.price)
    const provisional_ref_number = useSelector((state) => state.paymentsState.provisional_ref_number)
    console.log(amount)
    console.log(response)
    
    if(response.amount < amount){
        console.log('Pago menos...')
    }
    // const url = response ? response.config.url : loginResponse.config.url
    
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
    // console.log(username)
    const nameSplittedAndCapitalized = capitalizeFirstLetter(user.name)
    // console.log('splitting response: ', responseSplitted[0])
    if (response){
        if (response.status === 404){
            return (
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS 
                onClick={closingNotification}
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                // offset={OffsetHandler('checkAProduct')}
                duration={500}
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>  
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        No encontramos el # de referencia: {provisional_ref_number} del pago en nuestra Base de datos
                    </div>
                    <LinkS
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    // offset={OffsetHandler('checkAProduct')}
                    duration={500} 
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>
                </div>
            </div>   
            )
        }
        if (response.reference_number && response.amount === amount){
            return (
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                // offset={OffsetHandler('checkAProduct')}
                duration={500} 
                onClick={closingNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={successImage} alt="successImage" />
                    <div className="notificationName">
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        <b>{language === 'ES' ? responseData.successMessage : responseData.successMessage_EN }</b>
                    </div>
                    <div className="notificationResponse">
                        # de referencia: {response.reference_number}
                    </div>
                    <div className="notificationResponse">
                        Tu número de teléfono: {user.phoneNumber}
                    </div>
                    <div className="notificationResponse">
                        El monto tránsferido: {response.amount}$
                    </div>
                    <LinkS
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    // offset={OffsetHandler('checkAProduct')}
                    duration={500}
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>
                </div>
                
            </div>
            )
        }
        
        if (response.amount < amount ){
            return (
                <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS 
                onClick={closingNotification}
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                // offset={OffsetHandler('checkAProduct')}
                duration={500}
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>  
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        El mónto que hemos recibido es menor que el mónto de la orden de chequéo que estás colocándo
                    </div>
                    <div className="notificationResponse">
                        <p>Mónto recibido por el banco: <b>{response.amount}$</b></p> 
                        <p>Mónto de la órden de chequeo: <b>{amount}$</b></p> 
                    </div>
                    <div className="notificationResponse">
                    Pónte en contácto con el departamento de cobranzas o soporte técnico
                    </div>
                    <LinkS
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    // offset={OffsetHandler('checkAProduct')}
                    duration={500} 
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>
                </div>
            </div>
            )
        }
        if (response.amount > amount ){
            return (
                <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS 
                onClick={closingNotification}
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                // offset={OffsetHandler('checkAProduct')}
                duration={500}
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>  
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        El mónto que hemos recibido es mayor que el mónto de la orden de chequeo que estás colocando 
                    </div>
                    <div className="notificationResponse">
                        <p>Mónto recibido por el banco: <b>{response.amount}$</b></p> 
                        <p>Mónto de la órden de chequeo: <b>{amount}$</b></p> 
                    </div>
                    <div className="notificationResponse">
                        Pónte en contácto con el departamento de cobranzas o soporte técnico
                    </div>
                    <LinkS
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    // offset={OffsetHandler('checkAProduct')}
                    duration={500} 
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>
                </div>
            </div>
            )
        }
    }
    return null     
   
}

export default NotificationUIForCheckApp
