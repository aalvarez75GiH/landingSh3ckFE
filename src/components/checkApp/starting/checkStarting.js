import React from 'react'
import { infoCheck } from '../../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { getRequestToCities } from '../../../requestsToApi'
import { 
    CheckSectionContainer, CheckSectionWrapper, 
    CheckSectionBtnWrap,CheckSectionCheckBtn,
    CheckSectionExitBtn

} from '../checkAppElements'


const CheckStarting = () => {
    const dispatch = useDispatch()
    const {
        settingLevel, activatingForm, openingRegView,  
        settingCurrentUser, gettingLoginResponseData,
        openingContactSection,handlingIsLoggedIn, 
        handlingIsSignedInGoogle, settingResponse, 
        gettingGoogleLoginData, settingPreviousLevel,
        settingCityOfCheckOrder,settingCityIDAtCheckOrder, 
        activatingCheckAppButton, cityChose 
    } = bindActionCreators(actionCreators, dispatch)
    
    const language = useSelector((state) => state.sideBarState.language)
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)

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

        settingLevel('Starting')
        settingPreviousLevel('')
        settingCityOfCheckOrder('')
        settingCityIDAtCheckOrder('')
        activatingCheckAppButton(false)
        cityChose('')
    }

    const startingProcess = async() => {
        settingLevel('city')
        settingPreviousLevel('Starting')
    }
    return (
    
        <CheckSectionContainer
        initial={previous_level === 'city' ? { x: '-100vw', opacity: 1  } : { x: '100vw', opacity: 1  }}
        animate={{ x: 0 }}
        transition={{ stiffness: 33 }}
        
        >
            <CheckSectionWrapper>
                <CheckSectionBtnWrap>
                    <CheckSectionCheckBtn
                    onClick={startingProcess}
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

export default CheckStarting