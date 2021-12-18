import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiUserCheck, BiUserCircle, BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { IoMdCart } from 'react-icons/io'

// import LoginForm from '../contactSection/loginForm'


const MainSideBar = ({ 
    toggleMainSideBar, 
    mainSideBarOpen, 
    username,
    loggedOut,
    loggedIn,
    handlingSubmitLogOutUser, 
}) => {
    console.log(loggedIn)
    console.log(loggedOut)
    console.log(mainSideBarOpen)
      
    if (loggedIn && mainSideBarOpen){
       return (
       <aside
            className={`${mainSideBarOpen ? "mainSideBarContainerOpen" : "mainSideBarContainer" }`}>
                <div className="mainSideContactForms">
                    <div 
                        className="mainSideBarIcon"
                        onClick={ toggleMainSideBar }
                    >
                        <FaTimes className="mainSideCloseIcon"/>
                    </div>
                    <div className="mainSideHeader">

                    </div>
                    <div className="mainSideBarContent">
                        <div className="mainSideBarContentUser">
                            <div className="mainSideBarUserIcon">
                                <BiUserCheck />
                            </div>
                            
                            <h1 className="mainSideBarUserName">Hola, <b>{username}</b> </h1>
                        </div>
                        <div className="mainSideBarContentOptions">
                            <div  className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <BiUserCircle/>
                                </div>
                                Mi cuenta
                            </div>
                            <div className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <IoMdCart/>
                                </div>
                                Mis chequeos
                            </div>
                            <div className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <BiHelpCircle/>
                                </div>
                                Ayuda
                            </div>
                            <div className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <BiQuestionMark/>
                                </div>
                                Preguntas y respuestas
                            </div>
                            <div
                            onClick={handlingSubmitLogOutUser} 
                            className="closeBtn">
                                Cerrar sesión
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