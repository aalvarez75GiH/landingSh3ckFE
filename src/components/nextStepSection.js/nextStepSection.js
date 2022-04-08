import React from 'react'
import { Link as LinkS } from 'react-scroll'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../../state'



// import LoginFormTest from './loginFormTest'

import picture from '../../images/2034873_chat_app_media_mobile_social_icon.svg'
import icon1 from '../../images/1783048_content_mobile_notification_push_icon.svg'
import icon2 from '../../images/7681162_courier_delivery_scooter_box_icon.svg'
import arrow from '../../images/3927254_arrow_arrow right_caret_caret right_chevron_icon.svg'



import { infoNextStep } from '../../utils/data'

const NextStepSection = ({
    handlingInterestedUser,
    handlingCheckUser
}) => {
    const dispatch = useDispatch()
    const { openingContactSection, activatingForm, openingRegView, openingForgotPINView  } = bindActionCreators(actionCreators, dispatch)
    const language = useSelector((state) => state.sideBarState.language)
       
        
    const renderingInterestedUsersForm = () => {
        openingContactSection(true)
        activatingForm('interested')
        openingRegView(false)
    }


    const renderingRegUsersForm = () => {
        openingContactSection(true)
        // activatingForm('check')
        activatingForm('login_form')
        openingRegView(false)
        openingForgotPINView(false)
    }

    return (
   
    <div 
    id={infoNextStep.id}
    className="nextStepContainer">
        <div className="nextStepWrapper">
            <div className="nextStepInfo">
                <div className="nextStepInfoTitleContainer">
                    <p className="nextStepInfoTopLine">
                        {language === 'ES' ? infoNextStep.nextStepInfoTopLine : infoNextStep.nextStepInfoTopLine_EN}
                    </p>
                    <h1 className="nextStepInfoTitle1"> {language === 'ES' ? infoNextStep.nextStepInfoTitle1 : infoNextStep.nextStepInfoTitle1_EN} </h1>
                </div>
            </div>
            <div className="NextStepOptionsContainer">
                <div className="nextStepInfoImageContainer">
                    <img 
                    className="nextStepInfoImage"
                    src={picture} alt="" />
                </div>
                
                <div className="NextStepOptionsButtonsContainer">
                    <div className="nextStepOption1_container">
                        <div className="nextStepOption1_icon">
                            <img 
                            className="nextStepInfoIcon"
                            src={icon1} alt="" />
                        </div>
                        <LinkS
                        to="contactSectionTest"  
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-130}
                        duration={500}
                        className="nextStepOption1"
                        type="submit"
                        onClick={renderingInterestedUsersForm}
                        >
                        <span>{language === 'ES' ? infoNextStep.nextStepButtonLabel_1 : infoNextStep.nextStepButtonLabel_1_EN}</span>
                        </LinkS>
                        <div className="nextStepOption1_arrow">
                            <img 
                                className="nextStepInfoArrow"
                                src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="nextStepOption2_container">
                        <div className="nextStepOption2_icon">
                            <img 
                            className="nextStepInfoIcon"
                            src={icon2} alt="" />
                        </div>
                        <LinkS
                        to="contactSectionTest"  
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-140}
                        duration={500}
                        className="nextStepOption2"
                        type="submit"
                        onClick={renderingRegUsersForm}
                        >
                            <span>{language === 'ES' ? infoNextStep.nextStepButtonLabel_2 : infoNextStep.nextStepButtonLabel_2_EN}</span>
                        </LinkS>
                        <div className="nextStepOption2_arrow">
                            <img 
                                className="nextStepInfoArrow"
                                src={arrow} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
)
}

export default NextStepSection
