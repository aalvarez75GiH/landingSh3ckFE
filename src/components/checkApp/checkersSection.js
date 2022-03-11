import React from 'react'
// import { useSelector } from 'react-redux'
import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import { 
    CheckerSectionContainer, CheckerSectionWrapper,
    CheckerSectionBtnWrapp, CheckerSectionBtn
 

} from './checkAppElements'


const CheckersSection = () => {
    const isOpen = useSelector((state) => state.checkSectionState.isOpen) 
    
    const dispatch = useDispatch()
    const {  
        activatingForm, openingRegView,  
        settingCurrentUser, gettingLoginResponseData,
        openingContactSection,handlingIsLoggedIn, 
        handlingIsSignedInGoogle, settingResponse, 
        gettingGoogleLoginData, settingisOpen,
        settingLevel

    } = bindActionCreators(actionCreators, dispatch)
    
    const language = useSelector((state) => state.sideBarState.language)

    const gettingOutOfCheckApp = async() => {
        localStorage.removeItem('SH3CK_TOKEN')
        handlingIsSignedInGoogle(false) //action
        handlingIsLoggedIn(false) //action
        activatingForm(null) //action
        openingContactSection(false) //action
        openingRegView(false) //action 
        gettingGoogleLoginData(null)
        gettingLoginResponseData(null) //action
        settingResponse(null)
        settingCurrentUser(null) //action
        settingisOpen(false)
        settingLevel('Starting')
    }

    return (
        <CheckerSectionContainer
        initial={{ x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CheckerSectionWrapper>
                <CheckerSectionBtnWrapp>
                    <CheckerSectionBtn
                    onClick={gettingOutOfCheckApp}
                    >
                        Continuar
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </CheckerSectionBtn>    
                </CheckerSectionBtnWrapp>
            </CheckerSectionWrapper>
        </CheckerSectionContainer>

    )   
}

export default CheckersSection