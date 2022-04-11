import React, {useEffect} from 'react'
// import { useSelector } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { CheckerTile, BackwardSectionComponent, AuthCenterTile  } from '../checkAppUtilities'
import { CheckerProfileTileComponent } from './checkersSubComponents'

import {  getRequestToCheckersByCity, getRequestToAllAuthCenters } from '../../../requestsToApi'
import { 
    CheckerSectionContainer, CheckerSectionWrapper,
    CheckersTitleContainer, CheckersSectionTitle,
    CheckerItemContainerFlex, CheckersOptionsContainer,
    CheckerTypeButton1, CheckerTypeButton2
} from './checkersElements.js'


const CheckersSection = () => {
    
    const dispatch = useDispatch()
    const {  
        settingLevel, settingPreviousLevel,
        settingCheckers, settingAuthCenters,
        settingTypeOfChecker
    } = bindActionCreators(actionCreators, dispatch)
    
    // const language = useSelector((state) => state.sideBarState.language)
    const previous_level = useSelector((state) => state.checkOrderState.previous_level)
    const city_id = useSelector((state) => state.checkOrderState.city_id)
    const checkers = useSelector((state) => state.checkersState.checkers)
    const authCenters = useSelector((state) => state.checkersState.authCenters)
    const checkers_type = useSelector((state) => state.checkersState.checkers_type)
    const active = useSelector((state) => state.checkersState.checkers_type_button_active)

    useEffect(()=> {
        const gettingCheckersAndAuthCenters = async() => {
            // const responseCheckers  = await getRequestToCheckersbyCity(city_id)
            const responseCheckers  = await getRequestToCheckersByCity(city_id)
            console.log(responseCheckers)
            const responseAuthCenters = await getRequestToAllAuthCenters()
            console.log(responseAuthCenters)
            settingCheckers(responseCheckers)
            settingAuthCenters(responseAuthCenters)
        }
        gettingCheckersAndAuthCenters()
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

        const renderingAuthCentersList = authCenters.map((checker, index) => {
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
                <CheckersOptionsContainer>
                    <CheckerTypeButton1
                    onClick={() => settingTypeOfChecker('checkers')}
                    checkers_type={checkers_type}
                    >
                        Chequeadores
                    </CheckerTypeButton1>
                    <CheckerTypeButton2
                    onClick={() => settingTypeOfChecker('authCenters')}
                    checkers_type={checkers_type}
                    >
                        Centros autorizados
                    </CheckerTypeButton2>
                </CheckersOptionsContainer>
                <CheckerItemContainerFlex>
                    {checkers_type === 'authCenters' ? renderingAuthCentersList : renderingCheckersList}
                    {/* {renderingCheckersList} */}
                </CheckerItemContainerFlex>
            </CheckerSectionWrapper>
        </CheckerSectionContainer>

    )   
}

export default CheckersSection

