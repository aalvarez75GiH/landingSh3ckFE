import React from 'react'
import { FaPuzzlePiece, FaVideo, FaHome } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { IoMdCart } from 'react-icons/io'
import { BiUser } from 'react-icons/bi'
import { OffsetHandler } from '../../utils/settingOffsets'
import { infoNavBarMobil } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
console.log(actionCreators)


const NavBarMobil = ({ 
    toggleSideBar, 
}) => {
    const isOpen = useSelector((state) => state.sideBarState.isOpen )
    const language = useSelector((state) => state.sideBarState.language)
    const dispatch = useDispatch()
    const { openingSideBar } = bindActionCreators(actionCreators, dispatch)
    // let myAction = openingSideBar(!isOpen)
        
    return (
            <>
                <nav 
                className="navMobil" >
                <div className="navBarContainerMobil">
                    <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                    <div 
                    className="mobileIconMobil">
                        <BiUser 
                        // onClick={toggleSideBar}
                        onClick={() => openingSideBar(!isOpen)}
                        className="faBarsIcon"/>
                    </div>
                </div>
                <div className="navMenuButtonsContainer">
                    <div className="navMenuButton">
                        <LinkS 
                        to="nextStepSection" 
                        className="navLinksMobil" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset= {-5000}
                        duration={1000}
                        >
                            <div 
                            className="iconMobilContainer">
                                <FaHome className="faIcon"/>
                            </div>
                            {language === 'ES' ? infoNavBarMobil.option3Copy : infoNavBarMobil.option3Copy_EN}
                        </LinkS>
                        
                    </div>
                    
                    <div className="navMenuButton">
                        <LinkS 
                        to="videoSection" 
                        className="navLinksMobil" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        // offset={100}
                        offset={OffsetHandler('video')}
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