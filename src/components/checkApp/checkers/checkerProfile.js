import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { BackwardSectionComponent, CheckAppButton } from '../../checkApp/checkAppUtilities'
import { actionCreators } from '../../../state'
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
    CheckTypeTileInfoPriceLabel,
    Price, CheckTypeCaption,
    CheckerProfileButtonContainer,
    CheckerProfileItemsContainer,
    CheckTypeActiveIconContainer,
    CheckTypeActiveIcon
} from './checkersElements.js'
import { AnimateHeight } from '../../checkApp/checkAppUtilities'
import { CheckerProfileTileComponent } from './checkersSubComponents'

const CheckTypeTileInfoComponent = ({ check_type }) => {
    const dispatch = useDispatch()
        
    const {  settingCheckTypeAtCheckOrder, levelUsed, 
        activatingCheckTypeDescription, activatingCheckAppButton,
        settingBaseAtCheckOrder, settingCheckTypeBaseAtCheckTypeState,
        activatingDescriptionTile
    } = bindActionCreators(actionCreators, dispatch)
    console.log(check_type)
    const check_type_active = useSelector((state) => state.checkOrderState.check_type)
    const level_used = useSelector((state) => state.overallCheckAppState.level_used )
    const service_time_base = useSelector((state) => state.productToCheckState.service_time_base)
    let arr = []
    arr = level_used

    const settingCheckTypeAtOrderAndDescTile = (check_type) => {
        console.log(check_type)
        
        if (!arr.includes('checkers')){
            levelUsed('checkers')
        }
        settingCheckTypeAtCheckOrder(check_type)
        activatingCheckAppButton(true)
        activatingDescriptionTile(true)
    }

    let totalPrice = service_time_base + check_type.base
    
    const settingPriceAndCheckTypeAtOrder = () => {
        // settingBaseAtCheckOrder(totalPrice)
        settingCheckTypeBaseAtCheckTypeState(check_type.base)
        settingCheckTypeAtOrderAndDescTile(check_type)
    }
    
  
    return(
        <>
        <CheckTypeTileInfo
        to="checkerProfileButton"  
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500} 
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

    
  

const CheckerProfile = () => {
    const dispatch = useDispatch()
    const {  activatingCheckerInterface, settingCheckerFromCheckOrder } = bindActionCreators(actionCreators, dispatch)

    const check_types = useSelector((state) => state.checkTypeState.check_types)
    const check_type_active_description = useSelector((state) => state.checkTypeState.check_type_active_description)
       

  const comeBack = () => {
        activatingCheckerInterface(false)
        // settingCheckerFromCheckOrder('')
    }
    

    const renderingCheckTypes = check_types.map((checkType) => {
        return(
            <CheckTypeTileInfoComponent
            check_type={checkType}
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
        collapsed: { opacity: 0, height: 0, x: 0, y: 0 }
      }

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
                    type='check_type_description'
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

export default CheckerProfile
