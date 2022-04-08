import React from 'react'
import { infoCheck } from '../../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import image from '../../../images/8443731_business_start_up_launch_rocket_icon.svg'
import { 
    CheckSectionContainer, CheckSectionWrapper, 
    CheckSectionBtnWrap,CheckSectionCheckBtn,
    CheckSectionExitBtn, CheckStartingImageContainer,
    CheckStartingImage

} from './startingElements.js'


const CheckStarting = () => {
    const dispatch = useDispatch()
    const {
        settingLevel, activatingForm, openingRegView,  
        settingCurrentUser, gettingLoginResponseData,
        openingContactSection,handlingIsLoggedIn, 
        handlingIsSignedInGoogle, settingResponse, 
        gettingGoogleLoginData, settingPreviousLevel,
        settingCityOfCheckOrder,settingCityIDAtCheckOrder, 
        activatingCheckAppButton, cityChose,
        categoryChoseBoolean, productToCheckCategory,
        productToCheckID, categoryChose,
        productToCheckServiceTime, productToSTID,
        serviceTimeChose, settingUserInCheckOrder,
        clearLevelUsed, levelUsed

    } = bindActionCreators(actionCreators, dispatch)
    
    const language = useSelector((state) => state.sideBarState.language)
    const previous_level = useSelector((state) => state.checkOrderState.previous_level)

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
        categoryChoseBoolean(true)
        productToCheckCategory('')
        productToCheckID('')
        categoryChose('')
        cityChose('')
        productToCheckServiceTime('')
        productToSTID('')
        serviceTimeChose('')
        settingUserInCheckOrder({
            name: '',
            email: '',
            phoneNumber: '',
            picture:'',

        })
       
        clearLevelUsed()
       
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
                <CheckStartingImageContainer>
                    <CheckStartingImage
                    src={image}
                    />
                </CheckStartingImageContainer>
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