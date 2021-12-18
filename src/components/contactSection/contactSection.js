import React, { useState } from 'react'
import  { motion } from 'framer-motion'

import InterestedUsersForm from '../contactSection/interestedUserForm'
import CheckSection from './checkSection'
import LoadingSpinner from '../../utils/loadingSpinner' 
import OptionsForms from './optionsForms'
import LoginForm from './loginForm'
import NotificationBox from '../notifications/NotificationBox'
import axios from 'axios'
import picture from '../../images/2034873_chat_app_media_mobile_social_icon.svg'
import FormHeader from './formHeader'
import { responseDataInterested, responseDataRegister, responseDataLogin } from '../notifications/notificationData'


const ContactSection = ({
    id,
    loggedIn,
    handlingSubmitLoginUser,
    loginResponse,
    toggleNotificationLogin

}) => {
   
    const [ upLoadingUser, setUpLoadingUser ] = useState(false)
    const [ active , setActive ] = useState('interested') 
    const [ regView, setRegView ] = useState(false)
    const [response, setResponse ] = useState(null)
    // const url_interestedUsers = "http://192.168.1.102:5000/api/interestedUsers"
    // const url_users = "http://192.168.1.102:5000/api/users"
    const url_interestedUsersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/interestedUsers"
    const url_usersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/users"
    console.log(loginResponse)
   

    const switchToCheck = () => {
        setActive('check')
        setRegView(false)
    }

    const switchToSignIn = () => {
        setActive('interested')
    }


    const toggleRegView = () => {
        setResponse(null)
        setRegView(true)
    }

    const toggleNotification = () => {
        setResponse(null)
        setRegView(false)
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
                        setRegView(false)
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

const togglingResponseData = () => {
    if (response && active === 'interested'){
        return responseDataInterested
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
            id={id}
            className="contactContainer">
                <div className="contactWrapper">
                    <motion.div className="contactInfo"></motion.div>
                    <div className="contactForms">
                        <LoadingSpinner/>
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
    console.log(active)
    return (
        <div 
        id={id}
        className="contactContainer">
            <div className="contactWrapper">
                <div className="contactInfo">
                    <div className="contactInfoTitleContainer">
                        <p className="contactInfoTopLine">
                            Pronto a nivel nacional
                        </p>
                        <h1 className="contactInfoTitle1"> Estamos</h1>
                        <h1 className="contactInfoTitle2"> construyendo</h1>
                        <h1 className="contactInfoTitle3"> nuestra App...</h1>
                    </div>
                    <div className="contactInfoImageContainer">
                        <img 
                        className="contactInfoImage"
                        src={picture} alt="" />
                    </div>
                    <div className="contactInfoDescContainer">
                        <div className="contactInfoOption1">
                            <h3>Estamos listos!</h3>
                            <p className="contactInfoDesc">
                                Estamos listos para ayudarte. Aún asi estamos listos para ayudarte</p>
                        </div>
                        <div className="contactInfoOption2">
                            <h3><b> Déjanos tus datos. </b></h3>
                            <p className="contactInfoDesc">Te notificaremos cuando nuestra app esté lista. Queremos saber en que ciudad estás</p>     
                        </div>
                        <div className="contactInfoOption3">
                            <h3><b>Chequea un producto</b></h3>
                            <p className="contactInfoDesc">Podemos ayudarte desde ya a chequear ese producto que quieres comprar. Compra seguro</p>    
                        </div>
                    </div>
                </div>
                
                <div className="contactForms">
                 
                 {response || loginResponse ?
                <NotificationBox
                 toggleNotification={response ? toggleNotification : toggleNotificationLogin} 
                 response={response ? response : loginResponse }
                 responseData={togglingResponseData()} 
                 switchToCheck={switchToCheck}
                 />
                 : null
                 }
                
                { !loggedIn  ? 
                <>
                <OptionsForms
                active={active === 'interested' ? 'interested' : 'signUp' } 
                switchToSignIn={switchToSignIn}
                switchToCheck={switchToCheck}
                />
                <FormHeader
                active = {active}
                loggedIn={loggedIn}
                regView={regView}
                />
                </>
                :
                null
                }
                
                { loggedIn ? 
                 <>
                 <CheckSection/>
                 </>
                 
                 :
                 null
                }
                
                    
                { active === 'interested' && !loggedIn ? 
                 <>
                 <InterestedUsersForm 
                 handlingSubmitInterestedUser={handlingSubmitInterestedUser}
                 />
                </>                     
                 :
                 null
                }
                
                { active === 'check' && !loggedIn  ? 
                <LoginForm
                regView={regView}
                toggleRegView={toggleRegView}
                handlingSubmitUser={handlingSubmitUser}
                handlingLoginUser={handlingLoginUser}
                />
                :
                null
                }
                </div>
                
            </div>
            
        </div>
    )
}

export default ContactSection

