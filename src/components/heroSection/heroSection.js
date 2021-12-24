import React   from 'react'
import Button from '../buttons/button'
import useMobilDetect from '../../utils/mobilHook'
import useMobilDetection from '../../utils/mobilDetection'
import Image_2 from '../../images/pexels-chica-triste-medium.jpg'
import { infoHero } from '../../utils/data'

const HeroSection = ({ language }) => {
const mobil = useMobilDetect()
const mobil2 = useMobilDetection()  

// console.log(mobil2.screenWidth)

    if (mobil2.screenWidth < 768 || mobil) {
        return ( 
            <div className="heroContainerMobil">
                <div className="heroContentMobil">
                    <h1 className="heroH1Mobil">{language === 'spanish' ? infoHero.heroH1Mobil : infoHero.heroH1Mobil_EN }</h1>
                    <p className="heroPMobil">{language === 'spanish' ? infoHero.heroPMobil : infoHero.heroPMobil_EN}</p>
                    <div className="heroBtnWrapperMobil">
                           <Button 
                            btnBG={ '#FAD570' }
                            fontColor={ true }
                            big={ true }
                            fontBig = { true }
                            buttonLabel= {language === 'spanish' ? infoHero.buttonLabel : infoHero.buttonLabel_EN}
                            linkedTo={infoHero.linkedTo}
                            offSet={-170}
                            >
                            </Button>
                        </div>
                </div>
                <div className="heroBGMobil">
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
                        <h1 className="heroH1">{language === 'spanish' ? infoHero.heroH1 : infoHero.heroH1_EN}</h1>
                        <h1 className="heroH1">{language === 'spanish' ? infoHero.heroH1_2 : infoHero.heroH1_2_EN}</h1>
                        <div className="heroBtnWrapper">
                           <Button 
                            btnBG={ '#FAD570' }
                            fontColor={ true }
                            big={ true }
                            fontBig = { true }
                            buttonLabel= {language === 'spanish' ? infoHero.buttonLabel : infoHero.buttonLabel_EN}
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


