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
overflow-x: hidden;

`

export const PaymentSectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 50%;
height: auto;
background-color: #ffffff;
overflow-x: hidden;
overflow-y: hidden;
margin-top: 4%;


@media (max-width:1280px) and (min-width: 768px){
width: 85%;
}

@media (max-width:768px) and (min-width: 320px){
width: 95%;
}

`
export const PaymentTitleContainer = styled.div`
display: flex;
align-items: center ;
justify-content: flex-start ;
width: 100%;
height: 100px;
background-color: #010606;
margin-top: 4% ;

@media (max-width:560px) and (min-width: 320px){
width: 100%;
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

export const PaymentInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 20vh;
background-color: #eeeeee;
margin-top: 2%;
/* border-radius: 45px; */


`

export const PaymentInfoLabel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 20%;
height: 80%;
/* background-color: red; */

`
export const InfoLabel = styled.h2`
font-size: 1.2rem;
`
export const  PaymentInfoPriceLabel = styled.div`
display: flex;
justify-content: center;
/* align-items: center; */
width: 50%;
height: 80%;
/* background-color: #010606; */

`
export const PriceLabel = styled.h2`
font-size: 6rem;
margin-top: 7%;
`
export const PaymentInfoSeeOrderContainer = styled.div`
width: 20%;
height: 80%;
/* background-color: red; */

`

export const SeeOrderButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 120%;
height: 40px;
background-color: #010606;
color: #ffffff;
border-radius: 45px;
font-size: 0.8rem;

`

export const CheckPaymentTypesContainer = styled.div`
margin-top: 5%;
width: 100%;
height: auto;
background-color: #eeeeee;

`

export const CheckPaymentTypeOf = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 12vh;
/* background-color: #FAD; */

`

export const CheckPaymentType = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 30%;
height: 12vh;
/* background-color: blue; */
` 

export const CheckPaymentIcon = styled.img`
/* margin-top: 15%; */
width: 55px;
height: 55px;

`
export const CheckPaymentCaption = styled.small `
margin-top: 10%;

`