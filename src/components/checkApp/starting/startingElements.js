import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const CheckSectionContainer = styled(motion.div) `
    position: fixed ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    background-color: #eeeeee;
    overflow-y: hidden;
    overflow-x: hidden;
    
    @media (max-width:1920px) and (min-width: 1536px){
        width: 90%;
        margin-left: 5%;
        margin-top: 2%;
    }
    @media (max-width:1536px) and (min-width: 1366px) {
        width: 90%;
        margin-left: 5%;
        margin-top: 2%;
        /* height: 60%; */
    }
    @media (max-width:1366px) and (min-width: 1280px) {
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        /* height: 60%; */
    }
    @media (max-width:1280px) and (min-width: 1098px) {
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
    
    }
    @media (max-width:1098px) and (min-width: 768px) {
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
    
    }
    @media (max-width:768px) and (min-width: 560px) {
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
    
    }
    
`

export const CheckSectionWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    
`

export const CheckStartingImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;
/* background-color: red; */
@media (max-width:1920px) and (min-width: 1536px) {
        height: 60%;
}
@media (max-width:1536px) and (min-width: 1366px) {
        height: 65%;
        
}
@media (max-width:1366px) and (min-width: 1280px) {
        height: 65%;
        
}
@media (max-width:1280px) and (min-width: 1098px) {
        height: 70%;
        
}
@media (max-width:1098px) and (min-width: 768px) {
        height: 65%;
        margin-left: 2%;  
}
@media (max-width:768px) and (min-width: 320px) {
        height: 55%;
        margin-left: 2%;  
}

`
export  const CheckStartingImage = styled.img`
width: 80%;
height: 80%;
/* background-color: green; */
`

export const CheckSectionBtnWrap = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40%;

    @media (max-width:1366px) and (min-width: 1280px) {
        height: 20%;
    }
    @media (max-width:1280px) and (min-width: 560px) {
        height: 23%;
    }
    @media (max-width:560px) and (min-width: 320px) {
        height: 23%;
    }
    
`
export const CheckSectionCheckBtn = styled.button `
    width: 40%;
    height: 115px;
    background-color: #010606;
    border-style: none;
    font-size: 1.2rem;
    color: #ffffff;
    margin-left: 5%;

    @media (max-width:1366px) and (min-width: 1098px){
        width: 50%;
    }

    @media (max-width:1098px) and (min-width: 768px){
        width: 60%;
    }
    @media (max-width:768px) and (min-width: 560px){
        width: 70%;
    }
    @media (max-width:560px) and (min-width: 414px){
        width: 70%;
        height: 80px;
    }
    @media (max-width:414px) and (min-width: 360px){
        width: 80%;
        height: 70px;
    }
    @media (max-width: 360px) and (min-width: 320px){
        width: 80%;
        height: 70px;
    }
    
`
export const CheckSectionExitBtn = styled.button `
    width: 40%;
    height: 115px;
    background-color: #FAD570;
    border-style: none;
    color: #010606;
    font-size: 1.5rem;
    color: #010606;
    margin-left: 5%;
    margin-top: 1%;

    @media (max-width:1366px) and (min-width: 1098px){
        width: 50%;
    }
    @media (max-width:1098px) and (min-width: 768px){
        width: 60%;
    }
    @media (max-width:768px) and (min-width: 560px){
        width: 70%;
    }
    @media (max-width:560px) and (min-width: 414px){
        width: 70%;
        height: 80px;
    }
    @media (max-width:414px) and (min-width: 360px){
        width: 80%;
        margin-top: 2%;
        height: 70px;
    }
    @media (max-width: 360px) and (min-width: 320px){
        width: 80%;
        margin-top: 2%;
        height: 70px;
    }

`
