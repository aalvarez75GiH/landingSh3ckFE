
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../../state'
import {
    CheckerProfileTile,
    CheckerItemAvatar, 
    CheckerInfoContainer,
    CheckerProfileInfo,
    CheckerInfoName,
    CheckerInfoCiudad,
    CheckerInfoRating,
    CheckerInfoNameH1,
    CheckerInfoCiudadH3,
    CheckerInfoRatingH3,
    CheckerInfoRatingH4,
    CheckerBioButton,
    CheckerBioButtonP
} from '../../checkApp/checkers/checkersElements.js'
import alternate_picture from '../../../images/avatar_1.png'
import { capitalizeFullName } from '../checkAppUtilities'
import { Rating } from '@mui/material'

// **************** This is the avatar component shown at checkerItemAvatar component
export const CheckerSectionAvatar = ({ checker }) => {
    const  validateURL = (value) => {
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    }
    
   return (
        <div 
        className='onlyOneChecker_avatar'
        style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            backgroundImage: `url(${validateURL(checker.picture) ? checker.picture : alternate_picture })`,
            backgroundSize: 'cover',
            marginLeft: '6%',
            marginTop: '20%'  
        }}
        >
        </div>
    )
   
}

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
        <div className="checkerInfo__categoria">
            <h4></h4>
        </div>
        }
        
        </>
    )
}


export const CheckerProfileTileComponent = () => {
    
    const dispatch = useDispatch()
    const {
        activatingCheckerStatisticsInterface

    } = bindActionCreators(actionCreators, dispatch)

    
    const checker = useSelector((state) => state.checkOrderState.checker)
    const authCenter = useSelector((state) => state.checkOrderState.authCenter)
    const checkers_type = useSelector((state) => state.checkersState.checkers_type)
    // const checkerNameCapitalized = capitalizeAuthCenterFullName(checker.businessName)
    const checkerNameCapitalized = capitalizeFullName(checkers_type === 'authCenters' ? checker.businessName  : checker.fullName)
    const ratingTruncked = checker.rating.toFixed(1)

    const toggleActive = (checker, index) => {
        console.log('activating statistics interface... ')
        activatingCheckerStatisticsInterface(true)
        // console.log(checker.fullName)
        // settingCheckerFromCheckOrder(checker)
        // checkerChose(checkers[index]._id)
        // activatingCheckerInterface(true)
        // activatingCheckAppButton(true)
       
    }

    return(
        <CheckerProfileTile>
            <CheckerItemAvatar>
                <CheckerSectionAvatar
                checker={checker}
                />
            </CheckerItemAvatar>
            <CheckerInfoContainer>
                <CheckerProfileInfo>
                    <CheckerInfoName>
                        <CheckerInfoNameH1>{checkerNameCapitalized}</CheckerInfoNameH1>
                    </CheckerInfoName>
                    <CheckerInfoCiudad>
                        <CheckerInfoCiudadH3>{checker.city_name}</CheckerInfoCiudadH3>
                    </CheckerInfoCiudad>
                    <CheckerInfoRating>
                        <CheckerInfoRatingH3>Rating:</CheckerInfoRatingH3><Rating value={ratingTruncked === '0.0' ? 5  : ratingTruncked} readOnly precision={0.5} /><CheckerInfoRatingH4>({ratingTruncked})</CheckerInfoRatingH4>
                    </CheckerInfoRating>
                    <CategoryLabelComponent checker={checker}/>                        
                </CheckerProfileInfo>
                <CheckerBioButton
                onClick={toggleActive}
                >
                    <CheckerBioButtonP>Reputación</CheckerBioButtonP>
                </CheckerBioButton>
            </CheckerInfoContainer>
        </CheckerProfileTile>
    )
}

export const CheckerStatisticsTileComponent = () => {
    
    const dispatch = useDispatch()
    const {
        activatingCheckerStatisticsInterface

    } = bindActionCreators(actionCreators, dispatch)

    const checker = useSelector((state) => state.checkOrderState.checker)
    const checkers_type = useSelector((state) => state.checkersState.checkers_type)
    const checkerNameCapitalized = capitalizeFullName(checkers_type === 'authCenters' ? checker.businessName  : checker.fullName )
    const ratingTruncked = checker.rating.toFixed(1)

    return(
        <CheckerProfileTile>
            <CheckerItemAvatar>
                <CheckerSectionAvatar
                checker={checker}
                />
            </CheckerItemAvatar>
            <CheckerInfoContainer>
                <CheckerProfileInfo>
                    <CheckerInfoName>
                        <CheckerInfoNameH1>{checkerNameCapitalized}</CheckerInfoNameH1>
                    </CheckerInfoName>
                    <CheckerInfoCiudad>
                        <CheckerInfoCiudadH3>{checker.city_name}</CheckerInfoCiudadH3>
                    </CheckerInfoCiudad>
                    <CheckerInfoRating>
                        <CheckerInfoRatingH3>Rating:</CheckerInfoRatingH3><Rating value={ratingTruncked === '0.0' ? 5  : ratingTruncked} readOnly precision={0.5} /><CheckerInfoRatingH4>({ratingTruncked})</CheckerInfoRatingH4>
                    </CheckerInfoRating>
                    <CategoryLabelComponent checker={checker}/>                        
                </CheckerProfileInfo>
                {/* <CheckerBioButton
                onClick={toggleActive}
                >
                    <CheckerBioButtonP>Ver un poco más</CheckerBioButtonP>
                </CheckerBioButton> */}
            </CheckerInfoContainer>
        </CheckerProfileTile>
    )
}
