import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { GrLanguage } from 'react-icons/gr'
import { infoSideBar } from '../../utils/data'

const SideBar = ({ 
    toggleSideBar, 
    isOpen, 
    language, 
    toggleLanguage  
}) => {

    const togglingLanguage = () => {
        toggleLanguage()
        toggleSideBar()
    }


    return ( 
        <aside
        className={`${isOpen ? "sideBarContainerOpen" : "sideBarContainer" }`}>
            <div 
            className="sideBarIcon"
            onClick={ toggleSideBar }
            >
                <FaTimes className="closeIcon"/>
            </div>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <div 
                    // onClick={ toggleSideBar }
                    to="discover" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <GrLanguage/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink1 : infoSideBar.sideBarLink1_EN} 
                        <div 
                        onClick={togglingLanguage}
                        className="changeLanDiv">
                            {language === 'ES' ? infoSideBar.toggleCopy_EN : infoSideBar.toggleCopy}
                        </div>
                    </div>
                    <div
                    // onClick={ toggleSideBar }
                    to="about" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <BiQuestionMark/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink2 : infoSideBar.sideBarLink2_EN}
                    </div>
                    
                    <div 
                    // onClick={ toggleSideBar }
                    to="services" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <BiHelpCircle/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink3 : infoSideBar.sideBarLink3_EN}
                    </div>
                </div>
                <div className="sideBtnWrap">
                    <div
                    onClick={toggleSideBar}
                    className="sideBarRoute" 
                    to="/signin">
                        {language === 'ES' ? infoSideBar.sideBarBtnLabel : infoSideBar.sideBarBtnLabel_EN}
                    </div>
                </div>

            </div>


        </aside>
    )
}

export default SideBar