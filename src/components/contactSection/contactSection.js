import React from 'react'
import InterestedUsersForm from '../contactSection/interestedUserForm'
import LoginForm from './loginForm'
import axios from 'axios'
import FormHeader from './formHeader'
// import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../notifications/notificationData'
import { infoContact } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'


const ContactSection = ({ googleTest }) => {
    const dispatch = useDispatch()
    const {    
        settingResponse, openingContactSection,
        activatingSpinner,
        } = bindActionCreators(actionCreators, dispatch)
    const isContactSectionOpen = useSelector((state) => state.contactSectionState.isContactSectionOpen)
    const active = useSelector((state) => state.contactSectionState.active)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    const url_interestedUsersInTheCloud = "https://intense-atoll-00786.herokuapp.com/api/interestedUsers"
    
 
  
    const handlingSubmitInterestedUser = (interestedUser) => {
        activatingSpinner(true)
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_interestedUsersInTheCloud, interestedUser)
                    console.log(response)
                    if (response.status === 201){
                        settingResponse(response)
                        activatingSpinner(false)
                        openingContactSection(false)
                        console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                        return response.status
                    }
            } catch (error) {
                console.log(error.response)
                activatingSpinner(false)
                settingResponse(error.response)
            }
        },2000)
        
    }

    
return (
    <div 
    id={infoContact.id}
    className={isContactSectionOpen ? 'contactContainer_open' : 'contactContainer' }>
        <div className={ isContactSectionOpen ? 'contactWrapper_open' : 'contactWrapper' }>
            <div className="contactForms">
             
            { !loggedIn  ? 
            <>
            <FormHeader />
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
            
            { active === 'check'  && !loggedIn  ? 
            <LoginForm
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


export default ContactSection