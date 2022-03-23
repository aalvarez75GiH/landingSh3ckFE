import React from 'react'
// import { useSelector } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { 
    CheckerSectionContainer, CheckerSectionWrapper,
    CheckerSectionBtnWrapp, CheckerSectionBtn
 

} from './checkersElements.js'


const CheckersSection = () => {
    
    const dispatch = useDispatch()
    const {  
        settingLevel, settingPreviousLevel

    } = bindActionCreators(actionCreators, dispatch)
    
    // const language = useSelector((state) => state.sideBarState.language)
    const previous_level = useSelector((state) => state.checkOrderState.previous_level)
    
    const test = () => {
        settingLevel('summary')
        settingPreviousLevel('checkers')
    }
    const comeBack = () => {
        settingLevel('category')
        settingPreviousLevel('checkers')
    }
    return (
        <CheckerSectionContainer
        initial={previous_level === 'summary' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CheckerSectionWrapper>
                <CheckerSectionBtnWrapp>
                    <CheckerSectionBtn
                    onClick={test}
                    >
                        Continuar
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </CheckerSectionBtn> 
                    <CheckerSectionBtn
                    onClick={comeBack}
                    >
                        Volver
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </CheckerSectionBtn>    
                </CheckerSectionBtnWrapp>
            </CheckerSectionWrapper>
        </CheckerSectionContainer>

    )   
}

export default CheckersSection