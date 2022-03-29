import React, { useEffect } from 'react'
import { Link as LinkS } from 'react-scroll'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { getRequestToCities } from '../../../requestsToApi'
import { CityTile, CheckAppButton, BackwardSectionComponent } from '../checkAppUtilities'

import '../../../sh3ck.css'
import arrow_icon_left from '../../../images/arrow_left_back_icon.svg'
import { 
    CitySectionContainer, CitySectionWrapper, 
    CityItemContainer,  CitySectionTitle,
    CityTitleContainer, BackwardSection, 
    BackwardLeftArrowIcon, LeftArrow, 
    BackwardLabel
    
} from './cityElements.js'


const CitiesSection = () => {

    const dispatch = useDispatch()
    const {
        settingLevel, 
        settingPreviousLevel, 
        gettingCities,    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.overallCheckAppState.previous_level)
    console.log(previous_level)
    const cities = useSelector((state) => state.cityState.cities)
         
    
    useEffect(() => {
        const gettingCitiesFromAPI = async() => {
            const response  = await getRequestToCities()
            gettingCities(response)
        }
        gettingCitiesFromAPI()
    },[])
    
    
    
    const comeBack = () => {
        settingLevel('Starting')
        settingPreviousLevel('city')
    }


    const renderingCitiesList = cities.map((city, index) => {  
        return (
            <CityTile
            city={city}
            index={index}
            />
        )
    })
  
    console.log(previous_level)
    return (
        
        <CitySectionContainer
        initial={previous_level === 'category' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CitySectionWrapper>
                <BackwardSectionComponent
                comeBack={comeBack}
                />
                <CityTitleContainer>
                    <CitySectionTitle>Ciudades donde chequeamos</CitySectionTitle>
                </CityTitleContainer>
                <CityItemContainer>
                    {renderingCitiesList}
                </CityItemContainer>
                    <CheckAppButton 
                    buttonLabel='Siguiente'
                    />
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitiesSection

