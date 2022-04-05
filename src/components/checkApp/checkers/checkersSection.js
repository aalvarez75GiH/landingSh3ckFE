import React, {useEffect} from 'react'
// import { useSelector } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { CheckerTile, BackwardSectionComponent  } from '../checkAppUtilities'
import { CheckerProfileTileComponent } from './checkersSubComponents'

import { getRequestToCheckers, getRequestToCheckersByCity, 
    getRequestToCheckersByCategory, getRequestToCheckersByCityAndCategory 
} from '../../../requestsToApi'
import { 
    CheckerSectionContainer, CheckerSectionWrapper,
    CheckersTitleContainer, CheckersSectionTitle,
    CheckerItemContainerFlex

} from './checkersElements.js'


const CheckersSection = () => {
    
    const dispatch = useDispatch()
    const {  
        settingLevel, settingPreviousLevel,
        settingCheckers, 
        settingCheckerFromCheckOrder,
        checkerChose, activatingCheckerInterface,
        activatingCheckAppButton

    } = bindActionCreators(actionCreators, dispatch)
    
    // const language = useSelector((state) => state.sideBarState.language)
    const previous_level = useSelector((state) => state.checkOrderState.previous_level)
    const city_id = useSelector((state) => state.checkOrderState.city_id)
    const checkers = useSelector((state) => state.checkersState.checkers)
    
    // const category_id = useSelector((state) => state.productToCheckState.category_id)
    // const service_time_id = useSelector((state) => state.productToCheckState.service_time_id)

    
    useEffect(()=> {
        const gettingCheckers = async() => {
            // const responseCheckers  = await getRequestToCheckersbyCity(city_id)
            const responseCheckers  = await getRequestToCheckersByCity(city_id)
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
                <BackwardSectionComponent
                comeBack={comeBack}
                />
                <CheckersTitleContainer>
                    <CheckersSectionTitle>Escoge el chequeador...</CheckersSectionTitle>
                </CheckersTitleContainer>
                <CheckerItemContainerFlex>
                    {renderingCheckersList}
                </CheckerItemContainerFlex>
            </CheckerSectionWrapper>
        </CheckerSectionContainer>

    )   
}

export default CheckersSection

