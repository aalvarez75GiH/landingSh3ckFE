import React, { useState, useEffect } from 'react'
// import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { getRequestToCities } from '../../../requestsToApi'
import city_icon_black from '../../../images/city_icon_3.svg'
import city_icon_white from '../../../images/city_icon_3_white.svg'
import '../../../sh3ck.css'
import arrow_icon from '../../../images/3927254_arrow_arrow right_caret_caret right_chevron_icon.svg'
import arrow_icon_white from '../../../images/rigth_arrow_white.svg'
import { 
    CitySectionContainer, CitySectionWrapper, 
    CityItem, CityItemContainer, CityItemIcon,
    CityItemName, CityItemArrow, CitySectionTitle,
    CityTitleContainer, CityIcon, ArrowIcon,
    CitySectionButton
    
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
        activatingCitySectionButton    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)
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
    
    
    console.log(cities)
    const handlinglevels = () => {
        settingLevel('level2')
        settingPreviousLevel('level1')
    }
  
    const comeBack = () => {
        settingLevel('Starting')
        settingPreviousLevel('level1')
    }

    const toggleActive = (city, index) => {
        settingCityOfCheckOrder(city.name)
        settingCityIDAtCheckOrder(city._id)
        activatingCitySectionButton(true)
        console.log(cities[index]._id)
        cityChose(cities[index]._id)
                     
    }

    const toggleActiveStyle = (index) => {
        if (cities[index]._id === active ){
            return 'cityItem_coloured'
        }else{
            return 'cityItem'
        }
    }

    const toggleActiveStyle_cityName = (index) => {
        if (cities[index]._id === active ){
            return 'cityItemName_coloured'
        }else{
            return 'cityItemName'
        }
    }
    const toggleActiveStyle_arrowIcon = (index) => {
        if (cities[index]._id === active ){
            return 'cityItemArrow_active'
        }else{
            return 'cityItemArrow'
        }
    }

    
    
    console.log(active)
    const renderingCitiesList = cities.map((city, index) => {
        return (
            <>
            <div 
            key={city._id}
            onClick={() => toggleActive(city,index)}
            className={toggleActiveStyle(index)}>
                <div className="cityItemIcon">
                    <img 
                    src={cities[index]._id === active ? city_icon_white : city_icon_black}
                    // src={city_icon_black} 
                    className="cityIcon" alt="test1"/>
                </div>
                <div className={toggleActiveStyle_cityName(index)}>
                    {city.name}
                </div>
                {/* <div className={toggleActiveStyle_arrowIcon(index)}>
                    <img src={cities[index]._id === active ? arrow_icon : arrow_icon} className="arrowIcon" alt="test2"/>
                </div> */}

            </div>
            {/* <CityItem
            id={city._id}
            onClick={() => toggleActive(index)}
            className={toggleActiveStyle(index)}
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
            </CityItem> */}
            </>
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
                </CityItemContainer>
                {
                   button_activated &&
                    <CitySectionButton
                    onClick={handlinglevels}
                    >
                        Siguiente
                    </CitySectionButton>

                }
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitiesSection

