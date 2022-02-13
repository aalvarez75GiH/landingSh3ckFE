import React, { useState } from 'react'
import  { motion } from 'framer-motion'

import InterestedUsersForm from '../contactSection/interestedUserForm'
import CheckSection from './checkSection'
import LoadingSpinner from '../../utils/loadingSpinner' 
import OptionsForms from './optionsForms'
import LoginForm from './loginForm'
// import LoginFormTest from './loginFormTest'
import NotificationBox from '../notifications/NotificationBox'
import axios from 'axios'
import picture from '../../images/2034873_chat_app_media_mobile_social_icon.svg'
import FormHeader from './formHeader'
import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../notifications/notificationData'
import { infoContact } from '../../utils/data'

const ContactSectionTest = ({
    language,
    loggedIn,
    handlingSubmitLoginUser,
    loginResponse,
    toggleNotificationLogin,
    isSignedIn,
    googleTest,
    active,
    regView,
    forgotPIN,
    toggleRegView,
    settinRegViewAndForgotPINToFalse,
    toggleForgotPINState,
    contactSectionOpen

}) => {
   
    const [ upLoadingUser, setUpLoadingUser ] = useState(false)
    const [response, setResponse ] = useState(null)
    // const url_interestedUsers = "http://192.168.1.102:5000/api/interestedUsers"
    // const url_users = "http://192.168.1.102:5000/api/users"
    const url_interestedUsersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/interestedUsers"
    const url_usersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/users"
    const url_generatePIN_ITC = "https://intense-atoll-00786.herokuapp.com/api/users/newPIN"
    

    const toggleNotification = () => {
        setResponse(null)
    }


    const handlingLoginUser = (values) => {
        setUpLoadingUser(true)
        setTimeout(async() => {
            handlingSubmitLoginUser(values)
            setUpLoadingUser(false)
        },2000)
    } 

    const handlingSubmitInterestedUser = (interestedUser) => {
        
        setUpLoadingUser(true)
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_interestedUsersInTheCloud, interestedUser)
                    console.log(response)
                    if (response.status === 201){
                        setResponse(response)
                        setUpLoadingUser(false)
                        console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                        return response.status
                    }
            } catch (error) {
                console.log(error.response)
                setUpLoadingUser(false)
                setResponse(error.response)
            }
        },2000)
        
    }

    const handlingSubmitUser = async(user) => {
        setUpLoadingUser(true)
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_usersInTheCloud, user)
                    console.log(response)
                    if (response.status === 201){
                        setResponse(response)
                        setUpLoadingUser(false)
                        settinRegViewAndForgotPINToFalse()
                        console.log('Gracias por registrarte')
                        return response.status
                    }
            } catch (error) {
                console.log(error)
                setUpLoadingUser(false)
                setResponse(error.response)
            }
        },2000)
    } 

    const handlingNewPINRequest = async(dataToRequest) => {
        // console.log(dataToRequest)
        setUpLoadingUser(true)
        try {
            const response = await axios.put(url_generatePIN_ITC, dataToRequest)
            console.log(response.status)
            if (response.status === 200){
                console.log(response)
                setResponse(response)
                setUpLoadingUser(false)
                return response.status
            }
        } catch (error) {
            console.log(error)
            setUpLoadingUser(false)
            setResponse(response.error)
        }
    }

const togglingResponseData = () => {
    if (response && active === 'interested'){
        return responseDataInterested
    }
    if (response && forgotPIN){
        return responseDataNewPIN
    }
    if (response && active === 'check'){
        return responseDataRegister
    }
    if (loginResponse && active === 'check'){
        return responseDataLogin
    } 
}

if (upLoadingUser){
    return (
        <div 
        id={infoContact.id}
        className="contactContainer">
            <div className="contactWrapper">
                <motion.div className="contactInfo"></motion.div>
                <div className="contactForms">
                    <LoadingSpinner language={language}/>
                    <OptionsForms/>
                    <FormHeader/>
                    { active === 'interested' && loggedIn ? <InterestedUsersForm/>:null}
                    { active === 'interested' && loggedIn === false ? <InterestedUsersForm/>:null}
                    { active === 'check' && loggedIn  ? <InterestedUsersForm/>:null}
                    { active === 'check' && loggedIn === false  ? <LoginForm/>:null}
                </div>
            </div>
        </div>
    )    
}
// console.log(active)
console.log(infoContact.id)
return (
    <div 
    id={infoContact.id}
    className={contactSectionOpen ? 'contactContainer_open' : 'contactContainer' }>
        <div className={contactSectionOpen ? 'contactWrapper_open' : 'contactWrapper' }>
            <div className="contactForms">
             
             {response || loginResponse ?
            <NotificationBox
             toggleNotification={response ? toggleNotification : toggleNotificationLogin} 
             response={response ? response : loginResponse }
             responseData={togglingResponseData()} 
            //  switchToCheck={switchToCheck}
             language={language}
             />
             : null
             }
            
            { !loggedIn  ? 
            <>
            <FormHeader
            active = {active}
            loggedIn={loggedIn}
            regView={regView}
            forgotPIN = {forgotPIN}
            language={language}
            />
            </>
            :
            null
            }
            
            { loggedIn ? 
             <>
             <CheckSection language={language}/>
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
            handlingLoginUser={handlingLoginUser}
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
