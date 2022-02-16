import React from 'react'
import successImage from '../../images/ok_success_icon.svg'
import foundImage from '../../images/ok_success_verified_icon.svg'
import { FaTimes } from 'react-icons/fa'
import { regularCopy } from './notificationData'
import { Link as LinkS } from 'react-scroll'
import { OffsetHandler } from '../../utils/settingOffsets'


const NotificationBox = ({ 
    response, 
    responseData, 
    toggleNotification,
    language,
}) => {
    console.log(response)
    console.log(response.config)
    const url = response.config.url
    const url_regUsers = "https://intense-atoll-00786.herokuapp.com/api/users"
    const url_interestedUsers = "https://intense-atoll-00786.herokuapp.com/api/interestedUsers"

    let responseSplitted = response.data.split(' ')
    // console.log('splitting response: ', responseSplitted[0])
    if (response){
        if (response.status === 400){
            return (
            // <div className="notificationContainer">
            <div className={response ? 'notificationContainer_open' : 'notificationContainer'}>
                <LinkS 
                onClick={toggleNotification}
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
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{responseSplitted[0]}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                    {language === 'ES' ? responseData.errorMessage : responseData.errorMessage_EN}
                    </div>
                    
                    <LinkS 
                    className="notificationBtn"
                    onClick={toggleNotification}
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
                onClick={toggleNotification}
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
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{responseSplitted[0]}</b>    
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
                    onClick={toggleNotification}
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
                onClick={toggleNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={successImage} alt="successImage" />
                    <div className="notificationName">
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{responseSplitted[0]}</b>    
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
                    onClick={toggleNotification}
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
                onClick={toggleNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </LinkS>
                <div className="notificationWrapper">
                    <img src={successImage} alt="successImage" />
                    <div className="notificationName">
                        <span className="notificationSpan">
                            <b>{language === 'ES' ? regularCopy.hola : regularCopy.hello} {''}{responseSplitted[0]}</b>    
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
                    onClick={toggleNotification}
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
