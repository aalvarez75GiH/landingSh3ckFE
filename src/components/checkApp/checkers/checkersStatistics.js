import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { BackwardSectionComponent } from '../../checkApp/checkAppUtilities'
import { ReviewTileComponent } from './checkersSubComponents'
import { actionCreators } from '../../../state'
import { getRequestToCheckerReview } from '../../../requestsToApi'
import { Rating } from '@mui/material'
import rating_r_image from '../../../images/responsibility.svg'
import rating_p_image from '../../../images/alarm-on.svg'
import rating_k_image from '../../../images/heart.svg'
import rating_kw_image from '../../../images/study.svg'
import rating_t_image from '../../../images/honesty.svg'
import rating_c_image from '../../../images/communication (1).svg'
import user_comment_generic from '../../../images/user_comment.svg'
import useMobilDetection from '../../../utils/mobilDetection'
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
    RatingContainer,
    CheckersReviewsContainer,
    ReviewTile,
    ReviewUserAvatarContainer,
    ReviewUserCommentContainer,
    ReviewAvatar,
    Avatar
} from './checkersElements.js'


const CheckerStatistics = () => {
    const mobil = useMobilDetection()  
    const screenWidth = mobil.screenWidth
    console.log(screenWidth)


    const dispatch = useDispatch()
    const {  
        activatingCheckerStatisticsInterface,
        settingReviews
    } = bindActionCreators(actionCreators, dispatch)

    const checker = useSelector((state) => state.checkOrderState.checker)
    const active_checker_reviews = useSelector((state) => state.checkersState.active_checker_reviews)
    console.log(checker._id)
    console.log(active_checker_reviews)
    
    useEffect(()=> {
        const gettingReviews = async() => {
            const response = await getRequestToCheckerReview(checker._id)
            settingReviews(response)
            // console.log(response)
        }
        gettingReviews()
    },[])
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

const gettingScreenWidth = () => {
    if (screenWidth <= 1920 && screenWidth > 560){
        return 'large'
    }
    if (screenWidth <= 560 && screenWidth > 320){
        return 'small'
    }
}

 
const renderingReviewComponent = active_checker_reviews.map((review) => {
    const  validateURL = (value) => {
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    }
    return(
        <ReviewTile>
               <ReviewUserAvatarContainer>
                    <ReviewAvatar>
                        <Avatar
                        src={validateURL(review.user_picture) ? review.user_picture : user_comment_generic } 
                        // src={review.user_picture}
                        />
                    </ReviewAvatar>
                </ReviewUserAvatarContainer>
                <ReviewUserCommentContainer>
                    "{review.comment}"
                </ReviewUserCommentContainer>

        </ReviewTile>
            // <ReviewTileComponent/>  
    )
}) 
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
                                <Rating 
                                value={ratingsDivided.rating_r_divided} 
                                readOnly precision={0.5} 
                                // size={screenWidth <= 1920 && screenWidth >= 1536 ? 'large' : 'small'} 
                                size = {gettingScreenWidth()}
                                />
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
                                <Rating 
                                value={ratingsDivided.rating_p_divided} 
                                readOnly precision={0.5} 
                                // size="small"
                                size = {gettingScreenWidth()} 
                                />
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
                                <Rating 
                                value={ratingsDivided.rating_k_divided} 
                                readOnly precision={0.5} 
                                size = {gettingScreenWidth()} 
                                />
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
                                <Rating 
                                value={ratingsDivided.rating_kw_divided} 
                                readOnly precision={0.5} 
                                size = {gettingScreenWidth()} 
                                />
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
                                <Rating 
                                value={ratingsDivided.rating_t_divided} 
                                readOnly precision={0.5} 
                                size = {gettingScreenWidth()} 
                                />
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
                                <Rating 
                                value={ratingsDivided.rating_c_divided} 
                                readOnly precision={0.5} 
                                size = {gettingScreenWidth()} 
                                />
                                {/* <Rating/> */}
                            </RatingContainer>
                        </CheckerRating>
                    </CheckerRatingsTile>
                </CheckerProfileItemsContainer>
                <CheckersTitleContainer>
                    <CheckersSectionTitle>Algunos comentarios...</CheckersSectionTitle>
                </CheckersTitleContainer>
                <CheckersReviewsContainer>
                    {renderingReviewComponent}
                </CheckersReviewsContainer>
            </CheckerProfileWrapper>

        </CheckerProfileContainer>
        

    )
}

export default CheckerStatistics