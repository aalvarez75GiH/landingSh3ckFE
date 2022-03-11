import React from 'react'
// import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import { 
    CitySectionContainer, CitySectionWrapper,
    CitySectionBtnWrapp, CitySectionBtn
 

} from './checkAppElements'


const CitiesSection = () => {
    
    const dispatch = useDispatch()
    const {
        settingLevel, settingisOpen, settingPreviousLevel    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)
    const test = () => {
        settingLevel('level2')
        settingPreviousLevel('level1')
    }
  
    const comeBack = () => {
        settingLevel('Starting')
        settingPreviousLevel('level1')
    }
    
    return (
        
        <CitySectionContainer
        initial={previous_level === 'level2' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CitySectionWrapper>
                <CitySectionBtnWrapp>
                <CitySectionBtn
                    onClick={test}
                    >
                        Continuar
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </CitySectionBtn> 
                    <CitySectionBtn
                    onClick={comeBack}
                    >
                        Volver
                    </CitySectionBtn>    
                </CitySectionBtnWrapp>
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitiesSection

