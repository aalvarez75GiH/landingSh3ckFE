import React from 'react'
import { FaTimes } from 'react-icons/fa'
import LoginSideBarForm from './loginSideBarForm'
import LoadingSpinner from '../../utils/loadingSpinner'


const LoginSideBar = ({ 
    toggleLoginSideBar, 
    loginSideBarOpen, 
    handlingLogin,
    loggedIn, 
    loggedOut,
    loading,
    language
}) => {
    console.log(loggedIn)
    console.log(loggedOut)
    console.log(loginSideBarOpen)
    
    
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
                    <h1 className="loginSideBarTitle">Inicia sesión </h1>
                </div>
                <div className="loginSideBarFormDescription">
                    <p>Para que podamos chequear productos debes hacer inicio de sesión</p>
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
            <>
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
                    <h1 className="loginSideBarTitle">Inicia sesión </h1>
                </div>
                <div className="loginSideBarFormDescription">
                    <p>Para que podamos chequear productos debes hacer inicio de sesión</p>
                </div>
                    
                <LoginSideBarForm
                handlingLogin={handlingLogin}
                />
                    
            </div>
            </aside>
            </>
            
        )
    }else{
        return null

    }

    
}
    


export default LoginSideBar