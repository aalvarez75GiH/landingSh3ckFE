import React from 'react'
import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'


const CheckSection = () => {
    const dispatch = useDispatch()
    const {  
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

    return (
        <div className="checkSectionContainer">
            <div className="checkSectionWrapper">
                <div className="checkSection-BtnWrap">
                        <button className="checkSection-checkBtn">
                        {language === 'ES' ? infoCheck.checkSectionBtnLabel : infoCheck.checkSectionBtnLabel_EN}
                        </button>
                        <button 
                        onClick={gettingOutOfCheckApp}
                        className="checkSection-exitBtn">
                        {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN}
        
                        </button>
                </div>
            </div>
        </div>
    )   
}

export default CheckSection