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
import accept_icon from '../../../images/2472241_accept_check_green_ok_success_icon.svg'
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
    CheckTypeDescDiv,
    CheckTypeDescDiv2,
    CheckTypeCaptionDescription,
    CheckerProfileButtonContainer,
    CheckerProfileItemsContainer,
    CheckTypeBioButton,
    CheckTypeBioButtonP,
    CheckTypeSliceButtonContainer,
    BackwardLeftArrowIcon,
    BackwardLeftArrowIconDescription,
    CheckTypeDescTest,
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
        activatingCheckTypeDescription, activatingCheckAppButton,
        settingBaseAtCheckOrder, settingCheckTypeBaseAtCheckTypeState
    } = bindActionCreators(actionCreators, dispatch)
    console.log(check_type)
    const check_type_active = useSelector((state) => state.checkOrderState.check_type)
    const level_used = useSelector((state) => state.overallCheckAppState.level_used )
    const service_time_base = useSelector((state) => state.productToCheckState.service_time_base)
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

    let totalPrice = service_time_base + check_type.base
    
    const settingPriceAndCheckTypeAtOrder = () => {
        settingBaseAtCheckOrder(totalPrice)
        settingCheckTypeBaseAtCheckTypeState(check_type.base)
        settingCheckTypeStandardAtOrder(check_type)
    }
    
  
    return(
        <>
        <CheckTypeTileInfo
        check_type={check_type}
        check_type_active={check_type_active}
        onClick={settingPriceAndCheckTypeAtOrder}
      
        >
            <CheckTypeTileInfoCaption>
                <CheckTypeCaption>{check_type.caption}</CheckTypeCaption>
            </CheckTypeTileInfoCaption>
            <CheckTypeTileInfoPrice>
                <CheckTypeTileInfoPriceLabel>
                    <Price>{totalPrice}$</Price>
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

export const AnimateHeight = ({
    ease,
    variants,
    check_type_active_description,
  }) => {
    const check_type = useSelector((state) => state.checkOrderState.check_type)
    // const ref = useRef(null);
    // const bounds = useMeasure(ref);
  
    return (
      <CheckTypeDescTest
        initial={check_type_active_description ? "open" : "collapsed"}
        animate={check_type_active_description ? "open" : "collapsed"}
        inherit={false}
        variants={variants}
        transition={{
            ease: "easeInOut",
            duration: 0.2,
            stiffness: 50

        }}
      >
            {
              check_type._id === '6243151a821ae231895b11c8' ?
              <CheckTypeTileInfoCaptionDescription>
                  <CheckTypeDescDiv>
                        <CheckTypeCaptionDescription>{check_type.caption}</CheckTypeCaptionDescription>
                  </CheckTypeDescDiv>
                  <CheckTypeDescDiv2>
                        <CheckTypeDesc>Chequéo del producto</CheckTypeDesc>
                        <CheckTypeDesc>video en tiempo real + fótos</CheckTypeDesc>
                  </CheckTypeDescDiv2>
              </CheckTypeTileInfoCaptionDescription>
              : null
            }
            {
                check_type._id === '6243156a821ae231895b11ce' ?
                <CheckTypeTileInfoCaptionDescription>
                  <CheckTypeDescDiv>
                    <CheckTypeCaptionDescription>{check_type.caption}</CheckTypeCaptionDescription>                                
                  </CheckTypeDescDiv>

                    {/* <CheckTypeDesc>Incluye:</CheckTypeDesc> */}
                    <CheckTypeDescDiv2>
                        <CheckTypeDesc>Chequéo del producto</CheckTypeDesc>
                        <CheckTypeDesc>video en tiempo real + fótos</CheckTypeDesc>
                        <CheckTypeDesc>Compra y delivery del prodúcto</CheckTypeDesc>
                    </CheckTypeDescDiv2>
                </CheckTypeTileInfoCaptionDescription>
                            :
                null
            }

          {/* </div> */}
      </CheckTypeDescTest>
    )
  }

const CheckerProfileTest = () => {
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

    const check_types = useSelector((state) => state.checkTypeState.check_types)
    
    const check_type_active = useSelector((state) => state.checkOrderState.check_type)
    const check_type_active_description = useSelector((state) => state.checkTypeState.check_type_active_description)
       

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
    const variants = {
        open: {
          opacity: 1,
          height: "145px",
          x: 0,
          y: 0
        },
        // collapsed: { opacity: 0, height: 0, x: -100, y: -100 }
        collapsed: { opacity: 0, height: 0, x: 0, y: -100 }
      };
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
                    <CheckersSectionTitle>Chequeador y tipo de Chequeo (Test)</CheckersSectionTitle>
                </CheckersTitleContainer>
                <CheckerProfileItemsContainer>
                    <CheckerProfileTileComponent/>
                <CheckTypeTileTitle>Tipo de chequeo</CheckTypeTileTitle>
                <CheckTypeContainer
                initial={{ height: '350px'  }} 
                animate={{ 
                    height: check_type_active_description ? '485px' : '350px', 
                    opacity: check_type_active_description ? 1 : 0 }}
                transition={{ stiffness: 33 }}
                exit={{ opacity: 0 }}
                >
                    <CheckTypeTileContainer>
                        {renderingCheckTypes}
                    </CheckTypeTileContainer>
                    <AnimateHeight
                    variants={variants}
                    check_type_active_description={check_type_active_description}
                        
                    >
                    </AnimateHeight>
                     
                </CheckTypeContainer>
                </CheckerProfileItemsContainer>
                    <CheckerProfileButtonContainer
                    id="checkerProfileButton"
                    >
                        <CheckAppButton
                        buttonLabel='Escoger éste...'
                        />
                    </CheckerProfileButtonContainer> 
            </CheckerProfileWrapper>

        </CheckerProfileContainer>
        

    )
}

export default CheckerProfileTest































{/* ************************************************************* */}
                    {/* <CheckTypeTileContainer2
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
                    </CheckTypeTileContainer2> */}

                    {/* ***************************************************************************** */}