import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiUserCheck, BiUserCircle, BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { IoMdCart } from 'react-icons/io'
import { infoMainSideBar } from '../../utils/data'

// import LoginForm from '../contactSection/loginForm'


const MainSideBar = ({ 
    toggleMainSideBar, 
    mainSideBarOpen, 
    username,
    loggedOut,
    loggedIn,
    handlingSubmitLogOutUser, 
    language
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
                            
                            <h1 className="mainSideBarUserName">{language === 'ES' ? infoMainSideBar.hola : infoMainSideBar.hello} <b>{username}</b> </h1>
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
                            <div className="mainSideBarContentItems">
                                <div className="mainSideBarUserOptionsIcon">
                                    <BiQuestionMark/>
                                </div>
                                {language === 'ES' ? infoMainSideBar.option4Copy : infoMainSideBar.option4Copy_EN}
                            </div>
                            <div
                            onClick={handlingSubmitLogOutUser} 
                            className="closeBtn">
                                {language === 'ES' ? infoMainSideBar.mainSidebarBtnLabel : infoMainSideBar.mainSidebarBtnLabel_EN}
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