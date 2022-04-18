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

export const PaymentInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 95%;
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

export const PaymentDetailContainer = styled(motion.div)`
display: flex;
/* align-items: center; */
/* justify-content: center; */
flex-direction: column;
width: 95%;
height: 30vh;
background-color: #FAD570;
margin-top: 2%;
position: absolute;
top: 29%;
opacity: 0;
`
export const PaymentDetailInfoContainer = styled.div`
display: flex;
width: 85%;
height: 150px;
margin-left: 8%;
margin-top: 5%;
/* background-color: purple; */

`
export const PaymentDetailST = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
height: 100%;
background-color: #fbe29d;
`
export const PaymentDetailCT = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
height: 100%;
background-color: #fbe29d;
margin-left: 2%;
`

export const PaymentDetailSTLabel = styled.h4``
export const PaymentDetailSTDesc = styled.h4`
font-weight: 300;
`

export const PaymentDetailSTPrice = styled.h1`
font-size: 2.5rem;
`
export const PaymentDetailCTLabel = styled.h4``
export const PaymentDetailCTDesc = styled.h4`
font-weight: 300;
`
export const PaymentDetailCTPrice = styled.h1`
font-size: 2.5rem;
`