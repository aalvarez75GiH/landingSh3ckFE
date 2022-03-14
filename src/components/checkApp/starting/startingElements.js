import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import image from '../../../images/8443731_business_start_up_launch_rocket_icon.svg'


export const CheckSectionContainer = styled(motion.div) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 1100px;
    background-color: #eeeeee;
    margin-top: 2%;
    margin-left: 5%;
    position: fixed;
    left: 0;

    @media (max-width:560px) and (min-width: 480px){
        width: 100%;
        margin-top: unset;
        margin-left: unset;
    }
    @media (max-width:480px) and (min-width: 414px){
        width: 100%;
        margin-top: unset;
        margin-left: unset;
    }
    @media (max-width:414px) and (min-width: 360px){
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        background-color: #eeeeee;
        margin-top: 0%;
        margin-left: unset;
        
    }

    @media (max-width:360px) and (min-width: 320px){
        width: 100%;
        height: 650px;
        background-color: #eeeeee;
        margin-top: 0%;
        margin-left: unset;
    }

`

export const CheckSectionWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
    background-image: url(${image});
    background-size: 60% 60%;
    background-repeat: no-repeat;
    background-position-x: center;
    
    @media (max-width:1536px) and (min-width: 1366px) {
        background-size: 40% 60%;
    }
 
    @media (max-width:414px) and (min-width: 360px){
        height: 100%;
        background-size: 60% 42%;
        
    }

    @media (max-width:360px) and (min-width: 320px){
        height: 100%;
    background-size: 60% 42%;
    }

`

export const CheckSectionBtnWrap = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-top: 38%;

    @media (max-width:1536px) and (min-width: 1366px) {
        margin-top: 45%;
    }
    @media (max-width:1366px) and (min-width: 1280px){
        margin-top: 45%;
    }
    @media (max-width:1280px) and (min-width: 1098px){
        margin-top: 55%;
    }
    @media (max-width:1098px) and (min-width: 560px){
        margin-top: 65%;
    }
    @media (max-width:768px) and (min-width: 560px){
        margin-top: 65%;
    }
    @media (max-width:560px) and (min-width: 480px){
        margin-top: 95%;
    }
    @media (max-width:480px) and (min-width: 414px){
        margin-top: 95%;
    }
    @media (max-width:414px) and (min-width: 360px){
        margin-top: 20%;
        height: 100%;
    }

    @media (max-width:360px) and (min-width: 320px){
        margin-top: 40%;
    }

   
    
`
export const CheckSectionCheckBtn = styled.button `
    width: 40%;
    height: 115px;
    background-color: #010606;
    border-style: none;
    /* border-radius: 60px; */
    font-size: 1.5rem;
    color: #ffffff;
    margin-left: 5%;

    @media (max-width:1098px) and (min-width: 768px){
        width: 45%;
    }
    @media (max-width:768px) and (min-width: 560px){
        width: 60%;
    }
    @media (max-width:560px) and (min-width: 480px){
        width: 80%;
    }
    @media (max-width:480px) and (min-width: 414px){
        width: 80%;
    }
    @media (max-width:414px) and (min-width: 360px){
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

    @media (max-width:1098px) and (min-width: 768px){
        width: 45%;
    }
    @media (max-width:768px) and (min-width: 560px){
        width: 60%;
    }
    @media (max-width:560px) and (min-width: 480px){
        width: 80%;
    }
    @media (max-width:480px) and (min-width: 414px){
        width: 80%;
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
