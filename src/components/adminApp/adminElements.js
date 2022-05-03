import  styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import { Link as LinkS } from 'react-scroll'

export const AdminSectionContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
background-color: #ffffff;

`
export const AdminSectionCloseContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 7vh;
background-color: #010606;
`
export const AdminSectionLogos = styled.div`
display: flex;
width: 40%;
/* background-color: green; */
margin-left: 5%;
margin-right: 45%;
`
export const AdminLogoSh3ck = styled.div`
font-size: 1.5rem;
font-weight: 600;
width: 50%;
/* background-color: blue; */
color: #ffffff;
`
export const AdminLogoDetail = styled.div`
font-size: 1.5rem;
font-weight: 300;
width: 50%;
/* background-color: white; */
color: #ffffff;
`
export const AdminLoginFormTitleContainer = styled.div`
display: flex;
align-items: center;
width: 95%;
height: 10vh;
/* background-color: red; */
margin-top: 10%;

`
export const AdminLoginFormTitle = styled.h1`
font-size: 3rem;
font-weight: 600;
margin-left: 3%;

`
export const Icon = styled.img`
width: 30px;
height: 30px;
margin-right: 5%;
`
export const AdminForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff;
flex-direction: column;
width: 95%;
height: auto;
`
export const Input = styled.input`
height: 85px;
width: 95%;
margin-bottom: 15px;
padding: 10px;
background-color: #eeeeee;
border-style: none;
font-size: 1.3rem;
padding-left: 5%;
outline: none;

`
export const InputPassword = styled.input`
height: 85px;
width: 80%;
margin-bottom: 15px;
padding: 10px;
background-color: #eeeeee;
border-style: none;
font-size: 1.3rem;
padding-left: 5%;
outline: none;
`
export const Button = styled.button`
width: 95%;
height: 100px;
background-color: #01bf71;
border-style: none;
font-size: 1.3rem;
font-weight: 500;
color: #ffffff;

`

export const InputWrapper = styled.div`
display: flex;
width: 95%;
`
export const EyeWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20%;
height: 85px;
background-color: #eeeeee;


`
// export const AdminLoginForm = styled.div`
// width: 100%;
// height: auto;
// background-color: green;
// `