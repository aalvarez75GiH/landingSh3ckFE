import React, { useEffect } from 'react'
import { Rating } from '@mui/material'
import { Link as LinkS } from 'react-scroll'
import  { useSelector, useDispatch }  from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import city_icon_black from '../../images/city_icon_3.svg'

import arrow_icon_left from '../../images/arrow_left_back_icon.svg'
import { getRequestToServiceTimebyId } from './../../requestsToApi'
import {
    BackwardSection, 
    BackwardLeftArrowIcon,
    LeftArrow, BackwardLabel,
} from '../checkApp/checkAppUtilitiesElements'
import alternate_picture from '../../images/avatar_1.png'
// import {  capitalizeFullName  } from '../../checkApp/checkAppUtilities'
import { CategoryLabelComponent } from '../checkApp/checkers/checkersSubComponents'


// ******************** CheckApp Utilities ******************
export const CheckAppButton = ({ buttonLabel }) => {
    const dispatch = useDispatch()
    const {
        settingLevel,
        settingPreviousLevel,
        activatingCheckAppButton
    } = bindActionCreators(actionCreators, dispatch)
const level = useSelector((state) => state.overallCheckAppState.level) 
const levelUsed = useSelector((state) => state.overallCheckAppState.level_used )
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
            {buttonLabel}
        </button>
    )
}
// ******************** City Utilities ******************
export const CityTile = ({ city,index }) => {
    const dispatch = useDispatch()
    const {
        settingCityOfCheckOrder, cityChose,
        settingCityIDAtCheckOrder, activatingCheckAppButton,
        levelUsed  
    } = bindActionCreators(actionCreators, dispatch)
    const cities = useSelector((state) => state.cityState.cities)
    const active = useSelector((state) => state.cityState.active_city)
    const level_used = useSelector((state) => state.overallCheckAppState.level_used )
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
            alt="categoryIcon" />
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
        productToCheckServiceTime, productToSTID,
        serviceTimeChose, activatingCheckAppButton,
        levelUsed 
    } = bindActionCreators(actionCreators, dispatch)
    
    const STimes = useSelector((state) => state.categoryAndSTState.service_times)
    console.log(STimes)
    const active = useSelector((state) => state.categoryAndSTState.active_service_time)
    const active_category_boolean = useSelector((state) => state.categoryAndSTState.active_category_boolean)
    const level_used = useSelector((state) => state.overallCheckAppState.level_used )
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

// ******************** Checkers Section Utilities ******************


 
// Function used to capitalized Full Names
export const capitalizeFullName = (nameToCapitalize) => {
    const fullNameArray = nameToCapitalize.split(' ')
    for (let i = 0; i < fullNameArray.length; i++){
       fullNameArray[i] = fullNameArray[i][0].toUpperCase() + fullNameArray[i].substr(1)
    }
    let result = fullNameArray.join(' ')
    console.log(result)
    return result    
}



export const CheckerTile = ({ checker, index }) => {
    
    console.log(checker.category[0].category_name)
    const dispatch = useDispatch()
    const {
        settingCheckerFromCheckOrder,
        checkerChose, activatingCheckerInterface,
        settingBaseAtCheckOrder, activatingCheckAppButton

    } = bindActionCreators(actionCreators, dispatch)

    const checkers = useSelector((state) => state.checkersState.checkers)
    const price = useSelector((state) => state.checkOrderState.price)
    const active_service_time = useSelector((state) => state.categoryAndSTState.active_service_time)
    
    console.log(checker)

    useEffect(() => {
        const gettingSTBase = async() => {
            const response  = await getRequestToServiceTimebyId(active_service_time)
            console.log(response)
            settingBaseAtCheckOrder(response.base)
        }
        gettingSTBase()
    },[])

    console.log(checker.category)
    const checkerNameCapitalized = capitalizeFullName(checker.fullName )
    
    // const settingOverallRating = () => {
    //     checker.
    // }
 
    const  validateURL = (value) => {
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    }

    const toggleActive = (checker, index) => {
        console.log('activating one checker... ')
        console.log(checker.fullName)
        settingCheckerFromCheckOrder(checker)
        checkerChose(checkers[index]._id)
        activatingCheckerInterface(true)
        activatingCheckAppButton(true)
       
    }

    const ratingTruncked = checker.rating.toFixed(1)
    console.log(ratingTruncked)

    return (
        <div 
        key={checker._id} 
        onClick={() => toggleActive(checker, index)}
        className="checkerTile">
            <div className="checkerItemAvatar">
                    <div 
                    className='avatar'
                    style={{
                        width: '130px',
                        height: '130px',
                        borderRadius: '50%',
                        backgroundImage: `url(${validateURL(checker.picture) ? checker.picture : alternate_picture })`,
                        backgroundSize: 'cover',
                        marginLeft: '6%',
                        marginTop: '15%'  
                    }}
                    >

                    </div>
                <span className="checkerPrice">{price}$</span>
                    
            </div>
           
            {
                !checker.category[1] ?
                <div className="checkerInfoContainer_modified">
                    <div className="checkerInfo">
                        <div className="checkerInfo__name">
                            <h1>{checkerNameCapitalized}</h1>
                        </div>
                        <div className="checkerInfo__ciudad">
                            <h3>{checker.city_name}</h3>
                        </div>
                        <div className="checkerInfo__rating">
                            <h3>Rating:</h3>
                            <Rating 
                            value={ratingTruncked === '0.0' ? 5 : ratingTruncked} 
                            readOnly 
                            precision={0.5}
                            /> <h4>({ratingTruncked})</h4>
                        </div>
                        <CategoryLabelComponent checker={checker}/>
                    </div>
                    <div className="checkerBioButton">
                        <p>Ver más</p>  
                    </div>
            </div> 
            :
                <div className="checkerInfoContainer">
                    <div className="checkerInfo">
                        <div className="checkerInfo__name">
                            <h1>{checkerNameCapitalized}</h1>
                        </div>
                        <div className="checkerInfo__ciudad">
                            <h3>{checker.city_name}</h3>
                        </div>
                        <div className="checkerInfo__rating">
                            <h3>Rating:</h3>
                            <Rating 
                            value={ratingTruncked === '0.0' ? 5  : ratingTruncked} 
                            readOnly 
                            precision={0.5} 
                            /> <h4>({ratingTruncked})</h4>
                        </div>
                        <CategoryLabelComponent checker={checker}/>
                    </div>
                    <div className="checkerBioButton">
                        <p>Ver más</p>  
                    </div>
                </div>
            }
         
        </div>
    )
}

// **************** This is the section to go Backward in the whole checkApp
export const BackwardSectionComponent = ({comeBack}) => {
    return(
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
    )
}
