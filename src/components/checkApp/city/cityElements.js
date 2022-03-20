import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import city_icon_2 from '../../../images/city_icon_2.svg'

export const CitySectionContainer = styled(motion.div) `
/* position: fixed; */

z-index: 999;
width: 100%;
height: auto;
background-color: red;
display: grid;
align-items: center;
left: 0;
right: 0;  

@media (max-width:1920px) and (min-width: 1536px){
width: 100%;
height: auto;
background-color: red;
display: grid;
align-items: center;
left: 0;
right: 0; 
    }
`

export const CitySectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 100%;
height: auto;
background-color: #eeeeee;

@media (max-width:1920px) and (min-width: 1536px){
width: 100%;
height: auto;
background-color: #eeeeee;
}
`
export const BackwardSection = styled.div`
display: flex;
align-items: center ;
width: 95%;
height: 40px;
background-color: #ffffff;
margin-top: 2%;

`
export const BackwardLabel = styled.p `
width: 150px;
height: 20px;
font-weight: 600;

` 
export const BackwardLeftArrowIcon = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 40px;
`
export const LeftArrow = styled.img `
width: 20px;
height: 20px;
`
export const CityTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center ;
width: 95%;
height: 100px;
background-color: #010606;
margin-top: 4% ;
`
export const CitySectionTitle = styled.h1 `
font-size: 1.5rem;
font-weight: 400;
margin-left: 5%;
color: #ffffff;

@media (max-width:1920px) and (min-width: 1536px){
font-size: 2rem;
}
@media (max-width:360px) and (min-width: 320px){
font-size: 1.3rem;
}

`
export const CityItemContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 100%;
height: auto;
background-color: #eeeeee;
margin-top: 2% ;
`

export const CitySectionButton = styled.button`
width: 95%;
height: 90px;
background-color: #010606;
border-style: none ;
margin-top: 1%;
color: #ffffff;
font-size: 2rem;
opacity: ${({ button_activated })=> (button_activated ? 1 : 0)};

@media (max-width:414px) and (min-width: 360px){
font-size: 1.3rem;
}
@media (max-width:360px) and (min-width: 320px){
font-size: 1.3rem;
}
`


