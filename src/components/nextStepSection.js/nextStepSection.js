import React, { useState } from 'react'
import  { motion } from 'framer-motion'


// import LoginFormTest from './loginFormTest'

import picture from '../../images/2034873_chat_app_media_mobile_social_icon.svg'
import icon1 from '../../images/1783048_content_mobile_notification_push_icon.svg'
import icon2 from '../../images/7681162_courier_delivery_scooter_box_icon.svg'
import arrow from '../../images/3927254_arrow_arrow right_caret_caret right_chevron_icon.svg'
import FormHeader from '../contactSection/formHeader'

import { infoNextStep } from '../../utils/data'

const NextStepSection = ({
    language
}) => {
   
     
// if (upLoadingUser){
//     return (
//         <div 
//         id={infoContact.id}
//         className="contactContainer">
//             <div className="contactWrapper">
//                 <motion.div className="contactInfo"></motion.div>
//                 <div className="contactForms">
//                     <LoadingSpinner language={language}/>
//                     <OptionsForms/>
//                     <FormHeader/>
//                     { active === 'interested' && loggedIn ? <InterestedUsersForm/>:null}
//                     { active === 'interested' && loggedIn === false ? <InterestedUsersForm/>:null}
//                     { active === 'check' && loggedIn  ? <InterestedUsersForm/>:null}
//                     { active === 'check' && loggedIn === false  ? <LoginForm/>:null}
//                 </div>
//             </div>
//         </div>
//     )    
// }
// console.log(active)
return (
   
    <div 
    // id={infoContact.id}
    className="nextStepContainer">
        <div className="nextStepWrapper">
            <div className="nextStepInfo">
                <div className="nextStepInfoTitleContainer">
                    <p className="nextStepInfoTopLine">
                        {language === 'ES' ? infoNextStep.nextStepInfoTopLine : infoNextStep.nextStepInfoTopLine_EN}
                    </p>
                    <h1 className="nextStepInfoTitle1"> {language === 'ES' ? infoNextStep.nextStepInfoTitle1 : infoNextStep.nextStepInfoTitle1_EN} </h1>
                    {/* <h1 className="nextStepInfoTitle2"> {language === 'ES' ? infoNextStep.nextStepInfoTitle2 : infoNextStep.nextStepInfoTitle2_EN}</h1> */}
                    {/* <h1 className="nextStepInfoTitle3"> {language === 'ES' ? infoNextStep.nextStepInfoTitle3 : infoNextStep.nextStepInfoTitle3_EN}</h1> */}
                </div>
                {/* <div className="nextStepInfoImageContainer">
                    <img 
                    className="nextStepInfoImage"
                    src={picture} alt="" />
                </div> */}
                
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
                        <button
                        className="nextStepOption1"
                        type="submit"
                        >
                        <span>Notificame cuando la app este lista</span>
                        </button>
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
                        <button
                        className="nextStepOption2"
                        type="submit"
                        >
                            <span>Quiero chequear un Producto ahora</span>
                        </button>
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
