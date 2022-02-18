import React from 'react'
import { infoCheck } from '../../utils/data'
import NavBarForCS from '../navBar/navBarForCS'

const CheckSection = ({
    language, 
    gettingOutOfCheckApp
}) => {
    return (
        <div className="checkSectionContainer">
            <div className="checkSectionWrapper">
                {/* <div className="checkSection-formTitle">
                    <h1 className="checkSection-title">{language === 'ES' ? infoCheck.checkSectionTitle : infoCheck.checkSectionTitle_EN}</h1>
                </div> */}

                <div className="checkSection-BtnWrap">
                        <button className="checkSection-checkBtn">
                        {language === 'ES' ? infoCheck.checkSectionBtnLabel : infoCheck.checkSectionBtnLabel_EN}
                        </button>
                        <button 
                        onClick={gettingOutOfCheckApp}
                        className="checkSection-exitBtn">
                        Salir de la app
                        </button>
                </div>
                {/* <div className="checkSection-notNow">   
                    <p>{language === 'ES' ? infoCheck.notNowlabel : infoCheck.notNowlabel_EN}</p>
                </div> */}
            </div>
        </div>
    )   
}

export default CheckSection