import React from 'react'
// import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { 
    CategorySectionContainer, CategorySectionWrapper,
    CategorySectionBtnWrapp, CategorySectionBtn
 

} from './categoryElements.js'


const CategorySection = () => {
    
    const dispatch = useDispatch()
    const {
        settingLevel, settingPreviousLevel    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)
    const test = () => {
        settingLevel('checkers')
        settingPreviousLevel('category')
    }
  
    const comeBack = () => {
        settingLevel('city')
        settingPreviousLevel('category')
    }
    
    return (
        
        <CategorySectionContainer
        initial={previous_level === 'checkers' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CategorySectionWrapper>
                <CategorySectionBtnWrapp>
                <CategorySectionBtn
                    onClick={test}
                    >
                        Continuar
                        {/* {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN} */}
                    </CategorySectionBtn> 
                    <CategorySectionBtn
                    onClick={comeBack}
                    >
                        Volver
                    </CategorySectionBtn>    
                </CategorySectionBtnWrapp>
            </CategorySectionWrapper>
        </CategorySectionContainer>

    )   
}

export default CategorySection
