import React from 'react'
import { FaTimes } from 'react-icons/fa'
import LoginSideBarForm from './loginSideBarForm'
import LoadingSpinner from '../../utils/loadingSpinner'
import { infoLoginSB } from '../../utils/data'




const LoginSideBar = ({ 
    toggleLoginSideBar, 
    loginSideBarOpen, 
    handlingLogin,
    loggedIn, 
    loggedOut,
    loading,
    language
}) => {
    // console.log(loggedIn)
    // console.log(loggedOut)
    // console.log(loginSideBarOpen)
    
    if (loading) {
        return (
            <>
            <aside
            className={`${loginSideBarOpen ? "loginSideBarContainerOpen" : "loginSideBarContainer" }`}>
                <LoadingSpinner language={language}/>
                <div className="loginContactForms">
                <div 
                    className="loginSideBarIcon"
                    onClick={ toggleLoginSideBar }
                >
                    <FaTimes className="loginCloseIcon"/>
                </div>
                <div className="loginSideHeader">

                </div>
                <div className="loginSideBarFormTitle">
                    <h1 className="loginSideBarTitle">{language === 'ES' ? infoLoginSB.title : infoLoginSB.title_EN} </h1>
                </div>
                <div className="loginSideBarFormDescription">
                    <p>{language === 'ES' ? infoLoginSB.description : infoLoginSB.description_EN}</p>
                </div>
                    
                <LoginSideBarForm
                handlingLogin={handlingLogin}
                />
                    
            </div>
            </aside>   
            </>
        )   
    }

    if (loggedOut){
        return (
            <aside
            className={`${loginSideBarOpen ? "loginSideBarContainerOpen" : "loginSideBarContainer" }`}>
                <div className="loginContactForms">
                    <div 
                        className="loginSideBarIcon"
                        onClick={ toggleLoginSideBar }
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
                    handlingLogin={handlingLogin}
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