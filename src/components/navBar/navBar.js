import React, { useState, useEffect } from 'react'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaRegUser } from 'react-icons/fa'
import { BiUserCheck } from 'react-icons/bi'
import { OffsetHandlerNavBar } from '../../utils/settingOffsets'

const NavBar = ({  
    login, 
    toggleLoginSideBar,
    toggleMainSideBar
    

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
                            >Como funciona</LinkS>
                        </li>
                        <li className="navItem">
                            <LinkS
                            style={{
                                color: `${scrollNav ? '#ffffff' : 'transparent'}`
                            }} 
                            to="contactSection" 
                            className="navLinks" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={OffsetHandlerNavBar('contactSection')}
                            duration={500}
                            >Quiero chequear</LinkS>
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
                                >Como funciona
                                </LinkS>
                            </li>
                            <li className="navItem">
                                <LinkS 
                                style={{
                                    color: `${scrollNav ? '#ffffff' : 'transparent'}`
                                }}
                                to="contactSection" 
                                className="navLinks"  
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={OffsetHandlerNavBar('contactSection')}
                                duration={500}
                                
                                >Quiero Chequear</LinkS>
                            </li>
                        </ul>
                        <nav 
                        className="navBtn">
                            <LinkS
                            to="loginSession"
                            onClick={toggleLoginSideBar} 
                            style={{
                                border: `${scrollNav ? '2px solid #ffffff' : 'none'}`
                            }} 
                            className="navBtnLink">
                                <FaRegUser className="userIcon"/>
                                Inicio de Sesión
                            </LinkS>
                        </nav>
                    </div>
                </nav>
            </>
        )
    }
        
}

export default NavBar
