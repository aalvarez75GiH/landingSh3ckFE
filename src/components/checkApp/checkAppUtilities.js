import React, { useEffect } from 'react'
<<<<<<< HEAD
import { Stack, Rating } from '@mui/material'
=======
import { Rating } from '@mui/material'
>>>>>>> sh3ckApp
import { Link as LinkS } from 'react-scroll'
import  { useSelector, useDispatch }  from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'
import city_icon_black from '../../images/city_icon_3.svg'
import alternate_picture from '../../images/avatar_1.png'

// ******************** CheckApp Utilities ******************
export const CheckAppButton = () => {
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
            Siguiente
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

export const CategoryLabelComponent = ({ checker }) => {
    return (
        <>
        {
        checker.category[1] ?
        <div className="checkerInfo__categoria">
            <h3>Chequea:</h3> <h4>{checker.category[0].category_name},</h4> 
        </div>    
        :
        <div className="checkerInfo__categoria">
            <h3>Chequea:</h3> <h4>{checker.category[0].category_name}</h4> 
        </div>
        }
        {
            checker.category[1] ?
        <div className="checkerInfo__categoria">
            <h4>{checker.category[1].category_name}</h4>
        </div>
        :
        null
        }
        </>
    )
}
 
export const CheckerTile = ({ checker, index }) => {
    
    console.log(checker.category[0].category_name)
    const dispatch = useDispatch()
    const {
      
    } = bindActionCreators(actionCreators, dispatch)

    console.log(checker.category)
    
    const capitalizeFirstLetter = (string) => {
        const str2 = string.charAt(0).toUpperCase()+ string.slice(1)
        console.log(str2.split(' ')[0]);
        return str2    
    }
    const checkerNameCapitalized = capitalizeFirstLetter(checker.fullName )

    const  validateURL = (value) => {
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    }

    const validatingAwsUrl = validateURL(checker.picture)
    console.log(validatingAwsUrl)


    return (
        <LinkS
        to="serviceTimesContainer"  
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500} 
        key={checker._id} 
        // onClick={}
        className="checkerTile">
            <div className="checkerItemAvatar">
                    <div 
                    className='avatar'
                    style={{
                        width: '130px',
                        height: '130px',
                        borderRadius: '50%',
                        // backgroundImage: `url(${checker.picture})`,
                        backgroundImage: `url(${validatingAwsUrl ? checker.picture : alternate_picture })`,
                        backgroundSize: 'cover',
                        marginLeft: '6%',
                        marginTop: '15%'

                        
                    }}
                    >

                    </div>
                <span className="checkerRoute">ver ruta</span>
                    
            </div>
            <div className="checkerInfoContainer">
                <div className="checkerInfo">
                    <div className="checkerInfo__name">
                        <h1>{checkerNameCapitalized}</h1>
                    </div>
                    <div className="checkerInfo__ciudad">
                        <h3>{checker.city_name}</h3>
                    </div>
                    {/* <Stack spacing={1}>
                     <Rating value={4} readOnly/>
                    </Stack> */}
                    <div className="checkerInfo__rating">
<<<<<<< HEAD
                    <h3>Rating:</h3><Rating value={checker.rating} readOnly /> <h4>({checker.rating})</h4>
                        {/* <h4>{checker.rating}</h4> */}
=======
                        <h3>Rating:</h3><Rating value={checker.rating} readOnly /> <h4>({checker.rating})</h4>
>>>>>>> sh3ckApp
                    </div>
                    <CategoryLabelComponent checker={checker}/>
                   
                </div>
                <div className="checkerBioButton">
<<<<<<< HEAD
                    <p>Ver más...</p>  
=======
                    <p>Ver más</p>  
>>>>>>> sh3ckApp
                </div>
            </div>
        </LinkS>
    )
}

