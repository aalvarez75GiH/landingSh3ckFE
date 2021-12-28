import React from 'react'
import successImage from '../../images/ok_success_icon.svg'
import foundImage from '../../images/ok_success_verified_icon.svg'
import { FaTimes } from 'react-icons/fa'
import { regularCopy } from './notificationData'



const NotificationBox = ({ 
    response, 
    responseData, 
    toggleNotification,
    language,
}) => {
    console.log(response)
    let responseSplitted = response.data.split(' ')
    console.log('splitting response: ', responseSplitted[0])
    if (response){
        if (response.status === 400){
            return (
            <div className="notificationContainer">
                <div 
                onClick={toggleNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </div>
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
                    <button className="notificationBtn"
                    onClick={toggleNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</button>
                </div>
            </div>   
            )
        }
        if (response.status === 409){
            return (
            <div className="notificationContainer">
                <div 
                onClick={toggleNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </div>
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
                    <button className="notificationBtn"
                    onClick={toggleNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</button>
                </div>
            </div>   
            )
        }
        if (response.status === 201){
            return (
            <div className="notificationContainer">
                <div 
                onClick={toggleNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </div>
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
                    <button
                    className="notificationBtn"
                    onClick={toggleNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</button>
                </div>
                
            </div>
            )
        }
        if (response.status === 200){
            return (
            <div className="notificationContainer">
                <div 
                onClick={toggleNotification}
                className="closeIconContainer">
                    <FaTimes/>
                </div>
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
                    <button
                    className="notificationBtn"
                    onClick={toggleNotification}
                    >{language === 'Es' ? regularCopy.continueBtnCopy : regularCopy.continueBtnCopy_EN}</button>
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
