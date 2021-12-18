import React from 'react'
import { FaTimes } from 'react-icons/fa'
// import LoginForm from '../contactSection/loginForm'


const LogoutSideBar = ({ 
    toggleLogoutSideBar, 
    logoutSideBarOpen, 
    username,
    loggedOut,
    loggedIn,
    handlingSubmitLogOutUser, 
}) => {
    console.log(loggedIn)
    console.log(loggedOut)
    console.log(logoutSideBarOpen)
      
    if (loggedIn){
       return (
       <aside
            className={`${logoutSideBarOpen ? "logoutSideBarContainerOpen" : "logoutSideBarContainer" }`}>
                <div className="logoutContactForms">
                    <div 
                        className="logoutSideBarIcon"
                        onClick={ toggleLogoutSideBar }
                    >
                        <FaTimes className="logoutCloseIcon"/>
                    </div>
                    <div className="logoutSideHeader">

                    </div>
                    <div className="logoutSideBarFormTitle">
                        <h1 className="logoutSideBarTitle">Cierra sesión </h1>
                    </div>
                    <div className="logoutSideBarFormDescription">
                        <p>Hola <b>{username}</b>, recuerda que para que podamos chequear productos para ti en el futuro deberás iniciar sesión nuevamente...</p>
                    </div>
                    <div className="logoutSideBarTitleWrapperLoggedIn">
                        <div className="logoutSideBarFormTitleLoggedIn">
                            <h1 className="logoutSideBarTitle">¿Quieres cerrar sesión? </h1>
                        </div>
                        <button 
                        onClick={handlingSubmitLogOutUser}
                        // onClick={toggleLogoutSideBar}
                        className="closeSessionBtn">
                            Cierra Sesión
                        </button>
                    </div>
                    
                </div>
        </aside>
    ) 
    }else{
        return null
    }

}

export default LogoutSideBar