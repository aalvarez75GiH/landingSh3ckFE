import React from 'react'
// import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { 
    FinishingOrderContainer, FinishingOrderWrapper,
    FinishingOrderBtnWrapp, FinishingOrderBtn
 

} from './summaryElements.js'


const FinishingCheckOrder = () => {
    
    const dispatch = useDispatch()
    const {  
        activatingForm, openingRegView,  
        settingCurrentUser, gettingLoginResponseData,
        openingContactSection,handlingIsLoggedIn, 
        handlingIsSignedInGoogle, settingResponse, 
        gettingGoogleLoginData, settingLevel, 
        settingPreviousLevel, settingCityOfCheckOrder, 
        settingCityIDAtCheckOrder, cityChose, 
        activatingCheckAppButton

    } = bindActionCreators(actionCreators, dispatch)
    
    // const language = useSelector((state) => state.sideBarState.language)

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

    const comeBack = () => {
        settingLevel('checkers')
        settingPreviousLevel('summary')
    }
    return (
        <FinishingOrderContainer
        initial={{ x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <FinishingOrderWrapper>
                <FinishingOrderBtnWrapp>
                    <FinishingOrderBtn
                    onClick={gettingOutOfCheckApp}
                    >
                        Cerrar
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </FinishingOrderBtn> 
                    <FinishingOrderBtn
                    onClick={comeBack}
                    >
                        Volver
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </FinishingOrderBtn>    
                </FinishingOrderBtnWrapp>
            </FinishingOrderWrapper>
        </FinishingOrderContainer>

    )   
}

export default FinishingCheckOrder