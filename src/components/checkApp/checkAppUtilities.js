import React from 'react'
import { Link as LinkS } from 'react-scroll'
import  { useSelector, useDispatch }  from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import city_icon_black from '../../images/city_icon_3.svg'
import city_icon_white from '../../images/city_icon_3_white.svg'

// ******************** CheckApp Utilities ******************
export const CheckAppButton = () => {
    const dispatch = useDispatch()
    const {
        settingLevel,
        settingPreviousLevel,
        activatingCheckAppButton
    } = bindActionCreators(actionCreators, dispatch)
const level = useSelector((state) => state.checkSectionState.level) 
const button_activated = useSelector((state) => state.overallCheckAppState.button_activated)
console.log(button_activated)
    
    const handlingLevels = () => {
        if (level === 'city'){
            activatingCheckAppButton(false)
            settingLevel('category')
            settingPreviousLevel('city')
            return
        }
        if (level === 'category'){
            activatingCheckAppButton(false)
            settingLevel('checkers')
            settingPreviousLevel('category')
            return
        }
    }

    return (
        <button 
        id="cityContainer"
        onClick={handlingLevels}
        className={button_activated ? "CheckAppButton_activated" : "CheckAppButton"  }>
            Siguiente
        </button>
    )
}
// ******************** City Utilities ******************
export const CityTile = ({city,index}) => {
    const dispatch = useDispatch()
    const {
        settingCityOfCheckOrder,
        cityChose,
        settingCityIDAtCheckOrder,
        activatingCheckAppButton    
    } = bindActionCreators(actionCreators, dispatch)

    const toggleActive = (city, index) => {
        settingCityOfCheckOrder(city.name)
        settingCityIDAtCheckOrder(city._id)
        activatingCheckAppButton(true)
        cityChose(cities[index]._id)
    }
    const cities = useSelector((state) => state.cityState.cities)
    const active = useSelector((state) => state.cityState.active_city)

    const toggleActiveStyle = (index) => {
        if (cities[index]._id === active ){
            return 'cityItem_coloured'
        }else{
            return 'cityItem'
        }
    }

    console.log(active)
    
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
                    src={city_icon_black}
                    className="cityIcon" alt="cityIcon"/>
                </div>
                <div className="cityItemName">
                    {city.name}
                </div>
            </LinkS>
            
            </>
        )
    }

// ******************** Category Utilities ******************

export const CategoryTile = ({
    category,
    index
}) => {
    const dispatch = useDispatch()
    const {
        productToCheckCategory,
        productToCheckID,
        categoryChose
    } = bindActionCreators(actionCreators, dispatch)
    const categories = useSelector((state)=> state.categoryAndSTState.categories)
    const active = useSelector((state) => state.categoryAndSTState.active_category)
    const handlingProductToCheckCategory = () => {
        productToCheckCategory(category.name)
        productToCheckID(category._id)
        categoryChose(categories[index]._id)
    } 
    const togglingActivatedBar = (index) => {
        if(categories[index]._id === active){
            return 'activatedBar_active'
        }else{
            return 'activatedBar'
        }
    }
    return (
        <div
        key={category._id} 
        onClick={handlingProductToCheckCategory}
        className='categoryTile'>
            <img
            className="categoryIcon" 
            src={category.image} 
            alt="xdsxwdcd" />
            <p
            className="categoryName"
            >{category.name}</p>
            <div className={togglingActivatedBar(index)}></div>
        </div>
    )
}

export const ServiceTimeTile = ({
    caption,
    description
}) => {
    const dispatch = useDispatch()
    const {
           
    } = bindActionCreators(actionCreators, dispatch)

    return (
        <div className="serviceTimeTile">
            <p
            className="serviceTimeCaption"
            >{caption}</p>
            <small>{description}</small>
        </div>
    )
}




