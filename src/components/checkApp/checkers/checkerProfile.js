import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { BackwardSectionComponent, CheckerSectionAvatar, 
        capitalizeFullName, CategoryLabelComponent, 
    } from '../../checkApp/checkAppUtilities'
import { actionCreators } from '../../../state'
import { Rating } from '@mui/material'

import {
    CheckerProfileContainer,
    CheckerProfileWrapper,
    BackwardSection,
    BackwardLeftArrowIcon,
    BackwardLabel,
    LeftArrow,
    CheckersTitleContainer,
    CheckersSectionTitle,
    CheckerProfileTile,
    CheckerItemAvatar, 
    CheckerInfoContainer,
    CheckerInfoName,
    CheckerInfoCiudad,
    CheckerInfoRating,
    CheckerInfoNameH1,
    CheckerInfoCiudadH3,
    CheckerInfoRatingH3,
    CheckerInfoRatingH4,
    CheckerBioButton,
    CheckerBioButtonP

} from './checkersElements.js'



const CheckerProfile = () => {
    const dispatch = useDispatch()
    const {  
        settingLevel, 
        settingPreviousLevel,
        activatingCheckerInterface,
        settingCheckerFromCheckOrder
    } = bindActionCreators(actionCreators, dispatch)

    const active = useSelector((state) => state.checkersState.checker_gui_active)
    const checker = useSelector((state) => state.checkOrderState.checker)
    
    const comeBack = () => {
        activatingCheckerInterface(false)
        settingCheckerFromCheckOrder('')
    }
    console.log(checker.category)
    const checkerNameCapitalized = capitalizeFullName(checker.fullName )

    return (
     
        <CheckerProfileContainer
        initial={{ x: '-100vw'  }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 33 }}
        exit={{ opacity: 0 }}
        // active={active}
        >
            <CheckerProfileWrapper>
                <BackwardSectionComponent
                comeBack={comeBack}
                />
                <CheckersTitleContainer>
                    <CheckersSectionTitle>Perfil del Chequeador</CheckersSectionTitle>
                </CheckersTitleContainer>
                <CheckerProfileTile>
                    <CheckerItemAvatar>
                        <CheckerSectionAvatar
                        checker={checker}
                        />
                    </CheckerItemAvatar>
                    <CheckerInfoContainer>
                        <checkerInfo>
                            <CheckerInfoName>
                                <CheckerInfoNameH1>{checkerNameCapitalized}</CheckerInfoNameH1>
                            </CheckerInfoName>
                            <CheckerInfoCiudad>
                                <CheckerInfoCiudadH3>{checker.city_name}</CheckerInfoCiudadH3>
                            </CheckerInfoCiudad>
                            <CheckerInfoRating>
                                <CheckerInfoRatingH3>Rating:</CheckerInfoRatingH3><Rating value={checker.rating} readOnly /><CheckerInfoRatingH4>({checker.rating})</CheckerInfoRatingH4>

                            </CheckerInfoRating>
                            <CategoryLabelComponent checker={checker}/>

                        </checkerInfo>
                        <CheckerBioButton>
                            <CheckerBioButtonP>Ver más</CheckerBioButtonP>
                        </CheckerBioButton>
                    </CheckerInfoContainer>

                </CheckerProfileTile>
            </CheckerProfileWrapper>

        </CheckerProfileContainer>
        

    )
}

export default CheckerProfile

