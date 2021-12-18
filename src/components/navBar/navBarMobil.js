import React from 'react'
import { FaBars,FaSign } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { IoMdCart } from 'react-icons/io'
import { BiUser, BiUserCheck, BiRun } from 'react-icons/bi'
import { OffsetHandler } from '../../utils/settingOffsets'


const NavBarMobil = ({ 
    toggleSideBar, 
    login, 
    toggleLoginSideBar,
    toggleMainSideBar 
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
                        onClick={toggleLoginSideBar}
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
                        to="contactSection" 
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
                            Notificame
                        </LinkS>
                        
                    </div>
                    <div className="navMenuButton">
                        <LinkS 
                        to="contactSection" 
                        className="navLinksMobil" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={OffsetHandler('startNow')}
                        duration={1000}
                        >
                        <div className="iconMobilContainer">
                                <BiRun className="faIcon"/>
                        </div>
                        Comienza
                        </LinkS>
                    </div>
                    <div className="navMenuButton">
                        <LinkS 
                        to="contactSection" 
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
                        Chequéa
                        </LinkS>
                    </div>
                    
                </div>
            </nav>
            </>
        )
}
    

    
    
        


export default NavBarMobil