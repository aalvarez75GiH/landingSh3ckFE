import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { GrLanguage } from 'react-icons/gr'
import { FiHome } from 'react-icons/fi'
import { BsBox } from 'react-icons/bs'
import { infoSideBar } from '../../utils/data'
import {HiArrowLeft} from 'react-icons/hi'
import { Link as LinkS } from 'react-scroll'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'

const SideBar = ( ) => {

    const dispatch = useDispatch()
    const { 
        openingSideBar, 
        changeLanguage, 
        openingContactSection, 
        activatingForm,
        openingQASideBar, 
    } = bindActionCreators(actionCreators, dispatch)
    const isOpen = useSelector((state) => state.sideBarState.isOpen)
    const language = useSelector((state) => state.sideBarState.language)
    
    const togglingLanguage = () => {
        changeLanguage('ES')
        openingSideBar(!isOpen)
    }

    const handlingContactSection = () => {
        openingSideBar(!isOpen)
        activatingForm('check')
        openingContactSection(true)
    }

    const toggleQASideBarToOpen = () => {
        openingQASideBar(true)
    }
    
     

    return ( 
        <aside
        className={`${isOpen ? "sideBarContainerOpen" : "sideBarContainer" }`}>
            <div 
            className="sideBarIcon"
            onClick={ () => openingSideBar(!isOpen) }
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
                    onClick={() => openingSideBar(!isOpen) }
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
                        // onClick={togglingLanguage}
                        onClick={togglingLanguage}
                        className="changeLanDiv">
                            {language === 'ES' ? infoSideBar.toggleCopy_EN : infoSideBar.toggleCopy}
                        </div>
                    </div>
                    <div 
                    to="discover"
                    onClick={() => openingSideBar(!isOpen)} 
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