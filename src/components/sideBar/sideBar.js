import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import {FiLogIn} from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'
import { FaHome } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { BsBox } from 'react-icons/bs'
import { CgCloseO } from 'react-icons/cg'
import { infoSideBar } from '../../utils/data'
import {HiArrowLeft} from 'react-icons/hi'
import { Link as LinkS } from 'react-scroll'

const SideBar = ({ 
    toggleSideBar, 
    isOpen, 
    language, 
    toggleLanguage,
    handlingCheckUser,
    toggleQASideBarToOpen
}) => {

    const togglingLanguage = () => {
        toggleLanguage()
        toggleSideBar()
    }

    const handlingContactSection = () => {
        toggleSideBar()
        handlingCheckUser()
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
                    <LinkS
                    to={'heroSection'}  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-5000}
                    duration={1000}
                    >
                    <div 
                    onClick={ toggleSideBar }
                    to="discover" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <FiHome/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink1 : infoSideBar.sideBarLink1_EN} 
                    </div>
                    </LinkS>
                    <LinkS
                    to={'nextStepSection'}  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={900}
                    duration={1000}
                    >
                    <div
                    onClick={  handlingContactSection }
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <BsBox/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink0 : infoSideBar.sideBarLink0_EN}
                    </div>
                    </LinkS>
                    
                    <div 
                    className="sideBarLink" 
                    onClick={toggleQASideBarToOpen}
                    >
                        <div className="mainSideBarUserOptionsIcon">
                            <BiQuestionMark/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink2 : infoSideBar.sideBarLink2_EN}
                    </div>
                    
                    <div
                    to="services" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <BiHelpCircle/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink3 : infoSideBar.sideBarLink3_EN}
                    </div>
                    <div 
                    to="discover" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <GrLanguage/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink4 : infoSideBar.sideBarLink4_EN} 
                        <div 
                        onClick={togglingLanguage}
                        className="changeLanDiv">
                            {language === 'ES' ? infoSideBar.toggleCopy_EN : infoSideBar.toggleCopy}
                        </div>
                    </div>
                    <div 
                    to="discover"
                    onClick={toggleSideBar} 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <HiArrowLeft/>
                        </div>
                        {language === 'ES' ? infoSideBar.sideBarLink5 : infoSideBar.sideBarLink5_EN}
                    </div>
                </div>
            </div>


        </aside>
    )
}

export default SideBar