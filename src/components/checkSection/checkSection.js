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
                <div className="checkSection-BtnWrap">
                        <button className="checkSection-checkBtn">
                        {language === 'ES' ? infoCheck.checkSectionBtnLabel : infoCheck.checkSectionBtnLabel_EN}
                        </button>
                        <button 
                        onClick={gettingOutOfCheckApp}
                        className="checkSection-exitBtn">
                        {language === 'ES' ? infoCheck.checkSectionExitBtn : infoCheck.checkSectionExitBtn_EN}
        
                        </button>
                </div>
            </div>
        </div>
        // <div className="checkSectionTestContainer">
        //     <div className="checkSectionTestWrapper">
        //         <div className="checkSectionTest-BtnWrap">

        //         </div>
        //     </div>
        //     <div className="checkSectionTestWrapper">
        //         <div className="checkSectionTest-BtnWrap">

        //         </div>
        //     </div>
        // </div>
    )   
}

export default CheckSection