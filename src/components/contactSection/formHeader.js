import React from 'react'
import { infoContact } from '../../utils/data'
import { Link as LinkS } from 'react-scroll'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { bindActionCreators } from '@reduxjs/toolkit'
import useMobilDetection from '../../utils/mobilDetection'


const FormHeader = () => {
    const mobil1 = useMobilDetection()
    const dispatch = useDispatch()
    const {  openingContactSection, activatingForm, openingRegView } = bindActionCreators(actionCreators, dispatch)

    const active = useSelector((state) => state.contactSectionState.active)
    const language = useSelector((state) => state.sideBarState.language)
    const regView = useSelector((state) => state.contactSectionState.regView)
    const forgotPIN = useSelector((state) => state.contactSectionState.forgotPIN)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    
    const handlingClosingOfContactSection = () => {
        console.log('What is going on...')
        openingContactSection(false)
        activatingForm(null)
        openingRegView(false)
    }
    
    const OffsetHandler = (option) => {
        console.log(mobil1)
        if (option === 'checkAProduct'){
            if (mobil1.screenWidth <= 1098 && mobil1.screenWidth > 768){
                return -180
            }
            if (mobil1.screenWidth <= 768 && mobil1.screenWidth > 560 ){
                return -160
            }
            if (mobil1.screenWidth <= 560 && mobil1.screenWidth > 480){
                return -150
            }
            if (mobil1.screenWidth <= 480 && mobil1.screenWidth > 414){
                return -140
            }
            if (mobil1.screenWidth <= 414 && mobil1.screenWidth > 360){
                return 260
            }
            if (mobil1.screenWidth <= 360 && mobil1.screenWidth > 280){
                return 260
            }
        }
    }
    
    return (
        <>
        { active === 'interested' && (loggedIn || !loggedIn) ? 
        <div className="titleWrapper">
            <LinkS
            onClick={handlingClosingOfContactSection}
            to="nextStepSection"  
            activeClass="active"
            spy={true}
            smooth={true}
            offset={OffsetHandler('checkAProduct')}
            // offset={260}
            duration={500} 
            className="contactForms_comeBackLink">{ language === 'ES' ? infoContact.comeBackLink : infoContact.comeBackLink_EN}</LinkS>
            <div className="formTitle">
                <h1 className="title_1">{language === 'ES' ? infoContact.intUsers_h1 : infoContact.intUsers_h1_EN}</h1>
            </div>
        </div>
        : null}
        
        {active === 'login_form' && loggedIn === false ?
        <div className="titleWrapper">
            <LinkS
            onClick={handlingClosingOfContactSection}
            to="nextStepSection"  
            activeClass="active"
            spy={true}
            smooth={true}
            offset={OffsetHandler('checkAProduct')}
            // offset={260}
            duration={500} 
            className="contactForms_comeBackLink">{ language === 'ES' ? infoContact.comeBackLink : infoContact.comeBackLink_EN}
            </LinkS>
                <>
                    <div className="formTitle">
                        <h1 className="title_4">{language === 'ES' ? infoContact.login_h1 : infoContact.login_h1_EN} </h1>
                    </div>
                </>
        </div>
        :null
        }
        
        {active === 'check' && loggedIn === false ?
        <div className="titleWrapper">
            <LinkS
            onClick={handlingClosingOfContactSection}
            to="nextStepSection"  
            activeClass="active"
            spy={true}
            smooth={true}
            offset={OffsetHandler('checkAProduct')}
            // offset={260}
            duration={500} 
            className="contactForms_comeBackLink">{ language === 'ES' ? infoContact.comeBackLink : infoContact.comeBackLink_EN}
            </LinkS>
            <>
                <div className="formTitle">
                    <h1 className="title_3">{language === 'ES' ? infoContact.users_h1 : infoContact.users_h1_EN}</h1>
                </div>
            </>
        </div>
        :null
        }

    {active === 'forgotPIN' && loggedIn === false ?
        <div className="titleWrapper">
            <LinkS
            onClick={handlingClosingOfContactSection}
            to="nextStepSection"  
            activeClass="active"
            spy={true}
            smooth={true}
            offset={OffsetHandler('checkAProduct')}
            // offset={260}
            duration={500} 
            className="contactForms_comeBackLink">{ language === 'ES' ? infoContact.comeBackLink : infoContact.comeBackLink_EN}
            </LinkS>
            <>
                    <div className="formTitle">
                        <h1 className="title_4"> {language === 'ES' ? infoContact.genPIN_h1 : infoContact.genPIN_h1_EN} </h1>
                    </div>
                </>
            
        </div>
        :null
        }
        
        </> 
    )
}

export default FormHeader