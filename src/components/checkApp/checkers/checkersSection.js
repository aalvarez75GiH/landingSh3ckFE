import React, {useEffect} from 'react'
// import { useSelector } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import arrow_icon_left from '../../../images/arrow_left_back_icon.svg'
import { CheckAppButton, CheckerTile  } from '../checkAppUtilities'
import { getRequestToCheckers } from '../../../requestsToApi'
import { 
    CheckerSectionContainer, CheckerSectionWrapper,
    CheckerSectionBtnWrapp, CheckerSectionBtn,
    BackwardSection,BackwardLeftArrowIcon,
    LeftArrow, BackwardLabel, CheckersTitleContainer,
    CheckersSectionTitle, CheckerItemContainerGrid,
    CheckerItemContainerFlex

} from './checkersElements.js'


const CheckersSection = () => {
    
    const dispatch = useDispatch()
    const {  
        settingLevel, settingPreviousLevel,
        settingCheckers

    } = bindActionCreators(actionCreators, dispatch)
    
    // const language = useSelector((state) => state.sideBarState.language)
    const previous_level = useSelector((state) => state.checkOrderState.previous_level)
    const city_id = useSelector((state) => state.checkOrderState.city_id)
    const checkers = useSelector((state) => state.checkersState.checkers)
    
    useEffect(()=> {
        const gettingCheckers = async() => {
            const responseCheckers  = await getRequestToCheckers(city_id)
            console.log(responseCheckers)
            settingCheckers(responseCheckers)
        }
        gettingCheckers()
    },[])

    const goingForward = () => {
        settingLevel('summary')
        settingPreviousLevel('checkers')
    }
    const comeBack = () => {
        settingLevel('category')
        settingPreviousLevel('checkers')
    }

   
        const renderingCheckersList = checkers.map((checker, index) => {
            return (
                <CheckerTile 
                checker={checker}
                index={index}
                />
            )

        })
   
    return (
        <CheckerSectionContainer
        initial={previous_level === 'summary' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CheckerSectionWrapper>
            <BackwardSection
                onClick={comeBack}
                >
                    <BackwardLeftArrowIcon>
                            <LeftArrow
                            src={arrow_icon_left}
                            >

                            </LeftArrow>
                    </BackwardLeftArrowIcon>
                    <BackwardLabel>
                        Atrás
                    </BackwardLabel>
            </BackwardSection>
            <CheckersTitleContainer>
                <CheckersSectionTitle>Escoge el chequeador...</CheckersSectionTitle>
            </CheckersTitleContainer>
            <CheckerItemContainerFlex>
                {renderingCheckersList}
            </CheckerItemContainerFlex>
            <CheckAppButton />
                
            </CheckerSectionWrapper>
        </CheckerSectionContainer>

    )   
}

export default CheckersSection

{/* <CheckerSectionBtnWrapp>
                    <CheckerSectionBtn
                    onClick={test}
                    >
                        Continuar
                       
                    </CheckerSectionBtn> 
                    <CheckerSectionBtn
                    onClick={comeBack}
                    >
                        Volver
                       
                    </CheckerSectionBtn>    
                </CheckerSectionBtnWrapp> */}