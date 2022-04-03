import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import image from '../../../images/avatar_1.png'


export const CheckerSectionContainer = styled(motion.div) `
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
overflow-y: hidden; 


`
export const CheckerSectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 50%;
height: auto;
background-color: #eeeeee;
overflow-y: hidden;
margin-top: 4%;


@media (max-width:1280px) and (min-width: 768px){
width: 85%;
}

@media (max-width:768px) and (min-width: 414px){
width: 95%;
}
@media (max-width:414px) and (min-width: 320px){
width: 100%;
}

`


export const CheckersTitleContainer = styled.div`
display: flex;
align-items: center ;
justify-content: flex-start ;
width: 95%;
height: 100px;
background-color: #010606;
margin-top: 4% ;

@media (max-width:560px) and (min-width: 320px){
width: 95%;
height: 40px;
}

`

export const CheckersSectionTitle = styled.h1 `
font-size: 1.5rem;
font-weight: 400;
margin-left: 5%;
color: #ffffff;

@media (max-width:1920px) and (min-width: 560px){
font-size: 2rem;
}

@media (max-width:560px) and (min-width: 320px){
font-size: 1rem;
}

` 

export const CheckerItemContainerFlex = styled.div `
display: flex;
flex-direction: column;
align-items: center ;
width: 95%;
height: auto;
background-color: #eeeeee;
margin-top: 2%;

` 

// **************** Checker Profile Interface ************************

// *************  checker profile Tile
export const CheckerProfileContainer = styled(motion.div) `
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
overflow-y: hidden; 
 
`
export const CheckerProfileWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 50%;
height: auto;
background-color: #eeeeee;
overflow-y: hidden;
margin-top: 4%;

@media (max-width:1280px) and (min-width: 768px){
width: 85%;
}

@media (max-width:768px) and (min-width: 414px){
width: 95%;
}
@media (max-width:414px) and (min-width: 320px){
width: 100%;
}

`

export const CheckerProfileItemsContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 95%;
height: auto;
margin-top: 2%;

`
export const CheckerProfileTile = styled.div`
display: flex;
width: 100%;
height: 350px;
margin: 10px;
background-color: #ffffff;

@media (max-width:560px) and (min-width: 480px) {
height: 270px;
margin: 10px;
}
@media (max-width:480px) and (min-width: 320px) {
height: 250px;
margin: 10px;
}

`
export const  CheckerItemAvatar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 30%;

@media (max-width:560px) {
width: 40%;
}
`  


export const CheckerInfoContainer = styled.div`
width: 58%;
height: 100%;
background-color: #ffffff;
`
export const CheckerProfileInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 60%;
`

export const CheckerInfoName = styled.div`
margin-top: 5%;
margin-left: 1%;

@media (max-width:768px) and (min-width: 560px){
font-size: 1.6rem;
margin-top: 5%;
margin-left: 1%;
    
}
@media (max-width:560px) and (min-width: 360px){
font-size: 0.8rem;
margin-top: 5%;
margin-left: 1%;    
}
@media (max-width:360px) and (min-width: 320px){
font-size: 0.7rem;
margin-top: 5%;
margin-left: 1%;
}

`
export const CheckerInfoNameH1 = styled.h1`
font-weight: 500;
@media (max-width:1536px) and (min-width: 1366px){
font-size: 3rem;
}
@media (max-width:1366px) and (min-width: 560px){
font-size: 2.9rem;
}
@media (max-width:560px) and (min-width: 480px){
font-size: 2.1rem;
}
@media (max-width:480px) and (min-width: 414px){
font-size: 2rem;
}
@media (max-width:414px) and (min-width: 360px){
font-size: 1.6rem;
}
@media (max-width:360px) and (min-width: 320px){
font-size: 1.3rem;
}
`
export const CheckerInfoCiudad = styled.div `
margin-top: 3%;
margin-left: 1%;
`
export const CheckerInfoCiudadH3 = styled.h3`
font-size: 1.4rem;

@media (max-width:560px) and (min-width: 360px){
font-size: 1rem;

}
@media (max-width:360px) and (min-width: 320px){
font-size: 0.8rem;

}
`
export const CheckerInfoRating = styled.div `
display: flex;
align-items: center;
margin-top: 3%;
margin-left: 1%;

`
export const CheckerInfoRatingH3 = styled.h3 `
font-size: 1.4rem;
font-weight: 600;
margin-right: 2%;

@media (max-width: 414px) and (min-width:360px){
font-size: 0.9rem;
font-weight: 600;
margin-right: 2%;   
}

