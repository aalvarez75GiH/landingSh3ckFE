import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const CategorySectionContainer = styled(motion.div) `
z-index: 999;
width: 100%;
height: auto;
background-color: red;
display: grid;
/* grid-template-columns: 30% 30% 30% ; */
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

export const CategorySectionWrapper = styled.div`
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

@media (max-width:414px) and (min-width: 360px){
width: 100%;
height: auto;
background-color: #eeeeee;
}
@media (max-width:360px) and (min-width: 320px){
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
export const CategoryTitleContainer = styled.div`
display: flex;
align-items: center ;
justify-content: flex-start ;
width: 90%;
height: 100px;
background-color: #010606;
margin-top: 4% ;

@media (max-width:414px) and (min-width: 320px){
width: 95% ;
}

`

export const CategorySectionTitle = styled.h1 `
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

export const CategoryItemContainer = styled.div `
display: grid;
grid-template-columns: 30% 30% 30%;
gap: 10px;
align-items: center ;
width: 90%;
height: auto;
background-color: #ffffff;
margin-top: 2%;

@media (max-width:414px) and (min-width:320px) {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 16px;
    align-items: center ;
    width: 95%;
    height: auto;
    background-color: #ffffff;
    margin-top: 2%;

}
`


export const ServiceTimeTitleContainer = styled.div `
display: flex;
align-items: center;
justify-content: flex-start;
width: 90%;
height: 100px;
background-color: #010606;
margin-top: 4%;

@media (max-width:414px) and (min-width: 320px){
width: 95% ;
}
`
export const ServiceTimeTitle = styled.h1`
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
export const ServiceTimeItemContainer = styled.div `
display: grid;
grid-template-columns: 30% 30% 30%;
gap: 16px;
align-items: center ;
width: 90%;
height: auto;
background-color: #ffffff;
margin-top: 2%;

@media (max-width: 414px) and (min-width: 360px){
display: grid;
grid-template-columns: 30% 30% 30%;
gap: 16px;
align-items: center ;
width: 95%;
height: auto;
background-color: #ffffff;
margin-top: 2%;
}


`

// export const CategorySectionBtnWrapp = styled.div `
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     height: 500px;
//     margin-top: 38%;

// `
// export const CategorySectionBtn = styled.button `
//     width: 40%;
//     height: 115px;
//     background-color: #097654;
//     border-style: none;
//     /* border-radius: 60px; */
//     font-size: 1.5rem;
//     color: #ffffff;
//     margin-left: 5%;

// `
