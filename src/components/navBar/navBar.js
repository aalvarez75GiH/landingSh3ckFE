import React, { useState, useEffect } from 'react'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaRegUser } from 'react-icons/fa'
import { BiUserCheck } from 'react-icons/bi'
import { OffsetHandlerNavBar } from '../../utils/settingOffsets'
import { infoNavBar } from '../../utils/data'

const NavBar = ({  
    login, 
    toggleLoginSideBar,
    toggleMainSideBar,
    language
}) => {
    
    
    const [scrollNav, setScrollNav ] = useState(false)

    const changeNavStyle = () => {
        if (window.scrollY >= 80 ){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    
    useEffect(()=> {
        window.addEventListener('scroll', changeNavStyle)
    },[])

      
    if (login){
        return(
        <>
            <nav 
            style={{ backgroundColor: `${ scrollNav ? '#010606' : 'transparent'}`}}
            
            className="nav">           
                <div className="navBarContainer">
                    <LinkR to="/" className="navLogo">sh3ck</LinkR>
                    <ul className="navMenu"> 
                        <li className="navItem">
                            <LinkS
                            style={{
                                color: `${scrollNav ? '#ffffff' : 'transparent'}`
                            }}  
                            className="navLinks" 
                            to="hiwSection"  
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={OffsetHandlerNavBar('hiwSection')}
                            duration={500}
                            >{language === 'ES' ? infoNavBar.navBarLi1 : infoNavBar.navBarLi1_EN}</LinkS>
                        </li>
                        <li className="navItem">
                            <LinkS
                            style={{
                                color: `${scrollNav ? '#ffffff' : 'transparent'}`
                            }} 
                            to="nextStepSection" 
                            className="navLinks" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={OffsetHandlerNavBar('checkAProduct')}
                            duration={500}
                            >{language === 'ES' ? infoNavBar.navBarLi2 : infoNavBar.navBarLi2_EN}</LinkS>
                        </li>
                    </ul>
                    <div 
                    onClick={toggleMainSideBar}
                    className="loggedInIconContainer">
                        <BiUserCheck 
                        className="loggedInUserIcon"/>
                    </div>    
                </div>
            </nav>
        </>
        )
        

    }else{
        return (
            <>
                <nav 
                style={{ 
                    backgroundColor: `${ scrollNav ? '#010606' : 'transparent'}`}}
                className="nav">
                    <div className="navBarContainer">
                        <LinkR to="/" className="navLogo">sh3ck</LinkR>
                        <ul className="navMenu"> 
                            <li className="navItem">
                                <LinkS 
                                style={{
                                    color: `${scrollNav ? '#ffffff' : 'transparent'}`
                                }}
                                to="hiwSection" 
                                className="navLinks" 
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={OffsetHandlerNavBar('hiwSection')}
                                duration={500}
                                >{language === 'ES' ? infoNavBar.navBarLi1 : infoNavBar.navBarLi1_EN}
                                </LinkS>
                            </li>
                            <li className="navItem">
                                <LinkS 
                                style={{
                                    color: `${scrollNav ? '#ffffff' : 'transparent'}`
                                }}
                                to="nextStepSection" 
                                className="navLinks"  
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={OffsetHandlerNavBar('checkAProduct')}
                                duration={500}
                                
                                >{language === 'ES' ? infoNavBar.navBarLi2 : infoNavBar.navBarLi2_EN}</LinkS>
                            </li>
                        </ul>
                        <nav 
                        className="navBtn">
                            <LinkS
                            to="loginSession"
                            onClick={toggleLoginSideBar} 
                            style={{
                                border: `${scrollNav ? '2px solid #ffffff' : 'none'}`,
                                padding: `${language === 'ES' ? '10px 22px' : '10px 60px'}`
                            }} 
                            className="navBtnLink">
                                <FaRegUser className="userIcon"/>
                                {language === 'ES' ? infoNavBar.navBarNav : infoNavBar.navBarNav_EN}
                            </LinkS>
                        </nav>
                    </div>
                </nav>
            </>
        )
    }
        
}

export default NavBar
