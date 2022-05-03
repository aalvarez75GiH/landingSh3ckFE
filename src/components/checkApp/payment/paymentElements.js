import  styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import { Link as LinkS } from 'react-scroll'

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
height: 15vh;
/* background-color: #FAD; */

`

export const CheckPaymentType = styled(LinkS)`
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
font-weight: 700;

`

export const CheckPaymentActiveBar = styled.div`
width: 75%;
height: 5px;
/* background-color: green; */
background-color:${({ payment, active_payment_type }) => payment._id === active_payment_type._id ? 'green' : 'transparent'};
margin-top: 5%;
`

// Animete heights Payments

export const PaymentInstContainer = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 145px;
background-color:${({ type }) => type === 'Pago Móvil' ? '#dfecff' : type === 'Zelle' ? '#dccbf6' : type === 'Transferencia' ? '#FAD570' : '#FAD570'};
margin-top: 2%;

`

export const PaymentsInsDetails = styled.div`
width: 90%;
height: 60%;
/* background-color: #010106; */
/* border: 1px solid #010606; */
margin-top: 10%;
margin-bottom:10%;
`

export const PaymentsInsTitle = styled.p`
font-weight: 600;
`
export const InstructionsContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 40%;
/* background-color: purple; */
margin-top: 2%;
`
export const Instruction = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 90%;
margin-top: 10%;
/* background-color: yellow; */
`

export const InstructionImg = styled.img`
width: 40px;
height: 40px;
`
export const InstructionCaption = styled.p`
margin-left: 5%;
`

export const MobilPaymentInfo = styled.div`
width: 80%;
height: 50%;
margin-left: 20%;
margin-top: 10%;
`

export const PaymentsForm = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width:100%;
height: 100%;
` 

export const ReferenceNumberInput = styled.input`
width: 95%;
height: 70px;
border-style: none;
padding: 5%;
font-size: 1.2rem;
outline: none;
`

export const TrickDiv = styled.div`
width: 100%;
height: 1px;
background-color: green;
opacity: 0;
`

export const BankSimButton = styled.div`
width: 50px;
height: 30px;
background-color: #010606;

`

export const BankSimInput = styled.input`
width: 50px;
height: 30px;
`

export const BankForm = styled.form`
display: flex;
justify-content: center;
/* flex-direction: column; */
align-items: center;
width:100%;
height: 100%;

`

export const TextField = styled.input`
width: 50px;
height: 30px;

`

export const CustomButton = styled.button`
width: 50px;
height: 30px;
background-color: #010606;
`

export const BanckFormContainer = styled.div`
display: flex;

`