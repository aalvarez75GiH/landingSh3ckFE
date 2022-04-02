import styled from 'styled-components/macro'


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