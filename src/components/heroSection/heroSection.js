import React   from 'react'
import Button from '../buttons/button'
import useMobilDetect from '../../utils/mobilHook'
import useMobilDetection from '../../utils/mobilDetection'
import Image_2 from '../../images/pexels-chica-triste-medium.jpg'


const HeroSection = ({ buttonLabel, linkedTo }) => {
const mobil = useMobilDetect()
const mobil2 = useMobilDetection()  

// console.log(mobil2.screenWidth)

    if (mobil2.screenWidth < 768 || mobil) {
        return ( 
            <div className="heroContainerMobil">
                <div className="heroContentMobil">
                    <h1 className="heroH1Mobil">Compra sin miedo por internet</h1>
                    <p className="heroPMobil">Nosotros chequeamos los productos que tu quieres comprar...</p>
                    <div className="heroBtnWrapperMobil">
                           <Button 
                            btnBG={ '#FAD570' }
                            fontColor={ true }
                            big={ true }
                            fontBig = { true }
                            buttonLabel= {buttonLabel}
                            linkedTo={linkedTo}
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
                        <h1 className="heroH1">Somos la nueva forma de comprar sin miedo</h1>
                        <h1 className="heroH1">por internet</h1>
                        <div className="heroBtnWrapper">
                           <Button 
                            btnBG={ '#FAD570' }
                            fontColor={ true }
                            big={ true }
                            fontBig = { true }
                            buttonLabel= {buttonLabel}
                            linkedTo={linkedTo}
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


