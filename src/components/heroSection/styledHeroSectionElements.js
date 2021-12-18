import styled from 'styled-components'

export const HeroContainer = styled.div` 
    background-color: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 850px;
    position: relative;
    z-index: 1;
`

export const HeroBG = styled.div `
position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const ImageBG = styled.img `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 44%;
    top: 25%;
    
    @media screen and (max-width:1920px) {
        left: 50%;
        top: 30%;
        width: 45%;
        
    }
    @media screen and (max-width:1536px) {
        left: 43%;
        top: 25%;
        width: 60%;
        
    }
   
    @media screen and (max-width:1280px) {
        left: 43%;
        top: 30%;
        width: 60%;
        
        
    }
    @media screen and (max-width:1098px) {
        left: 40%;
        top: 42%;
        
    }
    @media screen and (max-width:768px) {
        left: 45%;
        top: 35%;
        width: 60%;
        
    }
`
export const HeroH1 = styled.h1 `
    color: #000000;
    font-size: 60px;
    text-align: center;
    margin-left: 260px;

    @media screen and (max-width:1920px) {
        font-size: 3rem;
        
    }
    @media screen and (max-width:1536px) {
        font-size: 2.7rem;
        
    }
    @media screen and (max-width:1366px) {
        font-size: 2.3rem;
        
    }
    @media screen and (max-width:1280px) {
        font-size: 2.2rem;
        
    }
    @media screen and (max-width:1098px) {
        font-size: 34px;
        
    }

    @media screen and (max-width:768px) {
        font-size: 3.4rem;
        
    }
    
    
`
export const HeroBtnWrapper = styled.div `
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-left: 284px; 

`

// this components works at 768px (mobil)
export const HeroContainerMobil = styled.div` 
        background-color: #FAD570;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 800px;
`

      
export const HeroBGMobil = styled.div `
        width: 100%;
        background-color: red;
        height: 70%;
`

export const HeroContentMobil = styled.div `
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items:baseline;
        width: 100%;
        background-color: #ffffff;
        height: 30%;


    @media screen and (max-width:560px) {
        font-family: 'Blinker', sans-serif;
    }

`
export const HeroH1Mobil = styled.h1 `
    font-size: 3rem;
    font-family: 'Blinker', sans-serif;
    font-weight: 700;
    margin-left: 20px;

    @media screen and (max-width: 560px){
        font-size: 2.6rem;
        font-family: inherit;
        margin-left: 20px;
    }
    @media screen and (max-width: 480px) {
        font-size: 2.1rem;
        font-family: inherit;
        margin-left: 20px;
    }
    @media screen and (max-width: 414px) {
    font-size: 1.9rem;
    font-family: inherit;
    margin-left: 20px;
}
 
`
export const HeroPMobil = styled.p `
    font-size: 20px;
    margin-left: 20px;
    
    @media screen and (max-width: 560px){
        font-size: 20px;
        margin-left: 20px;
        /* font-family: inherit; */
    }
    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
        margin-left: 20px;
    }

`


export const HeroBtnWrapperMobil = styled.div `
  margin-left: 2%;
     

`

























