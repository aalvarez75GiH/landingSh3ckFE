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
import {
    CheckerProfileContainer,
    CheckerProfileWrapper,
    CheckersTitleContainer,
    CheckersSectionTitle,
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
    CheckerBioButtonP,
    CheckTypeTileContainer,
    CheckTypeTileTitle,
    CheckTypeTileInfo,
    CheckTypeTileInfoPrice,
    CheckTypeTileInfoCaption,
    CheckTypeTileInfoPriceLabel,
    CheckTypeTileInfoPriceDesc,
    Price, CheckTypeCaption,
    CheckerProfileButtonContainer,
    CheckerProfileItemsContainer,
    CheckTypeBioButton,
    CheckTypeBioButtonP
} from './checkersElements.js'
import { CheckerProfileTileComponent } from './checkersSubComponents'


const CheckerProfile = () => {
    const dispatch = useDispatch()
    const {  
        settingLevel, 
        settingPreviousLevel,
        activatingCheckerInterface,
        settingCheckerFromCheckOrder,
        gettingCheckTypesFromApi
    } = bindActionCreators(actionCreators, dispatch)

    const checker = useSelector((state) => state.checkOrderState.checker)
    const service_time_price = useSelector((state) => state.checkOrderState.price)
    const check_types = useSelector((state) => state.checkTypeState.check_types)
   
    useEffect(() => {
        const gettingCheckTypes = async() => {
            const response = await getRequestToCheckType()
            console.log(response)
            gettingCheckTypesFromApi(response)
        }
        gettingCheckTypes()
    },[])
    
  const comeBack = () => {
        activatingCheckerInterface(false)
        settingCheckerFromCheckOrder('')
    }
    const checkerNameCapitalized = capitalizeFullName(checker.fullName )


    // const renderingCheckTypeTiles = check_types.map((check_type) => {
    //     return(
    //         <CheckTypeTileContainer>
    //             <CheckTypeTileTitle>Tipo de chequeo</CheckTypeTileTitle>
    //             <CheckTypeTileInfo>
    //                 <CheckTypeTileInfoPrice>
    //                     <CheckTypeTileInfoPriceLabel>
    //                         <Price>{service_time_price}$</Price>
    //                     </CheckTypeTileInfoPriceLabel>
    //                     <CheckTypeTileInfoPriceDesc>Tiempo de respuesta</CheckTypeTileInfoPriceDesc>
    //                     <CheckTypeTileInfoPriceDesc>+ tipo de chequeo</CheckTypeTileInfoPriceDesc>
    //                 </CheckTypeTileInfoPrice>
    //                 <CheckTypeTileInfoCaption>
    //                     <CheckTypeCaption>{check_type.caption}</CheckTypeCaption>
    //                     <CheckerBioButton>¿Que esta incluido?</CheckerBioButton>
    //                 </CheckTypeTileInfoCaption>
    //             </CheckTypeTileInfo>
    //             </CheckTypeTileContainer>
    //     )
    // })
    // console.log(checkTypes[0].caption)
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
                <CheckerProfileItemsContainer>
                    <CheckerProfileTileComponent/>
                {/* <CheckerProfileTile>
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
                                <CheckerInfoRatingH3>Rating:</CheckerInfoRatingH3><Rating value={checker.rating} readOnly /><CheckerInfoRatingH4>({checker.rating})</CheckerInfoRatingH4>
                            </CheckerInfoRating>
                            <CategoryLabelComponent checker={checker}/>                        
                        </CheckerProfileInfo>
                        <CheckerBioButton>
                            <CheckerBioButtonP>Ver un poco más</CheckerBioButtonP>
                        </CheckerBioButton>
                    </CheckerInfoContainer>
                </CheckerProfileTile> */}
                {/* {renderingCheckTypeTiles} */}
                    <CheckTypeTileContainer>
                        <CheckTypeTileTitle>Tipo de chequeo</CheckTypeTileTitle>
                        <CheckTypeTileInfo>
                            <CheckTypeTileInfoPrice>
                                <CheckTypeTileInfoPriceLabel>
                                    <Price>{service_time_price}$</Price>
                                </CheckTypeTileInfoPriceLabel>
                                <CheckTypeTileInfoPriceDesc>Tiempo de respuesta</CheckTypeTileInfoPriceDesc>
                                <CheckTypeTileInfoPriceDesc>+ tipo de chequeo</CheckTypeTileInfoPriceDesc>
                            </CheckTypeTileInfoPrice>
                            <CheckTypeTileInfoCaption>
                                <CheckTypeCaption>{check_types[0] ? check_types[0].caption : 'its empty'}</CheckTypeCaption>
                                <CheckTypeBioButton>
                                    <CheckTypeBioButtonP>¿Que esta incluido?</CheckTypeBioButtonP>
                                </CheckTypeBioButton>
                            </CheckTypeTileInfoCaption>

                        </CheckTypeTileInfo>
                    </CheckTypeTileContainer>
                </CheckerProfileItemsContainer>
                    <CheckerProfileButtonContainer>
                        <CheckAppButton
                        buttonLabel='Escoger éste...'
                        />
                    </CheckerProfileButtonContainer> 
            </CheckerProfileWrapper>

        </CheckerProfileContainer>
        

    )
}

export default CheckerProfile

