import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const CheckerSectionContainer = styled(motion.div) `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: blue;
    display: grid;
    align-items: center;
    left: 0;
    right: 0;    
`
export const CheckerSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
    background-color: blueviolet;
`

export const CheckerSectionBtnWrapp = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-top: 38%;

`
export const CheckerSectionBtn = styled.button `
    width: 40%;
    height: 115px;
    background-color: #FAD570;
    border-style: none;
    /* border-radius: 60px; */
    font-size: 1.5rem;
    color: #ffffff;
    margin-left: 5%;

`