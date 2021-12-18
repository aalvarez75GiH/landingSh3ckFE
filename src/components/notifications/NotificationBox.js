import React from 'react'
import successImage from '../../images/ok_success_icon.svg'
import foundImage from '../../images/ok_success_verified_icon.svg'
import { FaTimes } from 'react-icons/fa'




const NotificationBox = ({ 
    response, 
    responseData, 
    toggleNotification,
    toggleNotificationLogin,
    switchToCheck 

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
                            <b>Hola {''}{responseSplitted[0]}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        {responseData.errorMessage}
                    </div>
                    <button className="notificationBtn"
                    onClick={toggleNotification}
                    >Continuar</button>
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
                            <b>Hola {''}{responseSplitted[0]}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        {responseData.errorMessage}
                    </div>
                    <button className="notificationBtn"
                    onClick={toggleNotification}
                    >Continuar</button>
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
                            <b>Hola {''}{responseSplitted[0]}</b>    
                        </span>    
                    </div>
                    <div className="notificationResponse">
                        {responseData.successMessage}
                    </div>
                    <button
                    className="notificationBtn"
                    onClick={toggleNotification}
                    >Continuar</button>
                </div>
                
            </div>
            )
        }
        if (response.status === 500) {
            return (
                <div>
                    <b>ha ocurrido interno en nuestro servidor, pedimos disculpas...</b>
                </div>
            )
        }
    }
    return null     
   
}

export default NotificationBox
