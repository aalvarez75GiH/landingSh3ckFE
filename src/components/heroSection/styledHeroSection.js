import React, { useState } from 'react'
import useMobilDetection from '../../utils/mobilDetection'
import useMobilDetect from '../../utils/mobilHook'
import { 
    HeroContainer,
    HeroBG,
    ImageBG,
    HeroContent,
    HeroH1,
    HeroBtnWrapper,
    HeroContainerMobil,
    HeroBGMobil,
    HeroContentMobil,
    HeroH1Mobil,
    HeroPMobil,
    HeroBtnWrapperMobil

} from './styledHeroSectionElements'
import Image from '../../images/pexels-andrea-piacquadio-3928268.jpg'
import { StyledButton } from '../buttons/styledButton'


const StyledHeroSection = () => {
const mobil = useMobilDetect()
const mobil2 = useMobilDetection()
    
if (mobil2.screenWidth < 768 || mobil) {
    return (
        <HeroContainerMobil>
            <HeroContentMobil>
                <HeroH1Mobil>Compra sin miedo por internet</HeroH1Mobil>
                <HeroPMobil>Nosotros chequeamos los productos que tu quieres comprar...</HeroPMobil>
                <HeroBtnWrapperMobil>
                    <StyledButton
                    primary={ true }
                    dark={ true }
                    >
                        Ver video
                    </StyledButton>
                </HeroBtnWrapperMobil>
            </HeroContentMobil>
            <HeroBGMobil>
                <ImageBG
                src={Image}
                />
            </HeroBGMobil>
        </HeroContainerMobil>
    )
}
if (mobil2.screenWidth > 768 || !mobil) {
    return (
        <HeroContainer>
            <HeroBG>
                <ImageBG
                src={Image}
                />
            </HeroBG>
            <HeroContent>
                <HeroH1>Somos la nueva forma de comprar sin miedo</HeroH1>
                <HeroH1>por internet</HeroH1>
                <HeroBtnWrapper>
                    <StyledButton
                    primary={ true }
                    dark={ true }
                    >
                        Ver video
                    </StyledButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
    
}

export default StyledHeroSection
