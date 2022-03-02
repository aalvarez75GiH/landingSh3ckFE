import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiUserCheck, BiUserCircle, BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { IoMdCart } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { MdSaveAlt } from 'react-icons/md'
import { infoMainSideBar } from '../../utils/data'


// import LoginForm from '../contactSection/loginForm'


const MainSideBar = ({ 
    toggleMainSideBar, 
    mainSideBarOpen, 
    username,
    loggedIn,
    handlingSubmitLogOutUser, 
    language,
    loginData,
    toggleQASideBarToOpen
}) => {
    console.log(loginData)
    // console.log(loggedIn)
    
    const capitalizeFirstLetter = (string) => {
        // const str = 'flexiple';
        const str2 = string.charAt(0).toUpperCase() + string.slice(1)
        console.log(str2.split(' ')[0]);
        return str2.split(' ')[0]    
    }
    const nameSplittedAndCapitalized = capitalizeFirstLetter(username)

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
                            onClick={toggleQASideBarToOpen}
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