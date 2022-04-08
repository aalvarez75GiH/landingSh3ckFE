import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiUserCheck, BiUserCircle, BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { IoMdCart } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { MdSaveAlt } from 'react-icons/md'
import { infoMainSideBar } from '../../utils/data'
import SmallAvatarComponent from './smallAvatarComponent.js'


import { actionCreators } from '../../state'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const MainSideBar = () => {
    const dispatch = useDispatch()
    // const {  openingMainSideBar, openingQASideBar } = bindActionCreators(actionCreators, dispatch)
    const {  
        openingMainSideBar, openingQASideBar,
        handlingIsSignedInGoogle, activatingForm, handlingIsLoggedIn,
        handlingIsLoggedOut, openingContactSection,
        settingCurrentUser, settingLevel, settingPreviousLevel,
        settingCityOfCheckOrder, settingCityIDAtCheckOrder,
        activatingCheckAppButton, cityChose, categoryChoseBoolean,
        productToCheckCategory, productToCheckID, categoryChose,
        productToCheckServiceTime, productToSTID,serviceTimeChose,
        settingUserInCheckOrder, clearLevelUsed, gettingGoogleLoginData,
        settingResponse

    } = bindActionCreators(actionCreators, dispatch)
    const mainSideBarOpen = useSelector((state) => state.homeState.mainSideBarOpen)
    const username = useSelector((state) => state.homeState.currentUser)
    const language = useSelector((state) => state.sideBarState.language)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    const loginData = useSelector((state) => state.homeState.loginData)
    const isSignedIn = useSelector((state) => state.homeState.isSignedIn)
    const user = useSelector((state) => state.checkOrderState.user)
    console.log(user)
    
    const capitalizeFirstLetter = (string) => {
        const str2 = string.charAt(0).toUpperCase() + string.slice(1)
        console.log(str2.split(' ')[0]);
        return str2.split(' ')[0]    
    }
    const nameSplittedAndCapitalized = capitalizeFirstLetter(username )
    
    const  validateURL = (value) => {
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    }

    const handlingSubmitLogOutUser = async() => {
        
        if (isSignedIn) {
            console.log('pasa por isSignedIn')
            const auth = window.gapi.auth2.getAuthInstance()
            await auth.signOut()
            handlingIsSignedInGoogle(false) //action
            activatingForm(null) //action
            openingMainSideBar(!mainSideBarOpen)  //action
            settingResponse(null) //action
            openingContactSection(false) //action
            settingLevel('Starting')
            settingPreviousLevel('')
            settingCityOfCheckOrder('')
            settingCityIDAtCheckOrder('')
            activatingCheckAppButton(false)
            cityChose('')
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
                picture: ''
            
            })
            gettingGoogleLoginData(null)
            clearLevelUsed()
        }
        if (loggedIn){
            console.log('pasa por loggedIn')
            localStorage.removeItem('SH3CK_TOKEN')
            settingResponse(null) //action
            activatingForm(null) //action
            openingMainSideBar(!mainSideBarOpen) //action
            handlingIsLoggedIn(false) //action
            handlingIsLoggedOut(true) //action
            openingContactSection(false) //action
            settingCurrentUser(null) //action
            settingLevel('Starting')
            settingPreviousLevel('')
            settingCityOfCheckOrder('')
            settingCityIDAtCheckOrder('')
            activatingCheckAppButton(false)
            cityChose('')
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
                phoneNumber: ''
            
            })
            gettingGoogleLoginData(null)
            clearLevelUsed()
        }
        
        
    }
     
    if (loggedIn && mainSideBarOpen){
       return (
       <aside
            className={`${mainSideBarOpen ? "mainSideBarContainerOpen" : "mainSideBarContainer" }`}>
                <div className="mainSideContactForms">
                    <div 
                        className="mainSideBarIcon"
                        onClick={ () => openingMainSideBar(!mainSideBarOpen) }
                    >
                        <FaTimes className="mainSideCloseIcon"/>
                    </div>
                    <div className="mainSideHeader">

                    </div>
                    <div className="mainSideBarContent">
                        <div className="mainSideBarContentUser">
                            {
                               !loginData ?
                                    validateURL(user.picture) ?                               
                                        <SmallAvatarComponent/>
                                        :
                                        <div className="mainSideBarUserIcon">
                                            <BiUserCheck />
                                        </div>
                                :
                                <div className="mainSideBarUserImage">
                                    <img src={loginData.imageUrl || loginData.picture} alt="Sh3ch" className="avatar" />
                                </div>
                            }
                            <h1 className="mainSideBarUserName">{language === 'ES' ? infoMainSideBar.hola : infoMainSideBar.hello} <b>{nameSplittedAndCapitalized}</b> </h1>
                        </div>
                        <div className="mainSideBarContentOptions">
                            <div  className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <BiUserCircle/>
                                </div>
                                {language === 'ES' ? infoMainSideBar.option1Copy : infoMainSideBar.option1Copy_EN}
                            </div>
                            <div className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <IoMdCart/>
                                </div>
                                {language === 'ES' ? infoMainSideBar.option2Copy : infoMainSideBar.option2Copy_EN}
                            </div>
                            <div className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <BiHelpCircle/>
                                </div>
                                {language === 'ES' ? infoMainSideBar.option3Copy : infoMainSideBar.option3Copy_EN}
                            </div>
                            <div 
                            onClick={() => openingQASideBar(true)}
                            className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <BiQuestionMark/>
                                </div>
                                {language === 'ES' ? infoMainSideBar.option4Copy : infoMainSideBar.option4Copy_EN}
                            </div>
                            <div className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <MdSaveAlt/>
                                </div>
                                {language === 'ES' ? infoMainSideBar.option5Copy : infoMainSideBar.option5Copy_EN}
                            </div>
                            <div 
                            onClick={handlingSubmitLogOutUser}
                            className="mainSideBarContentItems exitDiv">
                                <div className="mainSideBarUserOptionsIcon">
                                    <FiLogOut/>
                                </div>
                                {language === 'ES' ? infoMainSideBar.option6Copy : infoMainSideBar.option6Copy_EN}
                                
                            </div>

                        </div>
                    </div>
                </div>
        </aside>
    ) 
    }else{
        return null
    }

}

export default MainSideBar