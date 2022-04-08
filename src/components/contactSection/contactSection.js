import React from 'react'
import InterestedUsersForm from '../contactSection/interestedUserForm'
import LoginForm from './loginForm'
import FormHeader from './formHeader'
import { addingInterestedUserToDB } from '../../requestsToApi'
// import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../notifications/notificationData'
import { infoContact } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import RegisterForm from './registerForm'
import ForgotPINForm from './forgotPINForm'


const ContactSection = ({ googleTest }) => {
    
    const dispatch = useDispatch()
    const {    
        settingResponse, openingContactSection,
        activatingSpinner,
        } = bindActionCreators(actionCreators, dispatch)
    const isContactSectionOpen = useSelector((state) => state.contactSectionState.isContactSectionOpen)
    const active = useSelector((state) => state.contactSectionState.active)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    
    const handlingSubmitInterestedUser = (interestedUser) => {
        activatingSpinner(true)
        setTimeout(async()=> {
            try {
                const response = await addingInterestedUserToDB(interestedUser)
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
    className={ isContactSectionOpen ? 'contactContainer_open' : 'contactContainer' }>
        
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
            
            { active === 'login_form'  && !loggedIn  ? 
            <LoginForm
            googleTest={googleTest}
            />
            :
            null
            }
            
            { active === 'check'  && !loggedIn  ? 
            <RegisterForm
            googleTest={googleTest}
            />
            :
            null
            }
            { active === 'forgotPIN'  && !loggedIn  ? 
            <ForgotPINForm/>
            :
            null
            }
            </div>
            
        </div>
        
    </div>
)
}


export default ContactSection