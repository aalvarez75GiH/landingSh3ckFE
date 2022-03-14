import React, { useState, useEffect } from 'react'
// import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { getRequestToCities } from '../../../requestsToApi'
import city_icon from '../../../images/city_icon_3.svg'
import arrow_icon from '../../../images/3927254_arrow_arrow right_caret_caret right_chevron_icon.svg'
import { 
    CitySectionContainer, CitySectionWrapper, 
    CityItem, CityItemContainer, CityItemIcon,
    CityItemName, CityItemArrow, CitySectionTitle,
    CityTitleContainer, CityIcon, ArrowIcon
    
} from './cityElements.js'


const CitiesSection = () => {

    const dispatch = useDispatch()
    const {
        settingLevel, 
        settingPreviousLevel, 
        gettingCities    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)

    useEffect(() => { 
        
        const gettingCitiesFromAPI = async() => {
            const response  = await getRequestToCities()
            setCities(response)
        }
        gettingCitiesFromAPI()
    },[])
    
    const [cities, setCities ] = useState([])
    // gettingCities(cities)
    console.log(cities)
    const handlinglevels = () => {
        settingLevel('level2')
        settingPreviousLevel('level1')
    }
  
    const comeBack = () => {
        settingLevel('Starting')
        settingPreviousLevel('level1')
    }

    const test = (cityName) => {
        console.log(cityName)
    }
    const renderingCitiesList = cities.map((city) => {
        return (
            <CityItem
            id={city._id} 
            onClick={() => test(city.name)}
            >
                <CityItemIcon>
                    <CityIcon  src={city_icon}></CityIcon>
                </CityItemIcon>
                <CityItemName>
                    {city.name}       
                </CityItemName>
                <CityItemArrow>
                    <ArrowIcon  src={arrow_icon}></ArrowIcon>
                </CityItemArrow>
                </CityItem>
        )
    })
  
    
    return (
        
        <CitySectionContainer
        initial={previous_level === 'level2' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CitySectionWrapper>
                <CityTitleContainer>
                    <CitySectionTitle>Ciudades donde chequeamos</CitySectionTitle>
                </CityTitleContainer>
                <CityItemContainer>
                    {renderingCitiesList}
                    {/* <CityItem>
                        <CityItemIcon>
                            <CityIcon  src={city_icon}></CityIcon>
                        </CityItemIcon>
                        <CityItemName>
                            Barquisimeto       
                        </CityItemName>
                        <CityItemArrow>
                            <ArrowIcon  src={arrow_icon}></ArrowIcon>
                        </CityItemArrow>
                    </CityItem>

                    <CityItem>
                        <CityItemIcon>
                            <CityIcon  src={city_icon}></CityIcon>
                        </CityItemIcon>
                        <CityItemName>
                            Caracas       
                        </CityItemName>
                        <CityItemArrow>
                            <ArrowIcon  src={arrow_icon}></ArrowIcon>
                        </CityItemArrow>
                    </CityItem>

                    <CityItem>
                        <CityItemIcon>
                            <CityIcon  src={city_icon}></CityIcon>
                        </CityItemIcon>
                        <CityItemName>
                            Maracaibo    
                        </CityItemName>
                        <CityItemArrow>
                            <ArrowIcon  src={arrow_icon}></ArrowIcon>
                        </CityItemArrow>
                    </CityItem> */}
                </CityItemContainer>
                    
                
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitiesSection

