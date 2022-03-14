import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const CategorySectionContainer = styled(motion.div) `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: red;
    display: grid;
    align-items: center;
    left: 0;
    right: 0;
    
`

export const CategorySectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
    background-color: #ef476f;
    
    
`

export const CategorySectionBtnWrapp = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-top: 38%;

`
export const CategorySectionBtn = styled.button `
    width: 40%;
    height: 115px;
    background-color: #097654;
    border-style: none;
    /* border-radius: 60px; */
    font-size: 1.5rem;
    color: #ffffff;
    margin-left: 5%;

`
