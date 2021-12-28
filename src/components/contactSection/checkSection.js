import React from 'react'
import { infoCheck } from '../../utils/data'

const CheckSection = ({language}) => {
    return (
        <div className="checkSectionContainer">
            <div className="checkSection-formTitle">
                <h1 className="checkSection-title">{language === 'ES' ? infoCheck.checkSectionTitle : infoCheck.checkSectionTitle_EN}</h1>
            </div>

            <div className="checkSection-BtnWrap">
                    <button className="checkSectionBtn-toCheck">
                    {language === 'ES' ? infoCheck.checkSectionBtnLabel : infoCheck.checkSectionBtnLabel_EN}
                    </button>
            </div>
            <div className="checkSection-notNow">   
                <p>{language === 'ES' ? infoCheck.notNowlabel : infoCheck.notNowlabel_EN}</p>
            </div>
            
        </div>
    )   
}

export default CheckSection