import React, { useEffect } from 'react'
import { Link as LinkS } from 'react-scroll'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { getRequestToCities } from '../../../requestsToApi'
import { CityTile, CheckAppButton } from '../checkAppUtilities'
import city_icon_black from '../../../images/city_icon_3.svg'
import city_icon_white from '../../../images/city_icon_3_white.svg'

import '../../../sh3ck.css'
import arrow_icon_left from '../../../images/arrow_left_back_icon.svg'
import { 
    CitySectionContainer, CitySectionWrapper, 
    CityItemContainer,  CitySectionTitle,
    CityTitleContainer, CitySectionButton, 
    BackwardSection, BackwardLeftArrowIcon,
    LeftArrow, BackwardLabel
    
} from './cityElements.js'


const CitiesSection = () => {

    const dispatch = useDispatch()
    const {
        settingLevel, 
        settingPreviousLevel, 
        gettingCities,
        settingCityOfCheckOrder,
        cityChose,
        settingCityIDAtCheckOrder,
        activatingCheckAppButton    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)
    console.log(previous_level)
    const cities = useSelector((state) => state.cityState.cities)
    const active = useSelector((state) => state.cityState.active_city)
    const button_activated = useSelector((state) => state.cityState.button_activated)
         
    
    

    useEffect(() => {
        const gettingCitiesFromAPI = async() => {
            const response  = await getRequestToCities()
            gettingCities(response)
        }
        gettingCitiesFromAPI()
    },[])
    
    
    // console.log(cities)
    const handlinglevels = () => {
        settingLevel('category')
        settingPreviousLevel('city')
    }
  
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
        // id="cityContainer"
        initial={previous_level === 'category' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CitySectionWrapper>
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
                <CityTitleContainer>
                    <CitySectionTitle>Ciudades donde chequeamos</CitySectionTitle>
                </CityTitleContainer>
                <CityItemContainer>
                    {renderingCitiesList}
                </CityItemContainer>
                    <CheckAppButton />
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitiesSection

