import React, { useEffect } from 'react'
import { Link as LinkS } from 'react-scroll'
import  { useSelector, useDispatch }  from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import city_icon_black from '../../images/city_icon_3.svg'
import city_icon_white from '../../images/city_icon_3_white.svg'
import { categoryDone } from '../../state/actions'

// ******************** CheckApp Utilities ******************
export const CheckAppButton = () => {
    const dispatch = useDispatch()
    const {
        settingLevel,
        settingPreviousLevel,
        activatingCheckAppButton
    } = bindActionCreators(actionCreators, dispatch)
const level = useSelector((state) => state.checkSectionState.level) 
const levelUsed = useSelector((state) => state.checkSectionState.level_used )
const button_activated = useSelector((state) => state.overallCheckAppState.button_activated)

let arr = []
 arr = levelUsed   
    useEffect(() => {
        if (arr.includes(level)){
            activatingCheckAppButton(true)
            return   
        }
    },[])
    
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
export const CityTile = ({ city,index }) => {
    const dispatch = useDispatch()
    const {
        settingCityOfCheckOrder,
        cityChose,
        settingCityIDAtCheckOrder,
        activatingCheckAppButton,
        levelUsed, Done    
    } = bindActionCreators(actionCreators, dispatch)
    const cities = useSelector((state) => state.cityState.cities)
    const active = useSelector((state) => state.cityState.active_city)
    const level_used = useSelector((state) => state.checkSectionState.level_used )
    let arr = []
    arr = level_used
    console.log(arr)
    const toggleActive = (city, index) => {
        if (!arr.includes('city')){
            levelUsed('city')
        }
        settingCityOfCheckOrder(city.name)
        settingCityIDAtCheckOrder(city._id)
        activatingCheckAppButton(true)
        cityChose(cities[index]._id)
    }
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

export const CategoryTile = ({ category, index }) => {
    const dispatch = useDispatch()
    const {
        productToCheckCategory,
        productToCheckID,
        categoryChose,
        categoryChoseBoolean
    } = bindActionCreators(actionCreators, dispatch)
    const categories = useSelector((state)=> state.categoryAndSTState.categories)
    const active = useSelector((state) => state.categoryAndSTState.active_category)
    
    const handlingProductToCheckCategory = () => {
        categoryChoseBoolean(true)
        productToCheckCategory(category.name)
        productToCheckID(category._id)
        categoryChose(categories[index]._id)
    } 
    const togglingActivatedBar = (index) => {
        if(categories[index]._id === active){
            return 'categoryTile_active'
        }else{
            return 'categoryTile'
        }
    }
    return (
        <LinkS
        to="serviceTimesContainer"  
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500} 
        key={category._id} 
        onClick={handlingProductToCheckCategory}
        className={togglingActivatedBar(index)}>
            <img
            className="categoryIcon" 
            src={category.image} 
            alt="xdsxwdcd" />
            <p
            className="categoryName"
            >{category.name}</p>
        </LinkS>
    )
}
// ******************** Service Times Utilities ******************
export const ServiceTimeTile = ({ ST, index }) => {
    // console.log(ST)
    const dispatch = useDispatch()
    const {
        productToCheckServiceTime, 
        productToSTID,
        serviceTimeChose,
        activatingCheckAppButton,
        levelUsed, Done
    } = bindActionCreators(actionCreators, dispatch)
    
    const STimes = useSelector((state) => state.categoryAndSTState.service_times)
    console.log(STimes)
    const active = useSelector((state) => state.categoryAndSTState.active_service_time)
    const active_category_boolean = useSelector((state) => state.categoryAndSTState.active_category_boolean)
    const level_used = useSelector((state) => state.checkSectionState.level_used )
    let arr = []
    arr = level_used
    
    
    const handlingProductToCheckServiceTime = () => {
        if(active_category_boolean){
            if (!arr.includes('category')){
                levelUsed('category')
            }
            productToCheckServiceTime(ST.caption)
            productToSTID(ST._id)
            serviceTimeChose(STimes[index]._id)
            activatingCheckAppButton(true)
        }else{
            return
        }
        
    }

    console.log(active_category_boolean)
    
    return (
        <div
        id='serviceTimesContainer' 
        onClick={handlingProductToCheckServiceTime}
        key={ST._id}
        className={STimes[index]._id === active ? 'serviceTimeTile_active' : 'serviceTimeTile' }>
            <p
            className={active_category_boolean ? 'serviceTimeCaption_active' : 'serviceTimeCaption'} 
            >{ST.caption}</p>
            <small
            className={active_category_boolean ? 'STSmall_active' : 'STSmall'}
            >{ST.description}</small>
        </div>
    )
}




