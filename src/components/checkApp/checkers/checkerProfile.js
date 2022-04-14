import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { motion, AnimatePresence } from 'framer-motion'
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
    CheckTypeTileInfoPriceLabel,
    CheckTypeTileInfoPriceDesc,
    Price, CheckTypeCaption,
    CheckerProfileButtonContainer,
    CheckerProfileItemsContainer,
    CheckTypeBioButton,
    CheckTypeBioButtonP,
    CheckTypeSliceButtonContainer,
    ForwardRightArrowIcon,
    RightArrow,
    ForwardLabel,
    BackwardLabel,
    BackwardLeftArrowIcon,
    LeftArrow,
    CheckTypeTileContainer2,
    CheckTypeTileInfo2,
    CheckTypeDesc
} from './checkersElements.js'
import { CheckerProfileTileComponent } from './checkersSubComponents'


const CheckerProfile = () => {
    const dispatch = useDispatch()
    const {  
        settingLevel, 
        settingPreviousLevel,
        activatingCheckerInterface,
        settingCheckerFromCheckOrder,
        settingCheckTypeAtCheckOrder,
        activatingCheckAppButton,
        activatingCheckType,levelUsed
    } = bindActionCreators(actionCreators, dispatch)

    const service_time_price = useSelector((state) => state.checkOrderState.price)
    const check_types = useSelector((state) => state.checkTypeState.check_types)
    const check_type = useSelector((state) => state.checkOrderState.check_type)
    const check_type_active = useSelector((state) => state.checkTypeState.check_type_active)
    const level_used = useSelector((state) => state.overallCheckAppState.level_used )
    let arr = []
    arr = level_used
    const [checkTypeIndex, setCheckTypeIndex] = useState(0)
    const [ secondCheckType, setSecondCheckType] = useState(false)
  const comeBack = () => {
        activatingCheckerInterface(false)
        settingCheckerFromCheckOrder('')
    }
    
    
    const movingToForwardCategory = (checkTypeIndex) => {
        setSecondCheckType(true)
    }
    const movingToBackwardCategory = (checkTypeIndex) => {
        setSecondCheckType(false)
    }

    const settingCheckTypeStandardAtOrder = () => {
        console.log(check_types[0])
        if (!arr.includes('checkers')){
            levelUsed('checkers')
        }
        settingCheckTypeAtCheckOrder(check_types[0])
        activatingCheckAppButton(true)
        activatingCheckType(true)
    }
    
    const settingCheckTypePlusAtOrder = () => {
        console.log(check_types[0])
        if (!arr.includes('checkers')){
            levelUsed('checkers')
        }
        settingCheckTypeAtCheckOrder(check_types[1])
        activatingCheckAppButton(true)
        activatingCheckType(true)
    }


    console.log(secondCheckType)
    
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
                    <CheckersSectionTitle>Perfil del Chequeador</CheckersSectionTitle>
                </CheckersTitleContainer>
                <CheckerProfileItemsContainer>
                    <CheckerProfileTileComponent/>
                <CheckTypeContainer>
                    <CheckTypeTileContainer>
                        <CheckTypeTileTitle>Tipo de chequeo</CheckTypeTileTitle>
                        <CheckTypeTileInfo
                        check_type={check_type}
                        onClick={settingCheckTypeStandardAtOrder}
                        to="cityContainer"  
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        >
                            <CheckTypeTileInfoPrice>
                                <CheckTypeTileInfoPriceLabel>
                                    <Price>{service_time_price}$</Price>
                                </CheckTypeTileInfoPriceLabel>
                                <CheckTypeTileInfoPriceDesc>Tiempo de respuesta</CheckTypeTileInfoPriceDesc>
                                <CheckTypeTileInfoPriceDesc>+ tipo de chequeo</CheckTypeTileInfoPriceDesc>
                            </CheckTypeTileInfoPrice>
                            <CheckTypeTileInfoCaption>
                                <CheckTypeCaption>{check_types[0].caption}</CheckTypeCaption>
                                <CheckTypeBioButton>
                                    <CheckTypeBioButtonP>Escoger</CheckTypeBioButtonP>
                                </CheckTypeBioButton>
                                <CheckTypeDesc>Incluye:</CheckTypeDesc>
                                <CheckTypeDesc>Chequéo del producto</CheckTypeDesc>
                                <CheckTypeDesc>video en tiempo real + fótos</CheckTypeDesc>
                            </CheckTypeTileInfoCaption>
                        </CheckTypeTileInfo>
                            <CheckTypeSliceButtonContainer
                            checkType_2={true}
                            onClick={movingToForwardCategory}
                            >
                            <ForwardRightArrowIcon>
                            <ForwardLabel>
                                Ver otra opción
                            </ForwardLabel>
                                <RightArrow
                                src={arrow_icon_right}
                                >
                                </RightArrow>
                            </ForwardRightArrowIcon>
                            </CheckTypeSliceButtonContainer>
                        </CheckTypeTileContainer>
                    {/* ************************************************************* */}
                    <CheckTypeTileContainer2
                    // initial={{ opacity: 0, y: 50 }}
                    initial={{ x: '100vw'}}
                    animate={{  
                        x: secondCheckType ? 0 : '100vw', 
                        opacity: secondCheckType ? 1 : 0 
                    }}
                    transition={{ stiffness: 33 }}
                    exit={{  opacity: 0 }}>
                        <CheckTypeTileTitle>Tipo de chequeo</CheckTypeTileTitle>
                        <CheckTypeTileInfo2
                        check_type={check_type}
                        onClick={settingCheckTypePlusAtOrder}
                        to="cityContainer"  
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        >
                            <CheckTypeTileInfoPrice>
                                <CheckTypeTileInfoPriceLabel>
                                    <Price>{service_time_price}$</Price>
                                </CheckTypeTileInfoPriceLabel>
                                <CheckTypeDesc>Tiempo de respuesta</CheckTypeDesc>
                                <CheckTypeDesc>+ tipo de chequeo</CheckTypeDesc>
                            </CheckTypeTileInfoPrice>
                            <CheckTypeTileInfoCaption>
                                <CheckTypeCaption>{check_types[1].caption}</CheckTypeCaption>
                                {/* <CheckTypeCaption>Chequeo Est.</CheckTypeCaption> */}
                                <CheckTypeBioButton>
                                    <CheckTypeBioButtonP>Escoger</CheckTypeBioButtonP>
                                </CheckTypeBioButton>
                                <CheckTypeDesc>Incluye:</CheckTypeDesc>
                                <CheckTypeDesc>Chequéo del producto</CheckTypeDesc>
                                <CheckTypeDesc>video en tiempo real + fótos</CheckTypeDesc>
                                <CheckTypeDesc>Compra y delivery del prodúcto</CheckTypeDesc>
                            </CheckTypeTileInfoCaption>
                        </CheckTypeTileInfo2>
                           <CheckTypeSliceButtonContainer
                            checkType_1={true}
                            onClick={movingToBackwardCategory}
                            >
                                <BackwardLeftArrowIcon>
                                <LeftArrow
                                src={arrow_icon_left}
                                >
                                </LeftArrow>
                                <BackwardLabel>
                                    Volver a la 1era opción
                                </BackwardLabel>
                                </BackwardLeftArrowIcon>
                            </CheckTypeSliceButtonContainer>
                    </CheckTypeTileContainer2>
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
