import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import image from '../../../images/avatar_1.png'

export const CheckerSectionContainer = styled(motion.div) `
z-index: 999;
width: 100%;
height: auto;
background-color: red;
display: grid;
align-items: center;
left: 0;
right: 0;
overflow-y: hidden;  
@media (max-width:1920px) and (min-width: 768px){
width: 100%;
height: auto;
background-color: #ffffff;
display: grid;
align-items: center;
left: 0;
right: 0; 
}
@media (max-width:768px) and (min-width: 560px){
width: 100%;
height: auto;
background-color: #ffffff;
display: grid;
align-items: center;
left: 0;
right: 0; 
}  
`
export const CheckerSectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 100%;
height: auto;
background-color: #eeeeee;
overflow-y: hidden;


@media (max-width:1920px) and (min-width: 768px){
width: 50%;
height: auto;
background-color: #eeeeee;
margin-left: 25%;
margin-top: 3%;
}
@media (max-width:768px) and (min-width: 480px){
width: 100%;
height: auto;
background-color: #eeeeee;
margin-left: 0%;
/* margin-top: 3%; */
}
`


export const CheckersTitleContainer = styled.div`
display: flex;
align-items: center ;
justify-content: flex-start ;
width: 90%;
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

@media (max-width:1920px) and (min-width: 1536px){
font-size: 2rem;
}
@media (max-width:560px) and (min-width: 320px){
font-size: 1rem;
}

` 

export const CheckerItemContainerFlex = styled.div `
display: flex;
align-items: center ;
width: 90%;
height: auto;
background-color: #eeeeee;
margin-top: 2%;

@media (max-width:414px) and (min-width:320px) {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    align-items: center ;
    width: 95%;
    height: auto;
    background-color: #eeeeee;
    margin-top: 2%;

}
`

// **************** Checker Profile Interface ************************

export const CheckerProfileContainer = styled(motion.div) `
width: 100%;
height: auto;
background-color: red;
display: flex;
align-items: center;
overflow-y: hidden;
@media (max-width:1920px) and (min-width: 768px){
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
align-items: center;
left: 0;
right: 0; 
}
@media (max-width:768px) and (min-width: 560px){
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
align-items: center;
left: 0;
right: 0; 
} 

`
export const CheckerProfileWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 100%;
height: auto;
background-color: #eeeeee;
overflow-y: hidden;


@media (max-width:1920px) and (min-width: 768px){
width: 50%;
height: auto;
background-color: #eeeeee;
margin-left: 25%;
margin-top: 3%;
}
@media (max-width:768px) and (min-width: 480px){
width: 100%;
height: auto;
background-color: #eeeeee;
margin-left: 0%;
/* margin-top: 3%; */
}


`

export const CheckerProfileTile = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 95%;
height: 250px;
margin: 10px;
background-color: #ffffff;

`
export const  CheckerItemAvatar = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40%;
height: 100%;
margin-bottom: 10%;

`  

export const CheckerInfoContainer = styled.div`
width: 58%;
height: 100%;
background-color: #ffffff;
`
export const CheckerInfoName = styled.div`
font-size: 0.8rem;
margin-top: 10%;
margin-left: 1%;
`
export const CheckerInfoNameH1 = styled.h1`
font-weight: 500;


`

export const CheckerInfoCiudad = styled.div `
margin-top: 3%;
margin-left: 1%;
`
export const CheckerInfoCiudadH3 = styled.h3`
font-size: 1rem;
font-weight: 600;
`
export const CheckerInfoRating = styled.div `
display: flex;
align-items: center;
margin-top: 3%;
margin-left: 1%;

`
export const CheckerInfoRatingH3 = styled.h3 `
font-size: 1rem;
font-weight: 600;
margin-right: 2%;
`
export const CheckerInfoRatingH4 = styled.h3 `
font-size: 0.9rem;
margin-left: 4%;
margin-top: 1%;
font-weight: 300;

`

export const CheckerBioButton = styled.div `
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
`

export const CheckerBioButtonP = styled.p `
font-size: 1rem;
font-weight: 500;
`
