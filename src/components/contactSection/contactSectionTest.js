import React, { useState } from 'react'
import InterestedUsersForm from '../contactSection/interestedUserForm'
import LoginForm from './loginForm'
import axios from 'axios'
import FormHeader from './formHeader'
import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../notifications/notificationData'
import { infoContact } from '../../utils/data'

const ContactSectionTest = ({
    language,
    loggedIn,
    handlingSubmitLoginUser,
    // loginResponse,
    // toggleNotificationLogin,
    isSignedIn,
    googleTest,
    active,
    regView,
    forgotPIN,
    toggleRegView,
    settinRegViewAndForgotPINToFalse,
    toggleForgotPINState,
    contactSectionOpen,
    workingSpinner,
    handlingClosingOfContactSection,
    handlingContactSectionResponse

}) => {
   
    // const url_interestedUsers = "http://192.168.1.102:5000/api/interestedUsers"
    // const url_users = "http://192.168.1.102:5000/api/users"
    const url_interestedUsersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/interestedUsers"
    const url_usersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/users"
    const url_generatePIN_ITC = "https://intense-atoll-00786.herokuapp.com/api/users/newPIN"
    

    
    const handlingSubmitInterestedUser = (interestedUser) => {
        
        workingSpinner('activate')
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_interestedUsersInTheCloud, interestedUser)
                    console.log(response)
                    if (response.status === 201){
                        handlingContactSectionResponse(response)
                        workingSpinner('close')
                        console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                        return response.status
                    }
            } catch (error) {
                console.log(error.response)
                workingSpinner('close')
                handlingContactSectionResponse(error.response)
            }
        },2000)
        
    }

    const handlingSubmitUser = async(user) => {
        workingSpinner('activate')
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_usersInTheCloud, user)
                    console.log(response)
                    if (response.status === 201){
                        handlingContactSectionResponse(response)
                        workingSpinner('close')
                        settinRegViewAndForgotPINToFalse()
                        console.log('Gracias por registrarte')
                        return response.status
                    }
            } catch (error) {
                console.log(error)
                workingSpinner('close')
                handlingContactSectionResponse(error.response)
            }
        },2000)
    } 

    const handlingNewPINRequest = async(dataToRequest) => {
        // console.log(dataToRequest)
        workingSpinner('activate')
        try {
            const response = await axios.put(url_generatePIN_ITC, dataToRequest)
            console.log(response.status)
            if (response.status === 200){
                console.log(response)
                handlingContactSectionResponse(response)
                workingSpinner('close')
                return response.status
            }
        } catch (error) {
            console.log(error)
            workingSpinner('close')
            handlingContactSectionResponse(error.response)
        }
    }



return (
    <div 
    id={infoContact.id}
    className={contactSectionOpen ? 'contactContainer_open' : 'contactContainer' }>
        <div className={contactSectionOpen ? 'contactWrapper_open' : 'contactWrapper' }>
            <div className="contactForms">
             
             {/* {response || loginResponse ?
            <NotificationBox
             toggleNotification={response ? toggleNotification : toggleNotificationLogin} 
             response={response ? response : loginResponse }
             responseData={togglingResponseData()} 
             language={language}
             />
             : null
             } */}
            
            { !loggedIn  ? 
            <>
            <FormHeader
            active = {active}
            loggedIn={loggedIn}
            regView={regView}
            forgotPIN = {forgotPIN}
            language={language}
            handlingClosingOfContactSection={handlingClosingOfContactSection}
            />
            </>
            :
            null
            }
                  
            { active === 'interested' && !loggedIn ? 
             <>
             <InterestedUsersForm 
             handlingSubmitInterestedUser={handlingSubmitInterestedUser}
             language={language}
             />
            </>                     
             :
             null
            }
            
            { active === 'check'  && !loggedIn  ? 
            <LoginForm
            regView={regView}
            forgotPIN = {forgotPIN}
            toggleRegView={toggleRegView}
            toggleForgotPINState={toggleForgotPINState}
            handlingSubmitUser={handlingSubmitUser}
            handlingSubmitLoginUser={handlingSubmitLoginUser}
            handlingNewPINRequest={handlingNewPINRequest}
            language={language}
            isSignedIn={isSignedIn}
            googleTest={googleTest}
            />
            :
            null
            }
            </div>
            
        </div>
        
    </div>
)
}

export default ContactSectionTest
