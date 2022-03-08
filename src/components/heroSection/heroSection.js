import React from 'react'
import { Link as LinkS } from 'react-scroll'
import Button from '../buttons/button'
import useMobilDetect from '../../utils/mobilHook'
import useMobilDetection from '../../utils/mobilDetection'
import Image_2 from '../../images/pexels-chica-triste-medium.jpg'
import { infoHero } from '../../utils/data'
import { FaTimes } from 'react-icons/fa'
import wwd_icon_1 from '../../images/4229080_criminal_robber_robbery_theft_thief_icon.svg'
import wwd_icon_2 from '../../images/ok_success_icon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'



const HeroSection = ({ handlingCheckUser }) => {
const dispatch = useDispatch()
const { openingHeroSection_WWD, heroSection_curtain, openingContactSection, activatingForm } = bindActionCreators(actionCreators, dispatch)
const mobil = useMobilDetect()
const mobil2 = useMobilDetection()  
const screenWidth = mobil2.screenWidth

const language = useSelector((state) => state.sideBarState.language)
const curtain_open = useSelector((state) => state.heroSection.curtain_active)
const isOpen = useSelector((state) => state.heroSection.WWD_Open)



// console.log(mobil2.screenWidth)
const internalOpening = () => {
    openingHeroSection_WWD(!isOpen)
    heroSection_curtain(!curtain_open)
}
const handlingContactSection = () => {
    internalOpening()
    openingContactSection(true)
    activatingForm('check')
}

 const detectingOffset = () => {
     
     if (screenWidth <= 1098 && screenWidth > 768){
        return 100
    }
    if (screenWidth <= 768 && screenWidth > 560 ){
        return 100
    }
    if (screenWidth <= 560 && screenWidth > 480){
        return 160
    }
    if (screenWidth <= 480 && screenWidth > 414){
        return 150
    }
    if (screenWidth <= 414 && screenWidth > 360){
        return -20
    }
    if (screenWidth <= 360 && screenWidth > 280){
        return -70
    }
}

if (mobil2.screenWidth < 768 || mobil) {
        return ( 
            <div 
            id="heroSection"
            className="heroContainerMobil">
                <div className="heroContentMobil">
                    <h1 className="heroH1Mobil">{language === 'ES' ? infoHero.heroH1Mobil : infoHero.heroH1Mobil_EN }</h1>
                    <p className="heroPMobil">{language === 'ES' ? infoHero.heroPMobil : infoHero.heroPMobil_EN}</p>
                    <div className="heroButtonsWrapper">
                        <div className="heroBtnWrapperMobil">
                            <LinkS
                                to={infoHero.linkedTo}  
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-160}
                                duration={500}
                                className="video_button"
                                type="submit"
                                >
                                    {language === 'ES' ? infoHero.buttonLabel : infoHero.buttonLabel_EN}
                            </LinkS>
                               
                        </div>
                        <div className="heroBtnWrapperMobil">
                                <LinkS
                                to={infoHero.internalLinkedTo}  
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                                className="WWD_button"
                                type="submit"
                                onClick={internalOpening}
                                >
                                    {language === 'ES' ? infoHero.buttonLabel_2 : infoHero.buttonLabel_2_EN}
                                </LinkS>
                                
                        </div>
                    </div>
                    
                </div>
                <div 
                id="wwdSection"
                className={ !isOpen ? 'heroSection_WWD' : 'heroSection_WWD_open'}>
                    <LinkS
                    to={'heroSection'}  
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-5000}
                    duration={2000}
                    onClick={internalOpening}
                    >
                        <FaTimes
                        className="heroSection_WWD_CloseIcon"/>
                    </LinkS>
                    <div className="wwdSection_explanation">
                        <div className='icons_containers'>
                            <div className="wwdSection_explanation_icon">
                                <img src={wwd_icon_1} alt="heu" />

                            </div>
                            <div className="wwdSection_explanation_icon">
                                    <img src={wwd_icon_2} alt="heu" />
                            </div>
                        </div>
                        
                        <div className="wwdSection_explanation_p">
                            <p className="explanation_p1">
                                {language === 'ES' ? infoHero.explanation_p1 : infoHero.explanation_p1_EN}  
                            </p>
                            <p className="explanation_p2">
                                {language === 'ES' ? infoHero.explanation_p2 : infoHero.explanation_p2_EN}
                            </p>
                            <p className="explanation_p3">
                            {language === 'ES' ? infoHero.explanation_p2b : infoHero.explanation_p2b_EN}
                            </p>
                        </div>
                        
                    </div>
                    <LinkS
                     to={'nextStepSection'}  
                    //  to={'contactSectionTest'}
                     activeClass="active"
                     spy={true}
                     smooth={true}
                     offset={detectingOffset()}
                     duration={1000}
                     onClick={handlingContactSection} 
                    >
                        <button className='wwdSection_iwantToCheck'>{language === 'ES' ? infoHero.iwantToCheckBtn : infoHero.iwantToCheckBtn_EN}</button>
                    </LinkS>
                    
                </div>
                <div className="heroBGMobil">
                    <div className={!curtain_open ? 'hero_Curtain' : 'hero_Curtain_active'}>

                    </div>
                    <img
                           className="imageBG"
                           alt="this is a test"
                           src={Image_2}
                    />
                </div>
            </div>
                
        )
    }

    if (mobil2.screenWidth > 768 || !mobil){
        return (
            <div className="heroContainer">
                <div className="heroBG">
                    <img
                       className="imageBG"
                       alt="this is a test"
                       src={Image_2}
                       />
                 </div>
                 
                    <div className="heroContent">
                        <h1 className="heroH1">{language === 'ES' ? infoHero.heroH1 : infoHero.heroH1_EN}</h1>
                        <h1 className="heroH1">{language === 'ES' ? infoHero.heroH1_2 : infoHero.heroH1_2_EN}</h1>
                        <div className="heroBtnWrapper">
                           <Button 
                            btnBG={ '#FAD570' }
                            fontColor={ true }
                            big={ true }
                            fontBig = { true }
                            buttonLabel= {language === 'ES' ? infoHero.buttonLabel : infoHero.buttonLabel_EN}
                            linkedTo={infoHero.linkedTo}
                            offSet={-150}
                            // offSet={OffsetHandlerSections('heroSection')}
                            >
                            </Button>
                        </div>
                    </div>
            </div>
        )
    }
}


export default HeroSection


