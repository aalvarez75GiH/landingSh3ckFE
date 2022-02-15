import React from 'react'
import { FaBars,FaSign } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { IoMdCart } from 'react-icons/io'
import { BiUser, BiUserCheck, BiRun } from 'react-icons/bi'
import { FaPuzzlePiece, FaVideo } from 'react-icons/fa' 
import { OffsetHandler } from '../../utils/settingOffsets'
import { infoNavBarMobil } from '../../utils/data'


const NavBarMobil = ({ 
    toggleSideBar, 
    login, 
    toggleMainSideBar,
    language,
    toggleLoginSideBarToOpen

}) => {
    
        return (
            <>
                <nav className="navMobil" >
                <div className="navBarContainerMobil">
                    <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                    <div 
                    // onClick={ toggleSideBar }
                    className="mobileIconMobil">
                        {/* <FaRegUser className="faIcon"/> */}
                        {login ?
                        <BiUserCheck 
                        onClick={toggleMainSideBar}
                        className="faUserIcon"/> 
                         :   
                        <BiUser 
                        onClick={toggleLoginSideBarToOpen}
                        className="faUserIcon" />
                        }
                        <FaBars 
                        onClick={toggleSideBar}
                        className="faBarsIcon"/>
                    </div>
                </div>
                <div className="navMenuButtonsContainer">
                <div className="navMenuButton">
                        <LinkS 
                        to="videoSection" 
                        className="navLinksMobil" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        // offset={100}
                        offset={OffsetHandler('startNow')}
                        duration={1000}
                        >
                        <div className="iconMobilContainer">
                                <FaVideo className="faIcon"/>
                        </div>
                        {language === 'ES' ? infoNavBarMobil.option1Copy : infoNavBarMobil.option1Copy_EN}
                        </LinkS>
                    </div>

                    <div className="navMenuButton">
                        <LinkS 
                        to="hiwSection" 
                        className="navLinksMobil" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={OffsetHandler('howItWorks')}
                        duration={1000}
                        >
                        <div className="iconMobilContainer">
                                <FaPuzzlePiece className="faIcon"/>
                        </div>
                        {language === 'ES' ? infoNavBarMobil.option2Copy : infoNavBarMobil.option2Copy_EN}
                        </LinkS>
                    </div>
                    
                    <div className="navMenuButton">
                        <LinkS 
                        to="nextStepSection" 
                        className="navLinksMobil" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset= { OffsetHandler('notifyMe')}
                        duration={1000}
                        >
                            <div className="iconMobilContainer">
                                <FaSign className="faIcon"/>
                            </div>
                            {language === 'ES' ? infoNavBarMobil.option3Copy : infoNavBarMobil.option3Copy_EN}
                        </LinkS>
                        
                    </div>
                    
                    <div className="navMenuButton">
                        <LinkS 
                        to="nextStepSection" 
                        className="navLinksMobil" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={OffsetHandler('checkAProduct')}
                        duration={1000}
                        >
                        <div className="iconMobilContainer">
                                <IoMdCart className="faIcon"/>
                        </div>
                        {language === 'ES' ? infoNavBarMobil.option4Copy : infoNavBarMobil.option4Copy_EN}
                        </LinkS>
                    </div>
                    
                </div>
            </nav>
            </>
        )
}
    

    
    
        


export default NavBarMobil