import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const CategorySectionContainer = styled(motion.div) `
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
overflow-y: hidden;
    
`

export const CategorySectionWrapper = styled.div`
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

export const CategoryTitleContainer = styled.div`
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

export const CategorySectionTitle = styled.h1 `
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

@media (max-width:560px) and (min-width: 320px){
width: 95%;
height: 40px;
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
@media (max-width:560px) and (min-width: 320px){
font-size: 1rem;
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


