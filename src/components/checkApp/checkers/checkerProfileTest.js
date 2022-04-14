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
import arrow_icon_right from '../../../images/3927254_arrow_arrow right_caret_caret right_chevron_icon.svg'
import arrow_icon_left from '../../../images/arrow_left_back_icon.svg'
import accept_icon from '../../../images/accept_check_green_ok_success_icon.svg'
import {
    CheckerProfileContainer,
    CheckerProfileWrapper,
    CheckersTitleContainer,
    CheckersSectionTitle,
    CheckTypeContainer,
    CheckTypeTileContainer,
    CheckTypeTileTitle,
    CheckTypeTileInfo,
    CheckTypeTileInfoPrice,
    CheckTypeTileInfoCaption,
    CheckTypeTileInfoCaptionDescription,
    CheckTypeTileInfoPriceLabel,
    // CheckTypeTileInfoPriceDesc,
    Price, CheckTypeCaption,
    CheckTypeCaptionDescription,
    CheckerProfileButtonContainer,
    CheckerProfileItemsContainer,
    CheckTypeBioButton,
    CheckTypeBioButtonP,
    CheckTypeSliceButtonContainer,
    BackwardLeftArrowIcon,
    BackwardLeftArrowIconDescription,
    // ForwardRightArrowIcon,
    // RightArrow,
    // ForwardLabel,
    BackwardLabel,
    // BackwardLeftArrowIcon,
    LeftArrow,
    CheckTypeTileContainer2,
    CheckTypeTileInfo2,
    CheckTypeDesc,
    CheckTypeActiveIconContainer,
    CheckTypeActiveIcon
} from './checkersElementsTest.js'
import { CheckerProfileTileComponent } from './checkersSubComponents'

const CheckTypeTileInfoComponent = ({ check_type, index }) => {
    const dispatch = useDispatch()
        
    const {  settingCheckTypeAtCheckOrder, levelUsed, 
        activatingCheckTypeDescription, activatingCheckAppButton
    } = bindActionCreators(actionCreators, dispatch)
    console.log(check_type)
    const service_time_price = useSelector((state) => state.checkOrderState.price)
    const check_type_active = useSelector((state) => state.checkOrderState.check_type)
    const level_used = useSelector((state) => state.overallCheckAppState.level_used )
    let arr = []
    arr = level_used

    const settingCheckTypeStandardAtOrder = (check_type) => {
        console.log(check_type)
        
        if (!arr.includes('checkers')){
            levelUsed('checkers')
        }
        settingCheckTypeAtCheckOrder(check_type)
        activatingCheckAppButton(true)
        activatingCheckTypeDescription(true)
    }
    
  
    return(
        <>
        <CheckTypeTileInfo
        check_type={check_type}
        check_type_active={check_type_active}
        // onClick={() => settingCheckTypeAtCheckOrder(check_type)}
        onClick={() => settingCheckTypeStandardAtOrder(check_type)}
        // to="cityContainer"  
        // activeClass="active"
        // spy={true}
        // smooth={true}
        // offset={-100}
        // duration={500}
        // key={check_type._id}
        >
            <CheckTypeTileInfoCaption>
                <CheckTypeCaption>{check_type.caption}</CheckTypeCaption>
            </CheckTypeTileInfoCaption>
            <CheckTypeTileInfoPrice>
                <CheckTypeTileInfoPriceLabel>
                    <Price>{service_time_price}$</Price>
                </CheckTypeTileInfoPriceLabel>
            </CheckTypeTileInfoPrice>
            <CheckTypeActiveIconContainer
            check_type={check_type}
            check_type_active={check_type_active}
            >
                <CheckTypeActiveIcon
                src={accept_icon}
                
                />
            </CheckTypeActiveIconContainer>
        </CheckTypeTileInfo>
        
        
        </>
    )
}