@media (max-width:360px) and (min-width: 320px){
font-size: 0.8rem;

}
`
export const CheckerInfoRatingH4 = styled.h4 `
font-size: 1.4rem;
margin-left: 4%;
margin-top: 1%;
font-weight: 300;

@media (max-width: 1366px) and (min-width:414px){
    margin-top: 0%;
        
}
@media (max-width: 414px) and (min-width:320px){
    font-size: 0.8rem;
    margin-left: 4%;
    margin-top: 1%;
    font-weight: 300;    
}
`

export const CheckerBioButton = styled.div `
width: 50%;
height: 65px;
background-color: #010606;
border-radius: 45px;
margin-top: 5%;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
margin-left: 50%;

@media (max-width: 1536px) and (min-width:1366px){
    margin-left: 65% ;
}


@media (max-width: 1366px) and (min-width:1280px){
    margin-left: 50%;
    width: 65%;
}
@media (max-width: 1280px) and (min-width:560px){
    width: 55%;
    margin-left: 50%;
}

@media (max-width: 560px) and (min-width:320px){
width: 90%;
height: 50px;
background-color: #010606;
border-radius: 45px;
margin-top: 8%;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
margin-left: 0%;
}
`

export const CheckerBioButtonP = styled.p `
font-size: 1.4rem;
font-weight: 500;

@media (max-width: 1920px) and (min-width:560px){
font-size: 1.4rem;
}
@media (max-width: 560px){
font-size: 1rem;
}
`
// *************  check type Tile

export const CheckTypeTileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 350px;
background-color: #ffffff;
margin-bottom: 3%;
`
export const CheckTypeTileTitle = styled.span`
display: flex;
align-items: center;
padding-left: 4%;
width: 100%;
height: 40px;
background-color: #ffffff;
font-size: 1.4rem;

`

export const CheckTypeTileInfo = styled.div `
display: flex;
align-items: center;
width: 95%;
height: 280px;
background-color: #eeeeee;
border-radius: 20px;


`
export const CheckTypeTileInfoPrice = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40%;
height: 90%;
background-color: transparent;
`
export const CheckTypeTileInfoPriceLabel = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 35%;
background-color: transparent;
`

export const Price = styled.h1`
font-size: 7rem;

@media (max-width: 560px) and (min-width:480px){
    font-size: 5rem;
}
@media (max-width: 480px) and (min-width:360px){
    font-size: 4rem;
}
@media (max-width: 360px) and (min-width:320px){
    font-size: 3.5rem;
}

`
export const CheckTypeTileInfoPriceDesc = styled.small`
width: 100%;
height: 10%;
background-color: transparent;
padding-left: 25%;
font-size: 1rem;
padding-top: 6%;

@media (max-width: 560px) and (min-width:480px){
    padding-left: 20%;
}
@media (max-width: 480px) and (min-width:360px){
    width: 101% ;
    height: 8%;
    font-size: 0.7rem;
    padding-left: 16%;
}
@media (max-width: 360px) and (min-width:320px){
    height: 8%;
    font-size: 0.6rem;
    padding-left: 16%;
}
`

export const CheckTypeTileInfoCaption = styled.div`
width: 60%;
height: 90%;
background-color: transparent;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const CheckTypeCaption = styled.h1`
margin-top: 8%;
font-size: 3rem;

@media (max-width: 768px) and (min-width:560px){
    margin-left: 5% ;
}
@media (max-width: 560px) and (min-width:480px){
    font-size: 2.5rem;
}
@media (max-width: 480px) and (min-width:414px){
    font-size: 2.3rem;
}
@media (max-width: 480px) and (min-width:320px){
    font-size: 1.7rem;
}
`

export const CheckTypeBioButton = styled.div`
width: 70%;
height: 80px;
background-color: #010606;
border-radius: 45px;
margin-top: 5%;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;


@media (max-width: 1536px) and (min-width:1280px){
    margin-left: 2% ;
}

@media (max-width: 560px) and (min-width:360px){
width: 80%;
height: 50px;
background-color: #010606;
border-radius: 45px;
margin-top: 8%;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;

}
@media (max-width: 360px) and (min-width:320px){
width: 90%;
height: 50px;
margin-top: 8%;

}

`

export const CheckTypeBioButtonP = styled.p `
font-size: 1.4rem;
font-weight: 500;

@media (max-width: 1920px) and (min-width:560px){
font-size: 1.4rem;

}
@media (max-width: 560px) and (min-width:360px){
font-size: 0.9rem;
}
@media (max-width: 360px){
    font-size: 0.8rem;
}

`
export const CheckerProfileButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 95%;
height: auto;
background-color: #ffffff;
margin-bottom: 3%;

`