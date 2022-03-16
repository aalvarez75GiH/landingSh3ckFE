import React, { useEffect, useRef } from 'react'
import { Link as LinkS } from 'react-scroll'
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
        activatingCitySectionButton    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.checkSectionState.previous_level)
    console.log(previous_level)
    const cities = useSelector((state) => state.cityState.cities)
    const active = useSelector((state) => state.cityState.active_city)
    const button_activated = useSelector((state) => state.cityState.button_activated)
         
    const trackButton = useRef()
    

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

    const toggleActive = (city, index) => {
        settingCityOfCheckOrder(city.name)
        settingCityIDAtCheckOrder(city._id)
        activatingCitySectionButton(true)
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
 
   
    console.log(active)
    const renderingCitiesList = cities.map((city, index) => {
        return (
            <>
            <LinkS
            to="cityContainer"  
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} 
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
            </LinkS>
            
            </>
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
                
                {/* {
                   button_activated &&
                    <CitySectionButton
                    id="cityContainer"
                    onClick={handlinglevels}
                    >
                        Siguiente
                    </CitySectionButton>

                } */}
                {/* {
                   button_activated && */}
                    <CitySectionButton
                    button_activated={button_activated}
                    id="cityContainer"
                    onClick={handlinglevels}
                    >
                        Siguiente
                    </CitySectionButton>

                {/* } */}
            </CitySectionWrapper>
        </CitySectionContainer>

    )   
}

export default CitiesSection

