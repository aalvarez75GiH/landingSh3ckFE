import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { 
        BackwardSectionComponent, 
        capitalizeFullName, 
        CheckAppButton 
    } from '../../checkApp/checkAppUtilities'
import {  CategoryLabelComponent } from './checkersSubComponents'
import { actionCreators } from '../../../state'
import { getRequestToCheckType } from '../../../requestsToApi'
import { Rating } from '@mui/material'
import { CheckerSectionAvatar } from './checkersSubComponents'
import rating_r_image from '../../../images/responsibility.svg'
import rating_p_image from '../../../images/alarm-on.svg'
import rating_k_image from '../../../images/heart.svg'
import rating_kw_image from '../../../images/study.svg'
import rating_t_image from '../../../images/honesty.svg'
import rating_c_image from '../../../images/communication (1).svg'
import {
    CheckerProfileContainer,
    CheckerProfileWrapper,
    CheckersTitleContainer,
    CheckersSectionTitle,
    CheckerProfileItemsContainer,
    CheckerRatingsTile,
    CheckerRating,
    CheckerRatingImg,
    RatingImg,
    CheckDescriptionContainer,
    CheckerRatingDescription,
    RatingContainer

} from './checkersElements.js'
import { CheckerStatisticsTileComponent } from './checkersSubComponents'

const CheckerStatistics = () => {
    const dispatch = useDispatch()
    const {  
        activatingCheckerStatisticsInterface
    } = bindActionCreators(actionCreators, dispatch)

    const checker = useSelector((state) => state.checkOrderState.checker)
    console.log(checker)
    
const comeBack = () => {
    activatingCheckerStatisticsInterface(false)
}

const ratingsDivided = {
    rating_r_divided: (checker.ratings.rating_r/checker.number_of_checks),
    rating_p_divided: (checker.ratings.rating_p/checker.number_of_checks),
    rating_k_divided: (checker.ratings.rating_k/checker.number_of_checks),
    rating_kw_divided: (checker.ratings.rating_kw/checker.number_of_checks),
    rating_t_divided: (checker.ratings.rating_t/checker.number_of_checks),
    rating_c_divided: (checker.ratings.rating_c/checker.number_of_checks)
}
console.log(ratingsDivided)
 
    return (
     
        <CheckerProfileContainer
        initial={{ x: '-100vw'  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        >
            <CheckerProfileWrapper>
                <BackwardSectionComponent
                comeBack={comeBack}
                />
                <CheckersTitleContainer>
                    <CheckersSectionTitle>Estadísticas de este chequeador</CheckersSectionTitle>
                </CheckersTitleContainer>
                <CheckerProfileItemsContainer>
                    <CheckerRatingsTile>
                        <CheckerRating>
                            <CheckerRatingImg>
                                <RatingImg
                                src={rating_r_image}
                                />
                            </CheckerRatingImg>
                            <CheckDescriptionContainer>
                                <CheckerRatingDescription>Responsabilidad</CheckerRatingDescription>
                            </CheckDescriptionContainer>
                            <RatingContainer>
                                <Rating value={ratingsDivided.rating_r_divided} readOnly precision={0.5} />
                                {/* <Rating/> */}
                            </RatingContainer>
                        </CheckerRating>
                        <CheckerRating>
                            <CheckerRatingImg>
                                <RatingImg
                                src={rating_p_image}
                                />
                            </CheckerRatingImg>
                            <CheckDescriptionContainer>
                                <CheckerRatingDescription>Puntualidad</CheckerRatingDescription>
                            </CheckDescriptionContainer>
                            <RatingContainer>
                                <Rating value={ratingsDivided.rating_p_divided} readOnly precision={0.5} />
                                {/* <Rating/> */}
                            </RatingContainer>
                        </CheckerRating>
                        <CheckerRating>
                            <CheckerRatingImg>
                                <RatingImg
                                src={rating_k_image}
                                />
                            </CheckerRatingImg>
                            <CheckDescriptionContainer>
                                <CheckerRatingDescription>Amabilidad</CheckerRatingDescription>
                            </CheckDescriptionContainer>
                            <RatingContainer>
                                <Rating value={ratingsDivided.rating_k_divided} readOnly precision={0.5} />
                                {/* <Rating/> */}
                            </RatingContainer>
                        </CheckerRating>
                        <CheckerRating>
                            <CheckerRatingImg>
                                <RatingImg
                                src={rating_kw_image}
                                />
                            </CheckerRatingImg>
                            <CheckDescriptionContainer>
                                <CheckerRatingDescription>Conocimiento</CheckerRatingDescription>
                            </CheckDescriptionContainer>
                            <RatingContainer>
                                <Rating value={ratingsDivided.rating_kw_divided} readOnly precision={0.5} />
                                {/* <Rating/> */}
                            </RatingContainer>
                        </CheckerRating>
                        <CheckerRating>
                            <CheckerRatingImg>
                                <RatingImg
                                src={rating_t_image}
                                />
                            </CheckerRatingImg>
                            <CheckDescriptionContainer>
                                <CheckerRatingDescription>Confianza</CheckerRatingDescription>
                            </CheckDescriptionContainer>
                            <RatingContainer>
                                <Rating value={ratingsDivided.rating_t_divided} readOnly precision={0.5} />
                                {/* <Rating/> */}
                            </RatingContainer>
                        </CheckerRating>
                        <CheckerRating>
                            <CheckerRatingImg>
                                <RatingImg
                                src={rating_c_image}
                                />
                            </CheckerRatingImg>
                            <CheckDescriptionContainer>
                                <CheckerRatingDescription>Comunicativo</CheckerRatingDescription>
                            </CheckDescriptionContainer>
                            <RatingContainer>
                                <Rating value={ratingsDivided.rating_c_divided} readOnly precision={0.5} />
                                {/* <Rating/> */}
                            </RatingContainer>
                        </CheckerRating>
                    </CheckerRatingsTile>
                </CheckerProfileItemsContainer>
                    {/* <CheckerProfileButtonContainer>
                        <CheckAppButton
                        buttonLabel='Escoger éste...'
                        />
                    </CheckerProfileButtonContainer>  */}
            </CheckerProfileWrapper>

        </CheckerProfileContainer>
        

    )
}

export default CheckerStatistics