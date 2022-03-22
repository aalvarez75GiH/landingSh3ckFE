import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import city_icon_2 from '../../../images/city_icon_2.svg'

export const CitySectionContainer = styled(motion.div) `
/* position: fixed; */

z-index: 999;
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
overflow-y: hidden;

@media (max-width:1920px) and (min-width: 1536px){
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
}
@media (max-width:1536px) and (min-width: 1366px){
width: 90%;
height: auto;
background-color: #eeeeee;
padding-bottom: 3%;
margin-top: 2%;
margin-left: 5%;
}
@media (max-width:1366px) and (min-width: 1280px){
margin-top: 2%;
/* margin-left: 5%; */
}
`

export const CitySectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 50%;
height: auto;
background-color: #eeeeee;
overflow-y: hidden;

@media (max-width:1920px) and (min-width: 1536px){
/* width: 50%; */
/* height: auto; */
background-color: #eeeeee;
padding-bottom: 3%;
margin-top: 4%;
}
@media (max-width:1536px) and (min-width: 1366px){
width: 70%;
/* height: auto; */
background-color: #eeeeee;
padding-bottom: 3%;
margin-top: 4%;
}
@media (max-width:1280px) and (min-width: 1098px){
width: 70% ;
margin-top: 4%;
}
@media (max-width:1098px) and (min-width: 768px){
width: 70% ;
margin-top: 4%;
}
@media (max-width:768px) and (min-width: 560px){
width: 95% ;
margin-top: 4%;
}
@media (max-width:560px) and (min-width: 480px){
width: 95% ;
margin-top: 4%;
}
@media (max-width:480px) and (min-width: 414px){
width: 95% ;
margin-top: 4%;
}
@media (max-width:414px) and (min-width: 360px){
width: 95% ;
margin-top: 4%;
}
@media (max-width:360px) and (min-width: 320px){
width: 95% ;
margin-top: 4%;
}
`
export const BackwardSection = styled.div`
display: flex;
align-items: center ;
width: 95%;
height: 80px;
background-color: #ffffff;
margin-top: 2%;

@media (max-width:560px) and (min-width: 320px){
height: 40px;
}

`
export const BackwardLabel = styled.p `
width: 150px;
height: 20px;
font-weight: 600;
font-size: 1.3rem;

@media (max-width:560px) and (min-width: 320px){
font-size: 1rem;
}


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

@media (max-width:768px) and (min-width: 560px){
width: 18px;
height: 18px;
}

`
export const CityTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center ;
width: 95%;
height: 100px;
background-color: #010606;
margin-top: 4% ;

@media (max-width:560px) and (min-width: 320px){
    height: 40px;
}
`
export const CitySectionTitle = styled.h1 `
font-size: 1.5rem;
font-weight: 400;
margin-left: 5%;
color: #ffffff;

@media (max-width:1920px) and (min-width: 1536px){
font-size: 2rem;
}
@media (max-width:560px) and (min-width: 360px){
font-size: 1rem;
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


