import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiUserCheck, BiUserCircle, BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { IoMdCart } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { MdSaveAlt } from 'react-icons/md'
import { infoMainSideBar } from '../../utils/data'


import { actionCreators } from '../../state'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

// import LoginForm from '../contactSection/loginForm'


const MainSideBar = ({ 
    // handlingSubmitLogOutUser 
}) => {
    const dispatch = useDispatch()
    // const {  openingMainSideBar, openingQASideBar } = bindActionCreators(actionCreators, dispatch)
    const {  
        openingMainSideBar, openingQASideBar,
        handlingIsSignedInGoogle, activatingForm,
        gettingLoginResponseData, handlingIsLoggedIn,
        handlingIsLoggedOut, openingContactSection,
        settingCurrentUser,
    } = bindActionCreators(actionCreators, dispatch)
    const mainSideBarOpen = useSelector((state) => state.homeState.mainSideBarOpen)
    const username = useSelector((state) => state.homeState.currentUser)
    const language = useSelector((state) => state.sideBarState.language)
    const loginResponse = useSelector((state) => state.homeState.loginResponse)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    const loginData = useSelector((state) => state.homeState.loginData)
    const isSignedIn = useSelector((state) => state.homeState.isSignedIn)
    
    const capitalizeFirstLetter = (string) => {
        // const str = 'flexiple';
        const str2 = string.charAt(0).toUpperCase() + string.slice(1)
        console.log(str2.split(' ')[0]);
        return str2.split(' ')[0]    
    }
    const nameSplittedAndCapitalized = capitalizeFirstLetter(username ? username : loginResponse.data )

    const handlingSubmitLogOutUser = async() => {
        
        if (isSignedIn) {
            console.log('pasa por isSignedIn')
            const auth = window.gapi.auth2.getAuthInstance()
            await auth.signOut()
            
            handlingIsSignedInGoogle(false) //action
            activatingForm(null) //action
            openingMainSideBar(!mainSideBarOpen)  //action
            gettingLoginResponseData(null) //action
            openingContactSection(false) //action
        }
        if (loggedIn){
            console.log('pasa por loggedIn')
            localStorage.removeItem('SH3CK_TOKEN')
            gettingLoginResponseData(null) //action
            activatingForm(null) //action
            openingMainSideBar(!mainSideBarOpen) //action
            handlingIsLoggedIn(false) //action
            handlingIsLoggedOut(true) //action
            openingContactSection(false) //action
            settingCurrentUser(null) //action
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
                                <div className="mainSideBarUserIcon">
                                    <BiUserCheck />
                                </div>
                                :
                                <div className="mainSideBarUserImage">
                                    <img src={loginData.imageUrl || loginData.picture} alt="cdcdcdc" className="avatar" />
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