import React, { useEffect } from 'react'
// import { infoCheck } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import { getRequestToCategories } from '../../../requestsToApi'
import { getRequestToServiceTime } from '../../../requestsToApi'
import { CheckAppButton, CategoryTile, ServiceTimeTile } from '../checkAppUtilities'
import arrow_icon_left from '../../../images/arrow_left_back_icon.svg'
import { 
    CategorySectionContainer, CategorySectionWrapper,
    BackwardSection, BackwardLeftArrowIcon,
    LeftArrow, BackwardLabel, CategoryTitleContainer,
    CategorySectionTitle, CategoryItemContainer,
    ServiceTimeTitleContainer, ServiceTimeTitle,
    ServiceTimeItemContainer
 

} from './categoryElements.js'


const CategorySection = () => {
    
    const dispatch = useDispatch()
    const {
        settingLevel, settingPreviousLevel,
        gettingCategories, gettingServiceTimes    
    } = bindActionCreators(actionCreators, dispatch) 
    const previous_level = useSelector((state) => state.checkOrderState.previous_level)
    const level = useSelector((state) => state.checkOrderState.level)
    const categories = useSelector((state) => state.categoryAndSTState.categories)
    const service_times = useSelector((state) => state.categoryAndSTState.service_times)
    console.log(categories)

    const comeBack = () => {
        settingLevel('city')
        settingPreviousLevel('category')
    }

    useEffect(()=> {
        const gettingCategoriesAndServiceTimeFromAPI = async() => {
            const responseCategories  = await getRequestToCategories()
            gettingCategories(responseCategories)
            const responseServiceTime = await getRequestToServiceTime()
            gettingServiceTimes(responseServiceTime)
        }
        gettingCategoriesAndServiceTimeFromAPI()
    },[])



    const renderingCategoryList = categories.map((category, index) => { 
        console.log(category) 
        console.log(category.image)
        return (
            <CategoryTile
            category={category}
            index={index}
            />
        )
    })

    const renderingTimeServiceList = service_times.map((ST, index) => {
        return (
            <ServiceTimeTile
            ST={ST}
            index={index}
            />
        )
    })
  
    
    return (
        
        <CategorySectionContainer
        initial={previous_level === 'checkers' ? { x: '-100vw', opacity: 0  } : { x: '100vw', opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CategorySectionWrapper>
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
                <CategoryTitleContainer>
                        <CategorySectionTitle>Escoge la categoría...</CategorySectionTitle>
                </CategoryTitleContainer>
                <CategoryItemContainer>
                    {renderingCategoryList} 
                </CategoryItemContainer>
                <ServiceTimeTitleContainer>
                    <ServiceTimeTitle>¿En cuanto tiempo lo necesitas?</ServiceTimeTitle>
                </ServiceTimeTitleContainer>
                <ServiceTimeItemContainer>
                    {renderingTimeServiceList} 
                </ServiceTimeItemContainer>
                <CheckAppButton />
            </CategorySectionWrapper>
        </CategorySectionContainer>

    )   
}

export default CategorySection

