import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import city_icon_2 from '../../../images/city_icon_2.svg'

export const CitySectionContainer = styled(motion.div) `
/* position: fixed; */
z-index: 999;
width: 100%;
height: auto;
background-color: red;
display: grid;
align-items: center;
left: 0;
right: 0;
    
`

export const CitySectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 100%;
height: auto;
background-color: #eeeeee;
`
export const CityTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center ;
width: 95%;
height: 100px;
background-color: #ffffff;
margin-top: 4% ;
`
export const CitySectionTitle = styled.h1 `
font-size: 1.5rem;
font-weight: 600;
margin-left: 5%;

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

export const CityItem = styled.div `
display: flex;
align-items: center;
width: 95%;
height: 100px;
background-color: ${({ city_id, city  }) => city_id === '622e2e26b067d9d08fcde6a3' && city === 'Caracas' ? '#55F199' : '#ffffff' };
margin: 1%;
/* border: 1px solid #010606 ; */
`

export const CityItemIcon = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 70px;
height: 70px;
/* background-color: red; */
margin-left: 2% ;
`
export const CityIcon = styled.img`
width: 50px;
height: 50px;
`


export const CityItemName = styled.div`
display: flex ;
align-items: center ;
font-size: 1.3rem ;
width: 60%;
height: 40px;
/* background-color: blue; */
margin-left: 4% ;
`

export const ArrowIcon = styled.img`
width: 30px;
height: 30px;
`
export const CityItemArrow = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 40px;
/* background-color: green; */
/* margin-left: 10% ; */
` 

export const CitySectionBtnWrapp = styled.div `
display: flex;
flex-direction: column;
width: 100%;
height: auto;
`
export const CitySectionBtn = styled.button `
width: 40%;
height: 115px;
background-color: #FAD570;
border-style: none;
/* border-radius: 60px; */
font-size: 1.5rem;
color: #ffffff;
margin-left: 5%;
`
export const CitySectionButton = styled.button`
width: 95%;
height: 90px;
background-color: #010606;
border-style: none ;
margin-top: 1%;
color: #ffffff;
font-size: 1.3rem;
`


