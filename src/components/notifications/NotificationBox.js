import React from 'react'
import successImage from '../../images/ok_success_icon.svg'
import foundImage from '../../images/ok_success_verified_icon.svg'
import { FaTimes } from 'react-icons/fa'
import { regularCopy } from './notificationData'
import { Link as LinkS } from 'react-scroll'
import { OffsetHandler } from '../../utils/settingOffsets'
import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../../components/notifications/notificationData'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import { useEffect } from 'react'

const NotificationBox = ({  
    // toggleNotification,
}) => {
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
    const loginResponse = useSelector((state) => state.homeState.loginResponse)
    // const response = useSelector((state) => state.contactSectionState.response)
    const response = useSelector((state) => loginResponse ? loginResponse : state.contactSectionState.response)
    const forgotPIN = useSelector((state) => state.contactSectionState.forgotPIN)
    console.log(response)
    console.log(response.config)
    console.log(loginResponse)
    const url = response.config.url
    // const url_regUsers = "https://intense-atoll-00786.herokuapp.com/api/users"
    const url_interestedUsers = "https://intense-atoll-00786.herokuapp.com/api/interestedUsers"
   
    
    if (response && active === 'interested'){
        responseData = responseDataInterested 
    }
    if (response && forgotPIN){
        responseData = responseDataNewPIN
    }
    if (response && active === 'check'){
        responseData = responseDataRegister
    }
    if (loginResponse && active === 'check'){
        responseData = responseDataLogin
    } 
    

    
    const capitalizeFirstLetter = (string) => {
        const str2 = string.charAt(0).toUpperCase() + string.slice(1)
        console.log(str2.split(' ')[0]);
        return str2.split(' ')[0]    
    }

    const closingNotification = () => {
        settingResponse(null)
        gettingLoginResponseData(null) //action
        activatingForm(null) //action
        openingContactSection(false) //action
    }

    const nameSplittedAndCapitalized = capitalizeFirstLetter(response.data)
    // console.log('splitting response: ', responseSplitted[0])
    if (response){
        if (response.status === 400){
            return (
            // <div className="notificationContainer">
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS 
                onClick={closingNotification}
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                offset={OffsetHandler('checkAProduct')}
                duration={500} 
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            {/* <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{responseSplitted[0]}</b> */}
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                    {language === 'ES' ? responseData.errorMessage : responseData.errorMessage_EN}
                    </div>
                    
                    <LinkS 
                    className="notificationBtn"
                    onClick={closingNotification}
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={OffsetHandler('checkAProduct')}
                    duration={500}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>     
                </div>
            </div>   
            )
        }
        if (response.status === 409){
            return (
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS 
                onClick={closingNotification}
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                offset={OffsetHandler('checkAProduct')}
                duration={500}
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={foundImage} alt="successImage" />
                    <div className="notificationName"> 
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{nameSplittedAndCapitalized}</b>
                            {/* <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{responseSplitted[0]}</b>      */}
                        </span>    
                    </div>
                    <div className="notificationResponse">
                    {language === 'ES' ? responseData.errorMessage : responseData.errorMessage_EN}
                    </div>
                    <LinkS
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={OffsetHandler('checkAProduct')}
                    duration={500} 
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>
                </div>
            </div>   
            )
        }
        if (response.status === 201){
            return (
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                offset={url === url_interestedUsers ? -5000 : OffsetHandler('checkAProduct') }
                duration={url === url_interestedUsers ? 1000 : 500} 
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
                    {language === 'ES' ? responseData.successMessage : responseData.successMessage_EN }
                    </div>
                    <LinkS
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={url === url_interestedUsers ? -5000 : OffsetHandler('checkAProduct') }
                    duration={url === url_interestedUsers ? 1000 : 500} 
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>
                </div>
                
            </div>
            )
        }
        if (response.status === 200){
            return (
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS
                to="nextStepSection"  
                activeClass="active"
                spy={true}
                smooth={true}
                offset={OffsetHandler('checkAProduct')}
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
                        {language === 'ES' ? responseData.successMessage : responseData.successMessage_EN }
                    </div>
                    <LinkS
                    to="nextStepSection"  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={OffsetHandler('checkAProduct')}
                    duration={500}
                    className="notificationBtn"
                    onClick={closingNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</LinkS>
                </div>
                
            </div>
            )
        }
        if (response.status === 500) {
            return (
                <div>
                    <b>{language === 'Es' ? regularCopy.error500Copy : regularCopy.continueBtnCopy_EN}</b>
                </div>
            )
        }
    }
    return null     
   
}

export default NotificationBox
