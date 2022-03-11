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
        settingLevel, settingisOpen    
    } = bindActionCreators(actionCreators, dispatch)
    const isOpen = useSelector((state) => state.checkSectionState.isOpen) 
    // const test = () => {
    //     settingLevel('level2')
    // }
    const test = () => {
        settingLevel('level2')
    }
    const closeThis = () => {
        settingLevel('Starting')
        // settingisOpen(false)
    }
    
    return (
        <CitySectionContainer
        initial={{ x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
       
        // isOpen={isOpen}
        
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
                    onClick={closeThis}
                    >
                        Cerrar
                    </CitySectionBtn>    
                </CitySectionBtnWrapp>
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitiesSection