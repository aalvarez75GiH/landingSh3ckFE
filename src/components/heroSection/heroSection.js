import React, {useState}   from 'react'
import { Link as LinkS } from 'react-scroll'
import Button from '../buttons/button'
import useMobilDetect from '../../utils/mobilHook'
import useMobilDetection from '../../utils/mobilDetection'
import Image_2 from '../../images/pexels-chica-triste-medium.jpg'
import { infoHero } from '../../utils/data'
import { FaTimes } from 'react-icons/fa'
import wwd_icon_1 from '../../images/4229080_criminal_robber_robbery_theft_thief_icon.svg'
import wwd_icon_2 from '../../images/ok_success_icon.svg'




const HeroSection = ({ language }) => {
const mobil = useMobilDetect()
const mobil2 = useMobilDetection()  

const [ WWD, setWWD ] = useState(false)
const [ curtain, setCurtain ] = useState(false)

// console.log(mobil2.screenWidth)
const internalOpening = () => {
    setWWD(!WWD)
    setCurtain(!curtain)
    console.log('i am internal')
}
if (mobil2.screenWidth < 768 || mobil) {
        console.log(WWD)
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
                className={ !WWD ? 'heroSection_WWD' : 'heroSection_WWD_open'}>
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
                        className="heroSection_WWD_CloseIcon"
                        
                        />
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
                                ¿Has escuchado de personas que compran un producto por internet
                                y son estafados, no reciben el producto correcto o no se encuentra
                                en la condición que lo vieron?  
                            </p>
                            <p className="explanation_p2">
                                Nosotros te conectámos con personas 
                                que pueden chequear el producto que quieres comprar en la ciudad 
                                donde éste se encuentra para que esto no te suceda
                            </p>
                        </div>
                       
                    </div>
                    
                </div>
                <div className="heroBGMobil">
                    <div className={!curtain ? 'hero_Curtain' : 'hero_Curtain_active'}>

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


