import React from 'react'
// import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import { 
    CitySectionContainer, CitySectionWrapper,
    CitySectionBtnWrapp, CitySectionBtn
 

} from './checkSectionElements'


const CitySection = () => {
    
    const dispatch = useDispatch()
    const {
        settingLevel,   
    } = bindActionCreators(actionCreators, dispatch)
    const isOpen = useSelector((state) => state.checkSectionState.isOpen) 

    const test = () => {
        settingLevel('level2')
    }
    return (
        <CitySectionContainer
        isOpen={isOpen}
        >
            <CitySectionWrapper>
                <CitySectionBtnWrapp>
                    <CitySectionBtn
                    onClick={test}
                    >
                        Continuar
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </CitySectionBtn>    
                </CitySectionBtnWrapp>
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitySection