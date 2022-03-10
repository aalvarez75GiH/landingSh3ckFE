import React from 'react'
import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import { 
    CheckSectionContainer, CheckSectionWrapper, 
    CheckSectionBtnWrap,CheckSectionCheckBtn,
    CheckSectionExitBtn

} from './checkSectionElements'


const StartSh3ckProcess = () => {
    const dispatch = useDispatch()
    const {
        settingLevel, settingisOpen,  
        activatingForm, openingRegView,  
        settingCurrentUser, gettingLoginResponseData,
        openingContactSection,handlingIsLoggedIn, 
        handlingIsSignedInGoogle, settingResponse, gettingGoogleLoginData,  
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
    }

    const test = () => {
        settingisOpen(true)
        settingLevel('level1')
    }
    return (
    
        <CheckSectionContainer>
            <CheckSectionWrapper>
                <CheckSectionBtnWrap>
                    <CheckSectionCheckBtn
                    onClick={test}
                    >
                        {language === 'ES' ? infoCheck.checkSectionBtnLabel : infoCheck.checkSectionBtnLabel_EN}
                    </CheckSectionCheckBtn>
                    <CheckSectionExitBtn
                    onClick={gettingOutOfCheckApp}
                    >
                        {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN}
                    </CheckSectionExitBtn>    
                </CheckSectionBtnWrap>
            </CheckSectionWrapper>
        </CheckSectionContainer>
    )   
}

export default StartSh3ckProcess