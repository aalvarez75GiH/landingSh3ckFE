import React from 'react'
import { FaTimes } from 'react-icons/fa'
import LoginSideBarForm from './loginSideBarForm'
import LoadingSpinner from '../../utils/loadingSpinner'
import { infoLoginSB } from '../../utils/data'




const LoginSideBar = ({ 
    loginSideBarOpen,  
    // handlingLogin,
    loggedIn, 
    loggedOut,
    loading,
    language,
    loginSideBarLoading,
    handlingSubmitLoginUser,
    toggleLoginSideBarToClose
}) => {
    // console.log(loggedIn)
    // console.log(loggedOut)
    // console.log(loginSideBarOpen)
    
    if (loggedOut){
        return (
            <aside
            className={`${loginSideBarOpen ? "loginSideBarContainerOpen" : "loginSideBarContainer" }`}>
                <div className="loginContactForms">
                    <div 
                        className="loginSideBarIcon"
                        onClick={ toggleLoginSideBarToClose }
                    >
                        <FaTimes className="loginCloseIcon"/>
                    </div>
                    <div className="loginSideHeader">
    
                    </div>
                    <div className="loginSideBarFormTitle">
                        <h1 className="loginSideBarTitle">{language === 'ES' ? infoLoginSB.title : infoLoginSB.title_EN}</h1>
                    </div>
                    <div className="loginSideBarFormDescription">
                        <p>{language === 'ES' ? infoLoginSB.description : infoLoginSB.description_EN}</p>
                    </div>
                        
                    <LoginSideBarForm
                    handlingSubmitLoginUser={ handlingSubmitLoginUser}
                    language={language}
                    />
                        
                </div>
            </aside>
        )
    }else{
        return null
    }
    
}

export default LoginSideBar