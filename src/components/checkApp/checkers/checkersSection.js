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
    // const isOpen = useSelector((state) => state.checkSectionState.isOpen) 
    
    const dispatch = useDispatch()
    const {  
        settingLevel, settingPreviousLevel

    } = bindActionCreators(actionCreators, dispatch)
    
    // const language = useSelector((state) => state.sideBarState.language)
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)
    
    const test = () => {
        settingLevel('level4')
        settingPreviousLevel('level3')
    }
    const comeBack = () => {
        settingLevel('level2')
        settingPreviousLevel('level3')
    }
    return (
        <CheckerSectionContainer
        initial={previous_level === 'level4' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
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