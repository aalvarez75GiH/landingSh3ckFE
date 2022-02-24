import React, {useState, useEffect} from 'react'
import { FaBars,FaSign,FaPuzzlePiece, FaVideo, FaHome } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { IoMdCart } from 'react-icons/io'
import { BiUser, BiUserCheck } from 'react-icons/bi'
import { OffsetHandler } from '../../utils/settingOffsets'
import { infoNavBarMobil } from '../../utils/data'


const NavBarForCS = ({ 
    toggleSideBar, 
    login, 
    toggleMainSideBar,
    toggleLoginSideBarToOpen

}) => {

        return (
            <>
                <nav 
                className="navMobilForCS" >
                <div className="navBarContainerMobil">
                    <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                    <div 
                    // onClick={ toggleSideBar }
                    className="mobileIconMobilForCS">
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
                        {/* <FaBars 
                        onClick={toggleSideBar}
                        className="faBarsIcon"/> */}
                    </div>
                </div>
            </nav>
            </>
        )
}
    
export default NavBarForCS