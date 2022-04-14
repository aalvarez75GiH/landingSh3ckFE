import  styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const PaymentSectionContainer = styled(motion.div) `
/* position: fixed; */

z-index: 999;
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
overflow-y: hidden;

`

export const PaymentSectionWrapper = styled.div`
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
export const PaymentTitleContainer = styled.div`
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
export const PaymentSectionTitle = styled.h1 `
font-size: 2rem;
font-weight: 300;
margin-left: 5%;
color: #ffffff;

@media (max-width:1920px) and (min-width: 560px){
font-size: 2rem;
}

@media (max-width:560px) and (min-width: 320px){
font-size: 1rem;
}
`