const CheckerProfile = () => {
    const dispatch = useDispatch()
    const {  
        settingLevel, 
        settingPreviousLevel,
        activatingCheckerInterface,
        settingCheckerFromCheckOrder,
        settingCheckTypeAtCheckOrder,
        activatingCheckAppButton,
        activatingCheckType,
        activatingCheckTypeDescription
    } = bindActionCreators(actionCreators, dispatch)

    const service_time_price = useSelector((state) => state.checkOrderState.price)
    const check_types = useSelector((state) => state.checkTypeState.check_types)
    const check_type = useSelector((state) => state.checkOrderState.check_type)
    const check_type_active = useSelector((state) => state.checkOrderState.check_type)
    const check_type_active_description = useSelector((state) => state.checkTypeState.check_type_active_description)
    const level_used = useSelector((state) => state.overallCheckAppState.level_used )
    


  const comeBack = () => {
        activatingCheckerInterface(false)
        settingCheckerFromCheckOrder('')
    }
    
    const deactivatingCheckDescriptionUI = () => {
        activatingCheckTypeDescription(false)
    }
    
    
    const renderingCheckTypes = check_types.map((checkType, index) => {
        return(
            <CheckTypeTileInfoComponent
            check_type={checkType}
            index={index}
            />
        )

    })
    console.log(renderingCheckTypes) 
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
                    <CheckersSectionTitle>Chequeador y tipo de Chequeo</CheckersSectionTitle>
                </CheckersTitleContainer>
                <CheckerProfileItemsContainer>
                    <CheckerProfileTileComponent/>
                <CheckTypeTileTitle>Tipo de chequeo</CheckTypeTileTitle>
                <CheckTypeContainer>
                    <CheckTypeTileContainer>
                        {renderingCheckTypes}
                    </CheckTypeTileContainer>
                    {/* ************************************************************* */}
                    <CheckTypeTileContainer2
                    // initial={{ opacity: 0, y: 50 }}
                    initial={{ x: '100vw'}}
                    animate={{  
                        x: check_type_active_description ? 0 : '100vw', 
                        opacity: check_type_active_description ? 1 : 0 
                    }}
                    transition={{ stiffness: 33 }}
                    exit={{  opacity: 0 }}>
                        <CheckTypeTileInfo2
                        check_type={check_type}
                        check_type_active={check_type_active}
                        to="cityContainer"  
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <BackwardLeftArrowIcon
                        onClick={deactivatingCheckDescriptionUI}
                        >
                            <LeftArrow
                            src={arrow_icon_left}
                            >
                            </LeftArrow>
                            <BackwardLabel>
                                Volver
                            </BackwardLabel>
                        </BackwardLeftArrowIcon>
                        {
                            check_type._id === '6243151a821ae231895b11c8' ?
                            <CheckTypeTileInfoCaptionDescription>
                                <CheckTypeCaptionDescription>{check_type.caption}</CheckTypeCaptionDescription>
                                <CheckTypeDesc>Incluye:</CheckTypeDesc>
                                <CheckTypeDesc>Chequéo del producto</CheckTypeDesc>
                                <CheckTypeDesc>video en tiempo real + fótos</CheckTypeDesc>
                            </CheckTypeTileInfoCaptionDescription>
                            :
                            null
                        }
                        {
                            check_type._id === '6243156a821ae231895b11ce' ?
                            <CheckTypeTileInfoCaptionDescription>
                                <CheckTypeCaptionDescription>{check_type.caption}</CheckTypeCaptionDescription>                                
                                <CheckTypeDesc>Incluye:</CheckTypeDesc>
                                <CheckTypeDesc>Chequéo del producto</CheckTypeDesc>
                                <CheckTypeDesc>video en tiempo real + fótos</CheckTypeDesc>
                                <CheckTypeDesc>Compra y delivery del prodúcto</CheckTypeDesc>
                            </CheckTypeTileInfoCaptionDescription>
                            :
                            null
                        }
                            
                        </CheckTypeTileInfo2>
                        {/* <CheckTypeSliceButtonContainer
                            checkType_1={true}
                            onClick={deactivatingCheckDescriptionUI}
                            >
                                <BackwardLeftArrowIcon>
                                <LeftArrow
                                src={arrow_icon_left}
                                >
                                </LeftArrow>
                                <BackwardLabel>
                                    Volver
                                </BackwardLabel>
                                </BackwardLeftArrowIcon>
                            </CheckTypeSliceButtonContainer> */}
                    </CheckTypeTileContainer2>

                    {/* ***************************************************************************** */}
                </CheckTypeContainer>
                </CheckerProfileItemsContainer>
                {/* { */}
                    {/* check_type_active ? */}
                    <CheckerProfileButtonContainer
                    id="checkerProfileButton"
                    >
                        <CheckAppButton
                        buttonLabel='Escoger éste...'
                        />
                    </CheckerProfileButtonContainer> 
                    {/* : null
                } */}
            </CheckerProfileWrapper>

        </CheckerProfileContainer>
        

    )
}

export default CheckerProfile
