import styled from 'styled-components/macro'
import {motion} from 'framer-motion'


export const BackwardSection = styled.div`
display: flex;
align-items: center ;
width: 95%;
height: 40px;
background-color: #ffffff;
margin-top: 2%;

@media (max-width:1920px) and (min-width: 560px){
height: 80px;
}

@media (max-width:560px) and (min-width: 320px){
height: 40px;
}
`
export const BackwardLabel = styled.p `
width: 150px;
height: 20px;
font-weight: 400;

@media (max-width:1920px) and (min-width: 560px){
font-size: 2rem;
height: 40px;
}

@media (max-width:560px) and (min-width: 320px){
display: flex;
align-items: center;
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
@media (max-width:1920px) and (min-width: 768px){
width: 35px;
height: 35px;
}
@media (max-width:768px) and (min-width: 560px){
width: 18px;
height: 18px;
}
`

// ********************* Animate height Elements
export const CheckTypeDescTest = styled(motion.div)`
width: 100%;
height: 145px;
background-color: #fae29d;
margin-top: 2%;
/* color: #ffffff */
`
export const CheckTypeTileInfoCaptionDescription = styled.div`
width: 100%;
height: 100%;
background-color: transparent;
display: flex;
/* flex-direction: column; */
justify-content: center;
align-items: center;
margin-left: 0%;
`

export const CheckTypeDescDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40%;
height: 100%;
`
export const CheckTypeCaptionDescription = styled.h1`
/* margin-top: 8%; */
font-size: 2rem;

@media (max-width: 768px) and (min-width:560px){
    margin-left: 5% ;
}
@media (max-width: 560px) and (min-width:480px){
    font-size: 2.5rem;
}
@media (max-width: 480px) and (min-width:414px){
    font-size: 3rem;
}
@media (max-width: 414px) and (min-width:320px){
    font-size: 1.4rem;
}

`
export const CheckTypeDescDiv2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 60%;
height: 100%;
`
export const CheckTypeDesc = styled.small`
width: 100%;
height: 10%;
background-color: transparent;
font-size: 1.2rem;


@media (max-width: 1920px) and (min-width:1280px){
    padding-left: 18%;
    padding-top: 3%;
}
@media (max-width: 1280px) and (min-width:1098px){
    padding-left: 30%;
    padding-top: 3%;
}
@media (max-width: 1098px) and (min-width:768px){
    padding-left: 26%;
    padding-top: 3%;
}
@media (max-width: 768px) and (min-width:560px){
    padding-left: 22%;
    padding-top: 3%;
}

@media (max-width: 560px) and (min-width:480px){
    padding-left: 20%;
}
@media (max-width: 480px) and (min-width:360px){
    width: 101%;
    height: 20%;
    font-size: 0.9rem;
    /* padding-left: 23%; */
}
@media (max-width: 360px) and (min-width:320px){
    height: 8%;
    font-size: 0.9rem;
    padding-left: 23%;
}
`

export const PaymentDescContainer = styled(motion.div)`
display: flex;
flex-direction: column;
width: 100%;
height: 145px;
background-color: #fae29d;
margin-top: 2%;
`
export const ServiceTimeDescContainer = styled.div`
display: flex;
justify-content:flex-start;
align-items: center;
width: 90%;
height: 30px;
margin-top: 2%;
margin-left: 5%;
`
export const ServiceTimeTitle = styled.h4`
font-size: 1.1rem;

`
export const ServiceTimeDesc = styled.h4`
font-weight: 300;
margin-left: 2%;
margin-right: 2%;
`
export const ServiceTimeBase = styled.h4`
font-size: 1.4rem;

`
export const CheckTypeDescContainer = styled.div`
display: flex;
justify-content:flex-start;
align-items: center;
width: 90%;
height: 30px;
margin-top: 2%;
margin-left: 5%;
`

export const CheckTypeTitle = styled.h4`
font-size: 1.1rem;
`
export const CheckTypeDescription = styled.h4`
font-weight: 300;
margin-left: 2%;
margin-right: 2%;

`
export const CheckTypeBase = styled.h4`
font-size: 1.4rem;

`
export const PaymenyDescClose = styled.div`
display: flex;
justify-content:flex-end;
align-items: center;
width: 90%;
height: 30px;
margin-top: 2%;
margin-left: 5%;

`
export const CloseIcon = styled.img`
width: 30px;
height: 30px;
`